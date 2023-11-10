"use client";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

import theme from "theme";
import { store, persisted } from "infrastructure/store";
import { AuthProvider } from "@infrastructure/containers/auth";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persisted}>
						<ThemeProvider theme={theme}>
							<AuthProvider>
								{children}
							</AuthProvider>
						</ThemeProvider>
					</PersistGate>
				</Provider>
			</body>
		</html>
	);
}
