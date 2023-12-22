import theme from "@theme/index";
import { BodyTwo } from "../labels/styled";
import { useTranslation } from "react-i18next";

export default function ColorGuide({className = ""} : ColorGuideProps) {
	const { t } = useTranslation("events_today");

	return (
		<div className={"flex w-4/6 justify-evenly mt-5 mb-3" + className}>
			<div className="flex border py-1 px-7 rounded-md items-center">
				<div className="w-3 h-3 bg-red10 mr-2"/>
				<BodyTwo $weight={600} $color={theme.colors.red30}>{t("status_pending")}</BodyTwo>
			</div>
			<div className="flex border px-7 rounded-md items-center">
				<div className="w-3 h-3 bg-orange10 mr-2"/>
				<BodyTwo $weight={600} $color={theme.colors.orange50}>{t("status_in_review")}</BodyTwo>
			</div>
			<div className="flex border px-7 rounded-md items-center">
				<div className="w-3 h-3 bg-green10 mr-2"/>
				<BodyTwo $weight={600} $color={theme.colors.green50}>{t("status_close")}</BodyTwo>
			</div>
		</div>

	);
}
interface ColorGuideProps {
	className?: string;
}
