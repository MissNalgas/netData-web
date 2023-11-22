export function currentUnix() {
	return Math.floor(Date.now() / 1000);
}
export function isValidToken(token: string): boolean {
	if (!token) return false;

	const [, bodyB64] = token.split(".");

	let body;
	try {
		body = JSON.parse(atob(bodyB64));
	} catch (_err) {
		return false;
	}

	return !!body.exp;
	// return body.exp <= currentUnix();
}
