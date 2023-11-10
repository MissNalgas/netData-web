import { useAuth } from "@infrastructure/containers/auth";
import Image from "next/image";

export default function Topbar() {
	const auth = useAuth();

	return (
		<div className="w-full h-20 flex justify-between items-center px-2">
			<div className="flex gap-2 items-center">
				<div className="w-12 h-12 rounded-full bg-gray-100"/>
				<span>
					Hola, <span className="text-primary font-semibold">{auth.user?.name}</span>
				</span>
			</div>
			<span>
				Última actualización: <b>10:00 am</b>
			</span>
			<div className="w-12 h-12 bg-[#d4c0dd] rounded-full grid place-content-center">
				<Image src="/alarm_icon.png" alt="Alarm" width={32} height={0}/>
			</div>
		</div>
	);
}
