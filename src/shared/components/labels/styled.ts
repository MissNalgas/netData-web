import styled from "styled-components";

type StyledTextProps = {
	color?: string;
	size?: string;
	center?: boolean;
};

export const TitleOne = styled.h1<StyledTextProps>`
	color: ${({ theme, color }) => (color ? color : theme.colors.white)};
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.overline};
	line-height: ${({ theme }) => theme.lineSpacing.overline};
	${({ center }) => (center ? "text-align: center;" : "")}
	font-weight: bold;
`;

export const TitleSecond = styled.h1<StyledTextProps>`
	color: ${({ theme, color }) => (color ? color : theme.colors.white)};
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.subtitle};
	line-height: ${({ theme }) => theme.lineSpacing.h1};
	${({ center }) => (center ? "text-align: center;" : "")}
	font-weight: 400;
`;
