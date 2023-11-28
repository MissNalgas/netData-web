import { useAuth } from "@infrastructure/containers/auth";
import { useRouter } from "next/navigation";

import Image from "next/image";
import alarm from "/public/img/alarm_icon.png";
import Icon from "../icons";

export default function Topbar() {
	const auth = useAuth();
	const router = useRouter();

	return (
		<div className="w-full h-20 flex justify-between items-center px-2 bg-white">
			<div
				className="flex gap-2 items-center"
				onClick={() => router.push("/profile")}
			>
				<div className="w-12 h-12 rounded-full bg-gray-100 items-center flex justify-center">
					<Icon icon="account" size={22} />
				</div>
				<div className="flex flex-col">
					<span>
						Hola,
						<span className="text-primary font-semibold">
							{auth.user?.firstname}
						</span>
					</span>
					<span className="flex flex-row items-center gap-1">
						Última actualización: <b>10:00 am</b>
						<Icon icon="Reload" size={22} />
					</span>
				</div>
			</div>

			<div className="w-12 h-12 bg-[#d4c0dd] rounded-full grid place-content-center">
				<Image src={alarm} alt="Alarm" width={32} height={0} />
			</div>
		</div>
	);
}
