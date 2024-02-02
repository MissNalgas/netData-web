import { API_URL } from "@shared/constants";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";

let ERROR_TOAST_SHOWN = false;
const MAX_RETRY = 3;
const RETRY_DELAY = 5000;

export async function createAxios() {
	const instance = axios.create({
		baseURL: API_URL,
	});

	return instance;
}

export async function createAxiosApp() {
	const instance = axios.create({
		baseURL: API_URL,
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + localStorage.getItem("tokenApp") || "",
		},
	});

	instance.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			if (error.response) {
				const validateToken = error.response.data.name;
				localStorage.setItem("isExpired", validateToken);

				if (
					(localStorage.getItem("isExpired") ===
						"TokenExpiredError" &&
						validateToken === "TokenExpiredError" &&
						!ERROR_TOAST_SHOWN) ||
					(localStorage.getItem("isExpired") ===
						"JsonWebTokenError" &&
						validateToken === "JsonWebTokenError" &&
						!ERROR_TOAST_SHOWN)
				) {
					toast.error("Tu sesión ha expirado");
					ERROR_TOAST_SHOWN = true;
					localStorage.removeItem("isExpired");
					localStorage.removeItem("tokenApp");
					window.location.replace("/login");
				}
			}
			return Promise.reject(error);
		}
	);

	const instancePost = instance.post;

	instance.post = <T = any, R = AxiosResponse<T, any>, D = any>(
		url: string,
		data?: D,
		config?: AxiosRequestConfig<D>
	) => {
		return new Promise<R>((resolve, reject) => {
			function retry(retryCount = 0) {
				instancePost<T, R, D>(url, data, config)
					.then(resolve)
					.catch((err: any) => {
						const status = err?.response?.status;
						if (retryCount > MAX_RETRY && status !== 401) {
							reject(err);
						} else {
							setTimeout(() => {
								retry(retryCount + 1);
							}, RETRY_DELAY);
						}
					});
			}
			retry(0);
		});
	};

	const instanceGet = instance.get;

	instance.get = <T = any, R = AxiosResponse<T, any>, D = any>(
		url: string,
		config?: AxiosRequestConfig<D>
	) => {
		return new Promise<R>((resolve, reject) => {
			function retry(retryCount = 0) {
				instanceGet<T, R, D>(url, config)
					.then(resolve)
					.catch((err: any) => {
						const status = err?.response?.status;
						if (retryCount > MAX_RETRY && status !== 401) {
							//If status is 401, it means that the token has expired and we don't want to retry
							reject(err);
						} else {
							setTimeout(() => {
								retry(retryCount + 1);
							}, RETRY_DELAY);
						}
					});
			}
			retry(0);
		});
	};

	return instance;
}
