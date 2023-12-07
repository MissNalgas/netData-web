export type IRegister = {
	message: string;
};

export type registerRequest = {
	mail: string;
	name: string;
	lastName: string;
	company: string;
	password: string;
	token: string;
};

export type IFormResponse = {
	data: {
		user: {
			username: string;
			pool: {
				userPoolId: string;
				clientId: string;
				client: {
					endpoint: string;
					fetchOptions: {};
				};
				advancedSecurityDataCollectionFlag: boolean;
			};
			Session: null;
			client: {
				endpoint: string;
				fetchOptions: {};
			};
			signInUserSession: null;
			authenticationFlowType: string;
			keyPrefix: string;
			userDataKey: string;
		};
		userConfirmed: boolean;
		userSub: string;
		codeDeliveryDetails: {
			AttributeName: string;
			DeliveryMedium: string;
			Destination: string;
		};
		message: "";
		status: "";
	};
};
