import { useTypedSelector } from "@hooks/use-typed-selector";
import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { IUserContext } from "./models";
import { useAppDispatch } from "@hooks/use-dispatch";
import {
	getDataUser,
	resetState,
	validateOTP,
} from "@infrastructure/store/user/actions";
import { usePathname, useRouter } from "next/navigation";
import { PUBLIC_ROUTES } from "./consts";
import { isValidToken } from "@shared/utils";
import "shared/utils/firebase";
import LoaderComponent from "@shared/components/loader";
import { IUser } from "@domain/models";
import { ValidateOTPPayload } from "@infrastructure/store/user/types";

const AuthContext = createContext<IUserContext>({
	user: undefined,
	async login(_email: string, _password: string): Promise<IUser> {
		throw new Error("Unimplemented");
	},
	logOut() {},
	async validateOtp() {
		throw new Error("Unimplemented");
	},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: AuthProviderProps) {
	const pathname = usePathname();
	const router = useRouter();
	const user = useTypedSelector((state) => state.user.user);
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(true);

	const userToken = (() => {
		if (typeof window === "undefined") return;

		return localStorage.getItem("tokenApp") ?? undefined;
	})();

	const login = useCallback(
		async (email: string, password: string): Promise<IUser> => {
			return await dispatch(
				getDataUser({
					email,
					password,
				})
			).unwrap();
		},
		[dispatch]
	);

	const validateOtp = useCallback(
		async (payload: ValidateOTPPayload) => {
			return await dispatch(validateOTP(payload)).unwrap();
		},
		[dispatch]
	);

	const logOut = useCallback(() => {
		localStorage.clear();
		dispatch(resetState());
		router.replace("/login");
	}, [dispatch, router]);

	const contextValue = useMemo(
		() => ({
			user,
			login,
			logOut,
			validateOtp,
		}),
		[user, login, logOut, validateOtp]
	);

	useEffect(() => {
		if (PUBLIC_ROUTES.some((route) => new RegExp(route).test(pathname))) {
			if (isValidToken(userToken)) {
				router.replace("/");
			}
		} else {
			if (isValidToken(userToken)) {
			} else {
				router.replace("/login");
			}
		}
		setTimeout(() => {
			setIsLoading(false);
		}, 100);
	}, [pathname, userToken, router]);

	if (isLoading)
		return (
			<div className="fixed top-0 left-0 w-full h-full bg-white">
				<LoaderComponent />
			</div>
		);

	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	);
}

interface AuthProviderProps {
	children?: React.ReactNode;
}
