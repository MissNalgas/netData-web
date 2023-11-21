import Sidebar from "@shared/components/sidebar";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainContainer({children} : MainContainerProps) {
	return (
		<div className="w-full h-screen flex">
			<div className="w-80 h-full hidden lg:block">
				<Sidebar/>
			</div>
			<div className="flex-1 max-h-full overflow-auto">
				{children}
                <ToastContainer/>
			</div>
		</div>
	);
}

interface MainContainerProps {
	children?: React.ReactNode;
}
