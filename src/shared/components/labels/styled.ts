import styled from "styled-components";

type StyledTextProps = {
	$color?: string;
	$size?: string;
	$center?: boolean;
};

export const TitleOne = styled.h1<StyledTextProps>`
	color: ${({ theme, $color: color }) => (color ? color : theme.colors.gray50)};
	font-size: ${({ theme }) => theme.fontSize.h3};
	line-height: ${({ theme }) => theme.lineSpacing.h3};
	${({ $center: center }) => (center ? "text-align: center;" : "")}
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const TitleSecond = styled.h1<StyledTextProps>`
	color: ${({ theme, $color: color }) => (color ? color : theme.colors.gray50)};
	font-size: ${({ theme }) => theme.fontSize.subtitleLink};
	line-height: ${({ theme }) => theme.lineSpacing.subtitleLink};
	${({ $center: center }) => (center ? "text-align: center;" : "")}
	font-weight:  ${({ theme }) => theme.fontWeight.regular};
`;

export const TitleTree = styled.span<StyledTextProps>`
	color: ${({ theme, $color: color }) => (color ? color : theme.colors.gray50)};
	font-size: ${({ theme }) => theme.fontSize.overline};
	line-height: ${({ theme }) => theme.lineSpacing.overline};
	${({ $center: center }) => (center ? "text-align: center;" : "")}
	font-weight:  ${({ theme }) => theme.fontWeight.regular};
`;
