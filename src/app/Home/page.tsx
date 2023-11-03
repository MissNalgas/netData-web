"use client";
import { resetState } from "infrastructure/store/user/actions";
import { useTypedSelector, useAppDispatch } from "hooks";
import { RootState } from "infrastructure/store/reducers";

import { selectLoggedData } from "infrastructure/store/user/selectors";
import { useRouter } from "next/navigation";

export default function Home() {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const cleanData = () => dispatch(resetState());
	const dataUser = useTypedSelector((state: RootState) =>
		selectLoggedData(state)
	);

	const handleActionLogout = () => {
		cleanData();
		router.push("/Login");
	};

	return (
		<div className="flex flex-col items-center justify-center h-full min-h-screen">
			<h1>
				Home <span className="text-red-600 font-bold">{dataUser.name}</span>
			</h1>
			<button className="underline" onClick={handleActionLogout}>log out</button>
		</div>
	);
}
