import React, { ReactNode, FC } from "react";
import Image from "next/image";

import LogoImage from "/public/sentria_white.png";

import {
	LayoutContainer,
	LayoutContainerLeft,
	LayoutContainerRight,
	ContentHeaderLogo,
} from "./styled";

interface ILayoutComponentProps {
	children: ReactNode;
}

const LayoutComponent: FC<ILayoutComponentProps> = ({
	children,
}: ILayoutComponentProps) => (
	<LayoutContainer>
		<ContentHeaderLogo>
			<Image src={LogoImage} width={150} height={80} alt="Logo" priority />
		</ContentHeaderLogo>
		<LayoutContainerLeft>{children}</LayoutContainerLeft>
		<LayoutContainerRight>
			<Image src={LogoImage} width={272} height={159} alt="Logo" priority />
		</LayoutContainerRight>
	</LayoutContainer>
);

export default LayoutComponent;
