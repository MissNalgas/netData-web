import { TitleOne, TitleSecond } from "@shared/components/labels/styled";
import styled from "styled-components";
import { mq } from "theme";

const ContentForm = styled.div`
	${() =>
		mq({
			width: ["76%", "76%", "76%", "76%", "76%"],
		})}
`;

const TitleCustom = styled(TitleOne)`
	margin: 5% 0;
`;

const SecondTitleCustom = styled(TitleSecond)`
	margin: 2% 0;
	font-size: ${({ theme }) => theme.fontSize.overline};
`;

export { ContentForm, TitleCustom, SecondTitleCustom };
