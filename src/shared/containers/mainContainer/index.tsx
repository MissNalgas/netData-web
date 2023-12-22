"use client"
import { useAuth } from "@infrastructure/containers/auth";
import ModalQuestion from "@shared/components/modalQuestion";
import Sidebar from "@shared/components/sidebar";
import React, { useCallback, useEffect, useState } from "react";

export default function MainContainer({children} : MainContainerProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { logOut } = useAuth();

    const yesClose = useCallback(() => {
        logOut();
        localStorage.removeItem("tokenApp");
    }, [logOut]);

    useEffect(() => {
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
			<div className="w-80 h-full hidden lg:block">
                <ModalQuestion isOpen={isModalVisible} onClose={() => yesClose()} onPressYes={() => noCloseModal()}/>
				<Sidebar/>
			</div>
			<div className="flex-1 max-h-full overflow-auto">
				{children}
			</div>
		</div>
	);
}

interface MainContainerProps {
	children?: React.ReactNode;
}
