"use client";
import { ReactNode } from "react";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

import theme from "theme";
import { store, persisted } from "infrastructure/store";
import { AuthProvider } from "@infrastructure/containers/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persisted}>
						<ThemeProvider theme={theme}>
                            <ToastContainer
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
							<AuthProvider>{children}</AuthProvider>
						</ThemeProvider>
					</PersistGate>
				</Provider>
			</body>
		</html>
	);
}
