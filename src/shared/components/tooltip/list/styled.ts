import { Body, Overline } from "@shared/components/labels/styled";
import styled from "styled-components";

const ContentInitialTooltipMain = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 18px;
	padding: 4% 1%;
`;

const ContentInitialTooltip = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 2%;
`;

const TitleOne = styled(Body)`
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const TitleSecond = styled(Overline)`
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
export {
	ContentInitialTooltip,
	ContentInitialTooltipMain,
	TitleOne,
	TitleSecond,
};
