import colors from "@theme/colors";
import { mq } from "@theme/media";
import styled from "styled-components";

export const SliderContainer = styled.div`
	position: relative;
	width: 100%;
	overflow: hidden;
`;

export const SliderTrack = styled.div`
	display: flex;
	transition: transform 0.3s ease-in-out;
`;

export const Slide = styled.div`
	flex: 0 0 100%;
`;

export const DotContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 10px;
`;

export const Dot = styled.div<{ active: boolean }>`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: ${({ active }) =>
		active ? colors.orange50 : colors.orange30};
	margin: 0 5px;
	cursor: pointer;
	${() =>
		mq({
			width: ["10px", "10px", "10px", "10px", "10px"],
			height: ["10px", "10px", "10px", "10px", "10px"],
		})}
`;

export const CardsContainer = styled.div`
	display: flex;
	gap: 16px;
	justify-content: center;
	height: 100%;
`;

export const Card = styled.div`
	flex: 0 0 calc(20% - 5px);
`;
