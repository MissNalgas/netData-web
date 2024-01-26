"use client"
import { useAuth } from "@infrastructure/containers/auth";
import { RefetchProvider } from "@infrastructure/containers/refetch";
import { RootState } from "@infrastructure/store";
import ModalQuestion from "@shared/components/modalQuestion";
import Sidebar from "@shared/components/sidebar";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";


export default function MainContainer({children} : MainContainerProps) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const { logOut } = useAuth();
	const { isOpenDrawer } = useSelector((state: RootState) => state.layout);

	const yesClose = useCallback(() => {
		logOut();
		localStorage.removeItem("tokenApp");
	}, [logOut]);

	useEffect(() => {

		if (typeof window === "undefined") return;

		let inactivityTimer: any;
		let closeSesion: any;

		const resetTimer = () => {
			clearTimeout(inactivityTimer);
			clearTimeout(closeSesion);

			inactivityTimer = setTimeout(() => {
				setIsModalVisible(true);

				closeSesion = setTimeout(() => {
					yesClose()
				}, 600000)

			}, 900000);
		};

		const addEventListeners = () => {
			window.addEventListener("mousemove", resetTimer);
			window.addEventListener("keydown", resetTimer);
		};

		const removeEventListeners = () => {
			window.removeEventListener("mousemove", resetTimer);
			window.removeEventListener("keydown", resetTimer);
		};

		resetTimer();
		addEventListeners();

		return () => {
			clearTimeout(inactivityTimer);
			removeEventListeners();
		};
	}, [yesClose]);

	const noCloseModal = () => {
		setIsModalVisible(false);
	};


	return (
		<div className="w-full h-screen flex">
			<ModalQuestion isOpen={isModalVisible} onClose={() => yesClose()} onPressYes={() => noCloseModal()}/>
			<div className={`${isOpenDrawer ? "cel:w-full" : "cel:hidden"} tablet:w-12 desktop:w-64 h-full laptop:block`}>
				<Sidebar/>
			</div>
			<div className="flex-1 max-h-full overflow-auto">
				<RefetchProvider>
					{children}
				</RefetchProvider>
			</div>
		</div>
	);
}

interface MainContainerProps {
	children?: React.ReactNode;
}
