export interface IXelcoInscriptionDTO {
	response?: string;
}

export interface IXelcoErrorDTO {
	code: string;
	name: string;
}

export interface IXelcoLoginDTO {
	idToken?: {
		jwtToken?: string;
		payload?: {
			sub?: string;
			email_verified?: boolean;
			iss?: string;
			"cognito:username"?: string;
			"custom:company"?: string;
			origin_jti?: string;
			aud?: string;
			"custom:last_name": string;
			event_id?: string;
			"custom:name": string;
			token_use?: string;
			auth_time?: number;
			exp?: number;
			"custom:tokenDevice": string;
			iat?: number;
			jti?: string;
			email?: string;
		};
	};
	refreshToken?: {
		token?: string;
	};
	accessToken?: {
		jwtToken?: string;
		payload?: {
			sub?: string;
			iss?: string;
			client_id?: string;
			origin_jti?: string;
			event_id?: string;
			token_use?: string;
			scope?: string;
			auth_time?: number;
			exp?: number;
			iat?: number;
			jti?: string;
			username?: string;
		};
	};
	clockDrift?: number;
	otpauth: string | null;
}
