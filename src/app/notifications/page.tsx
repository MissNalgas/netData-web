"use client";

import { NextPage } from "next";
import NotificationsComponent from "@infrastructure/components/notifications";
import MainContainer from "@shared/containers/mainContainer";
import Topbar from "@shared/components/topbar";

const Notifications: NextPage = () => {

	return (
        <MainContainer>
            <Topbar/>
            <div className="bg-shadow20 h-screen pb-2">
                <NotificationsComponent />
            </div>
        </MainContainer>
	);
};

export default Notifications;