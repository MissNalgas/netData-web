import { Body, TitleOne } from "@shared/components/labels/styled";
import styled from "styled-components";
import { mq } from "theme";

const ContentForm = styled.div`
	${() =>
		mq({
			width: ["76%", "76%", "70%", "70%", "70%"],
		})}
`;

const TitleCustom = styled(TitleOne)`
	margin: 5% 0;
`;

const SecondTitleCustom = styled(Body)`
	text-align: center;
	display: block;
`;

export { ContentForm, TitleCustom, SecondTitleCustom };
