import { mq } from "@theme/media";
import Image from "next/image";
import styled from "styled-components";

const ContentHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex: 1/1;
`;

const ContentBody = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-inline: auto;
	width: 90%;
	gap: 2%;
	${() =>
		mq({
			flexDirection: ["column", "column", "row", "row", "row"],
			width: ["100%", "100%", "90%", "90%", "90%"],
		})}
`;

const ContentLogo = styled.div`
	justify-content: center;
	display: flex;
	align-items: center;
	width: 100%;
	padding-left: 40px;
`;

const ContentImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 78px;
	height: 78px;
	border-radius: 9999px;
	background-color: ${({ theme }) => theme.colors.gray50};
`;

const ImageProfile = styled(Image)``;

const ContentCardModalItem = styled.div`
	width: 360px;
	background-color: ${({ theme }) => theme.colors.shadow20};
	margin: 5% 0;
	padding: 5%;
	border-radius: 12px;
`;

export {
	ContentHeader,
	ContentBody,
	ContentLogo,
	ImageProfile,
	ContentImage,
	ContentCardModalItem,
};
