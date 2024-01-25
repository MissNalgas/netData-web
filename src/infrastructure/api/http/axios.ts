import { API_URL } from "@shared/constants";
import axios from "axios";
import { toast } from "react-toastify";
import { store } from "@infrastructure/store";
import { resetState } from "@infrastructure/store/user/actions";

let ERROR_TOAST_SHOWN = false;

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

					store.dispatch(resetState());

					localStorage.clear();
				}
			}
			return Promise.reject(error);
		}
	);

	return instance;
}
