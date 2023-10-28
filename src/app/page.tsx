"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTypedSelector } from "hooks";
import { RootState } from "infrastructure/store/reducers";

import { selectLoggedData } from "infrastructure/store/user/selectors";

export default function App() {
	const router = useRouter();
	const dataUser = useTypedSelector((state: RootState) =>
		selectLoggedData(state)
	);

	const { isLogged } = dataUser;
	useEffect(() => {
		if (isLogged) {
			const redirectTimeout = setTimeout(() => {
				router.push("/Home");
			}, 1000);

			return () => clearTimeout(redirectTimeout);
		} else {
			router.push("/Login");
		}
	}, []);

	return <h1>Cargando ...</h1>;
}
