import { AuthError } from "./auth";

export class SentriaError extends Error {
	/* eslint-disable no-unused-vars */
	constructor(
		readonly code: AuthError,
		message: string
	) {
		super(message);
		Object.setPrototypeOf(this, SentriaError.prototype);
	}
}
