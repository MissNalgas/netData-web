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
		if (
			typeof window !== "undefined" &&
			"Notification" in window &&
			Notification.permission !== "granted"
		) {
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
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/manifest.json"/>
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f58236"/>
				<meta name="msapplication-TileColor" content="#f58236"/>
				<meta name="theme-color" content="#f58236"/>

				<title>Sentria</title>
				<meta name="description" content="Netdata | Sentria"/>

				{/* @ts-ignore */}
				<meta itemprop="name" content="Sentria"/>
				{/* @ts-ignore */}
				<meta itemprop="description" content="Discover and fix cybersecurity risks"/>

				<meta property="og:url" content="https://netdatanetworks.com"/>
				<meta property="og:type" content="website"/>
				<meta property="og:title" content="Sentria"/>
				<meta property="og:description" content="Discover and fix cybersecurity risks"/>
				<meta property="og:image" content=""/>

				<meta name="twitter:card" content="summary_large_image"/>
				<meta name="twitter:title" content="Sentria"/>
				<meta name="twitter:description" content="Discover and fix cybersecurity risks"/>
				<meta name="twitter:image" content=""/>

			</head>
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
