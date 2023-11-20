import axios from "axios";

//@todo: Insert from env vars
const BASE_URL = process.env.API_URL;

export async function createAxios() {
	const instance = axios.create({
		baseURL: BASE_URL,
	});

	return instance;
}
