import colors from "@theme/colors";
import styled from "styled-components";

type ButtonProps = {
	background?: string;
	color?: string;
	isBig?: boolean;
	borderWidth?: string;
	borderColor?: string;
	boxShadow?: string;
    width?: number;
};

export const Button = styled.button<ButtonProps>`
	background: ${({ background }) => (background ?? colors.orange50)};
	border-width: ${({ borderWidth }) => borderWidth || 0};
	border-color: ${({ borderColor }) => (borderColor ?? colors.white)};
	border-radius: 4px;
	box-shadow: ${({ boxShadow }) => boxShadow || "0px 4px 15px rgba(0, 0, 0, 0.25)"};
	padding: 8px 12px;
	color: ${({ color }) => (color ?? colors.white)};
	font-size: ${({ theme }) => theme.fontSize.overline};
	width: ${({ width }) => width || 100}%;
	align-items: center;
	justify-content: center;
    margin: 0px 5px;
    pointer-events: ${(props)=> props.disabled ? "none" : null};
	&:hover {
		background: ${colors.orange20};
        color: ${colors.shadow50}
	}
`;