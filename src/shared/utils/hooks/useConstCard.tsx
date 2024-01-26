import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

export function useConstCard() {
	const { t } = useTranslation("dashboard");
	const theme = useTheme();

	const status = [
		{
			state: `${t("low")}`,
			internalColor: "bg-green40",
			externalColor: "bg-green20",
			border: "border-green40",
			color: theme.colors.green40,
		},
		{
			state: `${t("medium")}`,
			internalColor: "bg-purple50",
			externalColor: "bg-purple20",
			border: "border-purple50",
			color: theme.colors.purple50,
		},
		{
			state: `${t("high")}`,
			internalColor: "bg-orange50",
			externalColor: "bg-orange20",
			border: "border-orange50",
			color: theme.colors.orange50,
		},
		{
			state: `${t("urgent")}`,
			internalColor: "bg-red40",
			externalColor: "bg-red20",
			border: "border-red40",
			color: theme.colors.red40,
		},
	];

	return status;
}
