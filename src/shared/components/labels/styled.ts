import styled from "styled-components";

type StyledTextProps = {
	$color?: string;
	$size?: string;
	$center?: boolean;
	$weight?: number;
};

export const TitleOne = styled.h1<StyledTextProps>`
	color: ${({ theme, $color: color }) =>
		color ? color : theme.colors.gray50};
	font-size: ${({ theme }) => theme.fontSize.h3};
	line-height: ${({ theme }) => theme.lineSpacing.h3};
	${({ $center: center }) => (center ? "text-align: center;" : "")}
	font-weight: ${({ theme, $weight: weight }) =>
		weight ? weight : theme.fontWeight.bold};
`;

export const TitleSecond = styled.h1<StyledTextProps>`
	color: ${({ theme, $color: color }) =>
		color ? color : theme.colors.gray50};
	font-size: ${({ theme }) => theme.fontSize.subtitleLink};
	line-height: ${({ theme }) => theme.lineSpacing.subtitleLink};
	${({ $center: center }) => (center ? "text-align: center;" : "")}
	font-weight: ${({ theme, $weight: weight }) =>
		weight ? weight : theme.fontWeight.regular};
`;

export const TitleTree = styled.span<StyledTextProps>`
	color: ${({ theme, $color: color }) =>
		color ? color : theme.colors.gray50};
	font-size: ${({ theme }) => theme.fontSize.overline};
	line-height: ${({ theme }) => theme.lineSpacing.overline};
	${({ $center: center }) => (center ? "text-align: center;" : "")}
	font-weight: ${({ theme, $weight: weight }) =>
		weight ? weight : theme.fontWeight.regular};
`;

export const Subtitle = styled.span<StyledTextProps>`
	color: ${({ theme, $color: color }) =>
		color ? color : theme.colors.gray50};
	font-size: ${({ theme }) => theme.fontSize.subtitle};
	line-height: ${({ theme }) => theme.lineSpacing.subtitle};
	${({ $center: center }) => (center ? "text-align: center;" : "")}
	font-weight: ${({ theme, $weight: weight }) =>
		weight ? weight : theme.fontWeight.regular};
`;

export const SubtitleLink = styled.span<StyledTextProps>`
	color: ${({ theme, $color: color }) =>
		color ? color : theme.colors.gray50};
	font-size: ${({ theme }) => theme.fontSize.subtitleLink};
	line-height: ${({ theme }) => theme.lineSpacing.subtitleLink};
	${({ $center: center }) => (center ? "text-align: center;" : "")}
	font-weight: ${({ theme, $weight: weight }) =>
		weight ? weight : theme.fontWeight.regular};
`;

export const Body = styled.span<StyledTextProps>`
	color: ${({ theme, $color: color }) =>
		color ? color : theme.colors.gray50};
	font-size: ${({ theme }) => theme.fontSize.body};
	line-height: ${({ theme }) => theme.lineSpacing.body};
	${({ $center: center }) => (center ? "text-align: center;" : "")}
	font-weight: ${({ theme, $weight: weight }) =>
		weight ? weight : theme.fontWeight.regular};
`;

export const CaptionOne = styled.span<StyledTextProps>`
	color: ${({ theme, $color: color }) =>
		color ? color : theme.colors.gray50};
	font-size: ${({ theme }) => theme.fontSize.caption1};
	line-height: ${({ theme }) => theme.lineSpacing.caption1};
	${({ $center: center }) => (center ? "text-align: center;" : "")}
	font-weight: ${({ theme, $weight: weight }) =>
		weight ? weight : theme.fontWeight.regular};
`;

export const Overline = styled.span<StyledTextProps>`
	color: ${({ theme, $color: color }) =>
		color ? color : theme.colors.gray50};
	font-size: ${({ theme }) => theme.fontSize.overline};
	line-height: ${({ theme }) => theme.lineSpacing.overline};
	${({ $center: center }) => (center ? "text-align: center;" : "")}
	font-weight: ${({ theme, $weight: weight }) =>
		weight ? weight : theme.fontWeight.regular};
`;

export const BodyTwo = styled.span<StyledTextProps>`
	color: ${({ theme, $color: color }) =>
		color ? color : theme.colors.gray50};
	font-size: ${({ theme }) => theme.fontSize.body2};
	line-height: ${({ theme }) => theme.lineSpacing.body2};
	${({ $center: center }) => (center ? "text-align: center;" : "")}
	font-weight: ${({ theme, $weight: weight }) =>
		weight ? weight : theme.fontWeight.regular};
`;

export const CaptionTwo = styled.span<StyledTextProps>`
	color: ${({ theme, $color: color }) =>
		color ? color : theme.colors.gray50};
	font-size: ${({ theme }) => theme.fontSize.caption2};
	line-height: ${({ theme }) => theme.lineSpacing.caption2};
	${({ $center: center }) => (center ? "text-align: center;" : "")}
	font-weight: ${({ theme, $weight: weight }) =>
		weight ? weight : theme.fontWeight.regular};
`;
