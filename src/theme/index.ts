import { DefaultTheme } from "styled-components";
import colors from "./colors";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			yellow: string;
			yellowDark: string;
			gray: string;
			grayDark: string;
			grayBright: string;
			success: string;
			info: string;
			alert: string;
			error: string;
			white: string;
			greenActive: string;
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
