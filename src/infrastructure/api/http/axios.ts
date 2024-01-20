import { store } from "@infrastructure/store";
import { resetState } from "@infrastructure/store/user/actions";
import { API_URL } from "@shared/constants";
import axios from "axios";
import { toast } from "react-toastify";

let errorToastShown = false;

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
			"ngrok-skip-browser-warning": 6920,
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
						!errorToastShown) ||
					(localStorage.getItem("isExpired") ===
						"JsonWebTokenError" &&
						validateToken === "JsonWebTokenError" &&
						!errorToastShown)
				) {
					toast.error("Tu sesión ha expirado");
					errorToastShown = true;
					localStorage.removeItem("tokenApp");
					localStorage.removeItem("isExpired");

					store.dispatch(resetState());
				}
			}
			return Promise.reject(error);
		}
	);

	return instance;
}
