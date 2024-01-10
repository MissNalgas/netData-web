import { useAuth } from "@infrastructure/containers/auth";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Logo from "/public/img/logo-sentria.png";

import Fire from "/public/img/fire_1.png";
import Alarm from "/public/img/alarm_icon.png";
import Tree from "/public/img/tree 1.png";
import Clock from "/public/img/clock 1.png";
import Icon from "../icons";
import { useTranslation } from "react-i18next";
import SwitchButton from "../buttons/buttonGroup";
import theme from "@theme/index";
import { format } from "date-fns";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "@infrastructure/store";

interface TopBarProps {
	screen?: "dashboard" | "other";
	onPressGroupButton?: (_active: boolean) => void;
}

export default function Topbar(props: TopBarProps) {
	const { screen, onPressGroupButton } = props;
	const auth = useAuth();
	const router = useRouter();
	const { t } = useTranslation("profile");
	const date = new Date();
	const { dashboard } = useSelector((state: RootState) => state.dashboard);
	const riskState = dashboard.today?.riskState;
	return (
		<div className="w-full h-20 flex justify-between items-center px-2 bg-white">
			<div
				className="flex gap-2 items-center"
				onClick={() => router.push("/profile")}
			>
				<div className="w-12 h-12 rounded-full bg-gray50 items-center flex justify-center">
					<Image src={Logo} alt="logo" width={20} height={20} />
				</div>
				<div className="flex flex-col">
					<span>
						{t("greeting")}
						{", "}
						<span className="text-primary font-semibold">
							{auth.user?.firstname}
						</span>
					</span>
					<span className="flex flex-row items-center gap-1">
						{t("last_update")}, <b>{format(date, "p")}</b>
						<Icon icon="Reload" size={22} />
					</span>
				</div>
			</div>
			{screen && (
				<SwitchButton
					textButtonLeft={
						screen === "dashboard"
							? "Eventos de hoy"
							: "Eventos abiertos"
					}
					textButtonRight={
						screen === "dashboard"
							? "Eventos de ayer"
							: "Eventos cerrados"
					}
					bgColor={
						screen === "dashboard"
							? theme.colors.orange30
							: theme.colors.blue30
					}
					activeColor={
						screen === "dashboard"
							? theme.colors.orange
							: theme.colors.blue50
					}
					handleSwitch={
						onPressGroupButton ? onPressGroupButton : () => {}
					}
				/>
			)}
			<div className="w-12 h-12 bg-orange20 rounded-full grid place-content-center">
				<Image
					src={
						(riskState === "Low" && Tree) ||
						(riskState === "Urgent" && Fire) ||
						(riskState === "High" && Alarm) ||
						(riskState === "Medium" && Clock) ||
						Clock
					}
					alt="Alarm"
					width={32}
					height={0}
				/>
			</div>
		</div>
	);
}
