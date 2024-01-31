import ContainerBackground from "@shared/components/containerBackground";
import { ContainerFlex } from "../styled";
import { Overline, SubtitleLink } from "@shared/components/labels/styled";
import Arrow from "@shared/components/arrow";
import CircleStatus from "@shared/components/circleStatus";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/navigation";
import { useTheme } from "styled-components";
import { useConstCard } from "@shared/utils/hooks";

export default function CardChart() {
	const { t } = useTranslation("dashboard");
	const theme = useTheme();

	const status = useConstCard();
	const router: any = useRouter();

	return (
		<ContainerBackground className="grow">
			<ContainerFlex className="items-center">
				<SubtitleLink
					$weight={theme.fontWeight.bold}
					className="my-5 block"
				>
					{t("daily_watering_level")}
				</SubtitleLink>
				<Arrow
					action={() => router.push("/events?showEventsDay=true")}
					nameIcon="right-arrow"
				/>
			</ContainerFlex>
			<div
				className="flex-column tablet:flex justify-between items-center"
				id="step-4"
			>
				<iframe
					src={"/chart/prioritydonut"}
					title="example"
					className="w-full h-[300px]"
				/>
				<div className="grid gap-1 grid-cols-2 tablet:flex tablet:flex-col">
					{status.map((item) => (
						<div
							key={item.state}
							className={`flex border items-center my-5 mr-5 p-1 rounded-lg ${item.border}`}
						>
							<CircleStatus
								internalColor={item.internalColor}
								externalColor={item.externalColor}
							/>
							<Overline
								$weight={theme.fontWeight.semiBold}
								$color={item.color}
							>
								{item.state}
							</Overline>
						</div>
					))}
				</div>
			</div>
		</ContainerBackground>
	);
}
