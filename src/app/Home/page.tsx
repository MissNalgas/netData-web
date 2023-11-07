"use client";
import { resetState } from "infrastructure/store/user/actions";
import { useTypedSelector, useAppDispatch } from "hooks";
import { RootState } from "infrastructure/store/reducers";

import { selectLoggedData } from "infrastructure/store/user/selectors";
import { useRouter } from "next/navigation";
import Tabs from "@shared/components/tabs";
import { useState } from "react";

const TABS = ["Incidentes de hoy", "Incidentes de ayer"] as const;

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

	const [tab, setTab] = useState<typeof TABS[number]>(TABS[0]);

	return (
		<div className="flex flex-col items-center justify-center h-full min-h-screen">
			<h1>
				Home <span className="text-red-600 font-bold">{dataUser.name}</span>
			</h1>
			<div >
				<Tabs
					selectedTab={tab}
					onChange={setTab}
					tabs={TABS}
				/>
				{tab}
			</div>
			<button className="underline" onClick={handleActionLogout}>log out</button>
		</div>
	);
}
