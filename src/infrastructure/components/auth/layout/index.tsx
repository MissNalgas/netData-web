import React, { ReactNode, FC } from "react";
import Image from "next/image";

import LogoImage from "/public/sentria_white.png";

import {
	LayoutContainer,
	LayoutContainerLeft,
	LayoutContainerRight,
} from "./styled";

interface ILayoutComponentProps {
	children: ReactNode;
}

const LayoutComponent: FC<ILayoutComponentProps> = ({
	children,
}: ILayoutComponentProps) => (
	<main className="flex flex-col justify-center items-center min-h-screen h-full">
		<LayoutContainer>
			<LayoutContainerLeft>{children}</LayoutContainerLeft>
			<LayoutContainerRight>
				<Image src={LogoImage} width={272} height={159} alt="Logo" priority />
			</LayoutContainerRight>
		</LayoutContainer>
	</main>
);

export default LayoutComponent;
