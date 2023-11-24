import { API_URL } from "@shared/constants";
import axios from "axios";

export async function createAxios() {
	const instance = axios.create({
		baseURL: API_URL
	});

	return instance;
}
