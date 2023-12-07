import React from "react";
import { Container } from "./styled";

export default function TwoColumnLayout({children} : TwoColumnLayoutProps) {
	return (
		<Container>
			{children}
		</Container>
	);
}

interface TwoColumnLayoutProps {
	children?: React.ReactNode;
}
