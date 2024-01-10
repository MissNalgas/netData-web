import { mq } from "@theme/media";
import styled from "styled-components";

export const Input = styled.input`
	margin: 9% 3%;
	border: 1px solid #999999;
	background-color: #fbfbfb;
	text-align: center;
	border-radius: 4px;
	${() =>
		mq({
			width: ["37.88px", "37.88px", "32.88px", "42.88px", "52.88px"],
			height: ["50px", "50px", "50px", "55px", "68px"],
		})}
`;
