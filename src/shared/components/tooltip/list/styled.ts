import { Body, Overline } from "@shared/components/labels/styled";
import styled from "styled-components";
import Tooltip from "..";
import { mq } from "@theme/media";

const TooltipFirst = styled(Tooltip)`
	top: 9ch;
	right: 4ch;
	${() =>
		mq({
			width: ["250px", "395px", "395px", "395px", "395px"],
		})}
`;

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
	justify-content: space-between;
	flex-direction: row;
	gap: 2%;
	${() =>
		mq({
			display: ["block", "block", "flex", "flex", "flex"],
		})}
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
	TooltipFirst,
};
