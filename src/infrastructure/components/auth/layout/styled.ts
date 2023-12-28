import styled from "styled-components";
import { mq } from "theme";

const LayoutContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	justify-content: center;
	${() =>
		mq({
			flexDirection: ["column", "column", "row", "row", "row"],
		})}
`;

const LayoutContainerLeft = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.white};
`;

const ContentHeaderLogo = styled.div`
	${({ theme }) =>
		mq({
			width: "100%",
			height: "80px",
			display: ["flex", "flex", "none", "none", "none"],
			justifyContent: ["center", "center"],
			alignItems: ["center", "center"],
			alignSelf: ["center", "center"],
			background: [`center center no-repeat ${theme.colors.orange50}`],
		})}
`;

const LayoutContainerRight = styled.div`
	justify-content: center;
	align-items: center;
	background: linear-gradient(
		to bottom,
		#f99e17 400%,
		#fcb638 34.48%,
		#f99e17 100%
	);
	${() =>
		mq({
			display: ["none", "none", "flex", "flex", "flex"],
			width: ["100%", "100%", "100%", "40%", "50%"],
		})}
`;

export {
	LayoutContainer,
	LayoutContainerLeft,
	LayoutContainerRight,
	ContentHeaderLogo,
};
