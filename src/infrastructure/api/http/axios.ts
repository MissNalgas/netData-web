import { store } from "@infrastructure/store";
import { resetState } from "@infrastructure/store/user/actions";
import { API_URL } from "@shared/constants";
import axios from "axios";
import { toast } from "react-toastify";

export async function createAxios() {
	const instance = axios.create({
		baseURL: API_URL,
	});

	return instance;
}

export async function createAxiosApp() {
	let errorToastShown = false;

	const instance = axios.create({
		baseURL: API_URL,
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
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

				if (
					validateToken === "TokenExpiredError" ||
					(validateToken === "JsonWebTokenError" && !errorToastShown)
				) {
					toast.error("Tu sesión ha expirado");
					errorToastShown = true;
					localStorage.removeItem("tokenApp");
					store.dispatch(resetState());
				}
			}
			return Promise.reject(error);
		}
	);
	return instance;
}
