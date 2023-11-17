import axios from "axios";

//@todo: Insert from env vars
const BASE_URL = "https://api1.sentria.io";

export async function createAxios() {
	const instance = axios.create({
		baseURL: BASE_URL,
	});

	return instance;
}
