import { useTypedSelector } from "@hooks/use-typed-selector";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { IUserContext } from "./models";
import { useAppDispatch } from "@hooks/use-dispatch";
import { getDataUser, resetState } from "@infrastructure/store/user/actions";
import { usePathname, useRouter } from "next/navigation";
import { PUBLIC_ROUTES } from "./consts";

const AuthContext = createContext<IUserContext>({
	user: undefined,
	login() {},
	logOut() {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({children}: AuthProviderProps) {

	const pathname = usePathname();
	const router = useRouter();
	const user = useTypedSelector(state => state.user.user);
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(true);

	const login = useCallback(() => {
		dispatch(getDataUser(0));
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
            if (user.isLogged) {
				router.replace("/");
			}
		} else {
			if (user.isLogged) {
			} else {
				router.replace("/login");
			}
		}
		setTimeout(() => {
			setIsLoading(false);
		}, 100);
	}, [pathname, user, router]);

	if (isLoading) return <div className="h-screen w-full grid place-content-center">loading...</div>

	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	);
}

interface AuthProviderProps {
	children?: React.ReactNode;
}
