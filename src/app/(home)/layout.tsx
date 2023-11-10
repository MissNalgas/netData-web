import MainContainer from "@shared/containers/mainContainer";
import React from "react";

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
	return (
		<MainContainer>
			{children}
		</MainContainer>
	);
};

export default Layout;
