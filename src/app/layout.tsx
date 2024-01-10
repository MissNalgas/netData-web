"use client";
import { useEffect, type ReactNode } from "react";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

import theme from "theme";
import { store, persisted } from "infrastructure/store";
import { AuthProvider } from "@infrastructure/containers/auth";
import "react-toastify/dist/ReactToastify.css";
import { SideModalProvider } from "@shared/components/sideModal";
import { I18nextProvider } from "react-i18next";
import i18n from "@i18n/index";
import { ToastContainer } from "react-toastify";

const inter = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
	useEffect(() => {
		if (Notification.permission !== "granted") {
			Notification.requestPermission().then((permission) => {
				if (permission === "granted") {
					localStorage.setItem("notifications", "true");
				} else if (permission === "denied") {
					localStorage.setItem("notifications", "false");
				}
			});
		}
	});

	return (
		<html lang="en">
			<body className={inter.className}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persisted}>
						<ToastContainer
							position="top-center"
							autoClose={5000}
							hideProgressBar={true}
							newestOnTop={true}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme="light"
						/>
						<ThemeProvider theme={theme}>
							<AuthProvider>
								<SideModalProvider>
									<I18nextProvider
										i18n={i18n}
										defaultNS={"translation"}
									>
										{children}
									</I18nextProvider>
								</SideModalProvider>
							</AuthProvider>
						</ThemeProvider>
					</PersistGate>
				</Provider>
			</body>
		</html>
	);
}
