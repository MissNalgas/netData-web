import { useTypedSelector } from "@hooks/use-typed-selector";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { IUserContext } from "./models";
import { useAppDispatch } from "@hooks/use-dispatch";
import { getDataUser, resetState } from "@infrastructure/store/user/actions";
import { usePathname, useRouter } from "next/navigation";
import { PUBLIC_ROUTES } from "./consts";
import { isValidToken } from "@shared/utils";
import "shared/utils/firebase";
import LoaderComponent from "@shared/components/loader";

const AuthContext = createContext<IUserContext>({
	user: undefined,
	async login(_email: string, _password: string) {},
	logOut() {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({children}: AuthProviderProps) {

	const pathname = usePathname();
	const router = useRouter();
	const user = useTypedSelector(state => state.user.user);
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(true);

	const login = useCallback(async (email: string, password: string) => {
		await dispatch(getDataUser({
			email,
			password,
		})).unwrap();
	}, [dispatch]);

	const logOut = useCallback(() => {
		dispatch(resetState());
	}, [dispatch]);

	const contextValue = useMemo(() => ({
		user,
		login,
		logOut,
	}), [user, login, logOut]);

	useEffect(() => {
		if (PUBLIC_ROUTES.some(route => new RegExp(route).test(pathname))) {
			if (isValidToken(user.token)) {
				router.replace("/");
			}
		} else {
			if (isValidToken(user.token)) {
			} else {
				router.replace("/login");
			}
		}
		setTimeout(() => {
			setIsLoading(false);
		}, 100);
	}, [pathname, user, router]);

	if (isLoading) return <div className="fixed top-0 left-0 w-full h-full bg-white"><LoaderComponent/></div>

	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	);
}

interface AuthProviderProps {
	children?: React.ReactNode;
}
