import { TitleOne, TitleSecond } from "@shared/components/labels/styled";
import styled from "styled-components";
import { mq } from "theme";

const ContentForm = styled.div`
	${() =>
		mq({
			width: ["76%", "76%", "auto", "auto", "auto"]
		})}
`;

const TitleCustom = styled(TitleOne)`
	margin: 5% 0;
	width: 14em;
`;

const SecondTitleCustom = styled(TitleSecond)`
	margin: 2% 0;
	${() =>
		mq({
			width: ["13em", "13em", "21em", "21em", "21em"]
		})}
`;

export { ContentForm, TitleCustom, SecondTitleCustom };
