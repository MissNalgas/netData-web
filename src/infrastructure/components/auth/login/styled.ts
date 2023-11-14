import { TitleOne, TitleSecond } from "@shared/components/labels/styled";
import styled from "styled-components";
import { mq } from "theme";

const LoginContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	justify-content: center;
	${() =>
		mq({
			flexDirection: ["column", "column", "row", "row", "row"]
		})}
`;

const LoginContainerLeft = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.white};
`;

const ContentForm = styled.div`
	${() =>
		mq({
			width: ["76%", "76%", "auto", "auto", "auto"]
		})}
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
			background: [`center center no-repeat ${theme.colors.orange50}`]
		})}
`;

const ContentText = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 2% 0;
`;

const LoginContainerRight = styled.div`
	width: 712px;
	justify-content: center;
	align-items: center;
	background: ${({ theme }) => theme.colors.orange} center center no-repeat;
	${() =>
		mq({
			display: ["none", "none", "flex", "flex", "flex"]
		})}
`;

const TitleCustom = styled(TitleOne)`
	margin: 5% 0;
`;

const SecondTitleCustom = styled(TitleSecond)`
	margin: 2% 0;
	${() =>
		mq({
			width: ["13em", "13em", "17em", "17em", "17em"]
		})}
`;

export {
	LoginContainer,
	LoginContainerLeft,
	LoginContainerRight,
	ContentForm,
	ContentText,
	TitleCustom,
	SecondTitleCustom,
	ContentHeaderLogo
};
