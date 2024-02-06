import colors from "@theme/colors";
import styled from "styled-components";
import { mq } from "@theme/media";

type ButtonProps = {
	background?: string;
	color?: string;
	isBig?: boolean;
	borderWidth?: string;
	borderColor?: string;
	boxShadow?: string;
	width?: number | string;
	height?: number;
};

export const PrimaryButton = styled.button<ButtonProps>`
	background: ${({ background }) => background ?? colors.orange50};
	border-width: ${({ borderWidth }) => borderWidth || 0};
	border-color: ${({ borderColor }) => borderColor ?? colors.white};
	border-radius: 8px;
	padding: 8px 12px;
	color: ${({ color }) => color ?? colors.white};
	font-size: ${({ theme }) => theme.fontSize.overline};
	width: ${({ width }) => width || 100}%;
	height: ${({ height }) => height || 100}%;
	align-items: center;
	justify-content: center;
	margin: 5px 4px 5px;
	pointer-events: ${(props) => (props.disabled ? "none" : null)};
	&:hover {
		background: ${colors.orange};
	}
	&:focus {
		box-shadow: ${({ boxShadow }) =>
			boxShadow || `0px 4px 15px ${colors.orange50}`};
	}
	&:disabled {
		background-color: ${colors.orange30};
		color: ${colors.shadow10};
	}
	${({ width }) =>
		mq({
			width: [
				"100%",
				"100%",
				width ? `${width}%` : "100%",
				width ? `${width}%` : "100%",
				width ? `${width}%` : "100%",
			],
		})}
`;

export const SecondaryButton = styled.button<ButtonProps>`
	border-color: ${({ borderColor }) => borderColor ?? colors.orange50};
	border-width: ${({ borderWidth }) => borderWidth || "thin"};
	color: ${({ color }) => color ?? colors.orange};
	padding: 8px 12px;
	border-radius: 8px;
	align-items: center;
	justify-content: center;
	width: ${({ width }) => width || 100}%;
	height: ${({ height }) => height || 100}%;
	margin: 5px 3px 5px;
	pointer-events: ${(props) => (props.disabled ? "none" : null)};
	&:hover {
		border-color: ${colors.orange};
	}
	&:focus {
		box-shadow: ${({ boxShadow }) =>
			boxShadow || `0px 4px 15px ${colors.orange50}`};
	}
	&:disabled {
		border-color: ${colors.orange30};
		color: ${colors.orange30};
	}
	${({ width }) =>
		mq({
			width: [
				"100%",
				"100%",
				width ? `${width}%` : "100%",
				width ? `${width}%` : "100%",
				width ? `${width}%` : "100%",
			],
		})}
`;
