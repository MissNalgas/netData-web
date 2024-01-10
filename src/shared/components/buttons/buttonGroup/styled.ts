import styled from "styled-components";

type buttonProps = {
	$isSwitch?: boolean;
	$bgColor?: string;
};

export const Container = styled.div<buttonProps>`
	display: flex;
	background-color: ${({ $bgColor }) => $bgColor};
	border-radius: 10px;
	cursor: pointer;
`;

export const ButtonLeft = styled.div<buttonProps>`
	border-radius: 10px;
	padding: 12px;
	user-select: none;
	padding-inline: 30px;
	background-color: ${({ $isSwitch, $bgColor }) => !$isSwitch && $bgColor};
`;

export const ButtonRight = styled.div<buttonProps>`
	background-color: ${({ $isSwitch, $bgColor }) => $isSwitch && $bgColor};
	padding: 12px;
	border-radius: 10px;
	user-select: none;
	padding-inline: 30px;
`;
