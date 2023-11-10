import { DefaultTheme } from "styled-components";
import colors from "./colors";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			// TRADEMARK COLORS
			yellow: string;
			orange: string;

			// PRIMARY COLOR
			red: string;
			white: string;

			// SHADOW COLORS
			shadow50: string;
			shadow40: string;
			shadow30: string;
			shadow20: string;
			shadow10: string;

			blue50: string;
			blue40: string;
			blue30: string;
			blue20: string;
			blue10: string;

			orange50: string;
			orange40: string;
			orange30: string;
			orange20: string;
			orange10: string;

			purple50: string;
			purple40: string;
			purple30: string;
			purple20: string;
			purple10: string;
			// TEXT COLORS
			gray50: string;
			gray40: string;
			gray30: string;
			gray20: string;
			gray10: string;
			// SUCCESS COLORS:
			green60: string;
			green50: string;
			green40: string;
			green30: string;
			green20: string;
			green10: string;
			// ERROR COLORS
			red40: string;
			red30: string;
			red20: string;
			red10: string;
		};
		fontSize: {
			h1: string;
			h2: string;
			h3: string;
			subtitle: string;
			subtitleLink: string;
			body: string;
			caption1: string;
			overline: string;
			body2: string;
			caption2: string;
		};
		lineSpacing: {
			h1: string;
			h2: string;
			h3: string;
			subtitle: string;
			subtitleLink: string;
			body: string;
			caption1: string;
			overline: string;
			body2: string;
			caption2: string;
		};
		fontWeight: {
			light: number;
			regular: number;
			semiBold: number;
			bold: number;
			extraBold: number;
		};
	}
}

const fontSize = {
	h1: "64px",
	h2: "48px",
	h3: "36px",
	subtitle: "30px",
	subtitleLink: "24px",
	body: "20px",
	caption1: "18px",
	overline: "16px",
	body2: "14px",
	caption2: "12px"
};

const lineSpacing = {
	h1: "80px",
	h2: "60px",
	h3: "45px",
	subtitle: "37.5px",
	subtitleLink: "30px",
	body: "25px",
	caption1: "27px",
	overline: "24px",
	body2: "21px",
	caption2: "18px"
};

const fontWeight = {
	light: 300,
	regular: 400,
	semiBold: 600,
	bold: 700,
	extraBold: 800
};

const theme: DefaultTheme = {
	colors,
	fontSize,
	lineSpacing,
	fontWeight
};

export * from "./media";
export default theme;
