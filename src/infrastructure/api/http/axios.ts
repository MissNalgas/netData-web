import { API_URL } from "@shared/constants";
import axios from "axios";

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
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + localStorage.getItem("tokenApp") || "",
		},
	});

	return instance;
}
