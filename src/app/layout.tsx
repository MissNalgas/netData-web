"use client";
import type { ReactNode } from "react";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

import theme from "theme";
import { store, persisted } from "infrastructure/store";
import { AuthProvider } from "@infrastructure/containers/auth";
import { SideModalProvider } from "@shared/components/sideModal";

const inter = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persisted}>
						<ThemeProvider theme={theme}>
							<AuthProvider>
								<SideModalProvider>
									{children}
								</SideModalProvider>
							</AuthProvider>
						</ThemeProvider>
					</PersistGate>
				</Provider>
			</body>
		</html>
	);
}
