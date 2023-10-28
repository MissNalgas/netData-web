import axios from "axios";

const headers = {
	"Content-Type": "application/json"
};

const get = async <T>(url: string) => {
	const response = await axios.get(url, {
		headers
	});
	return response.data as T;
};

const post = async <T>(url: string, body: any) => {
	const response = await axios.post(url, body, {
		headers
	});
	return response.data as T;
};

const put = async <T>(url: string, body: any) => {
	const response = await axios.put(url, body, {
		headers
	});
	return response.data as T;
};

export const http = {
	get,
	post,
	put
};
