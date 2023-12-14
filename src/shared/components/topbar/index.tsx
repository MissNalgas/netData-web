import { useAuth } from "@infrastructure/containers/auth";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Logo from "/public/img/logo-sentria.png";

import alarm from "/public/img/alarm_icon.png";
import Icon from "../icons";
import { useTranslation } from "react-i18next";

export default function Topbar() {
	const auth = useAuth();
	const router = useRouter();
	const { t } = useTranslation("profile");
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
						{t("last_update")}, <b>10:00 am</b>
						<Icon icon="Reload" size={22} />
					</span>
				</div>
			</div>

			<div className="w-12 h-12 bg-orange20 rounded-full grid place-content-center">
				<Image src={alarm} alt="Alarm" width={32} height={0} />
			</div>
		</div>
	);
}
