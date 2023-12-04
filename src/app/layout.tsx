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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SideModalProvider } from "@shared/components/sideModal";
import { I18nextProvider } from "react-i18next";
import i18n from "@i18n/index";

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
                            <AuthProvider>
                                <SideModalProvider>
                                    <I18nextProvider i18n={i18n} defaultNS={"translation"}>
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
