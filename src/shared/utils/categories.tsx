import on from "/public/img/on_1.png";
import bomb from "/public/img/bomb_1.png";
import targetShooting from "/public/img/target_shooting_1.png";
import binoculars from "/public/img/binoculars_1.png";
import evacion from "/public/img/evacion.png";
import cartShopping from "/public/img/shopping_cart.png";
import access from "/public/img/access.png";
import bugComputer from "/public/img/bug_computer.png";
import magnet from "/public/img/magnet.png";
import signalAtenna from "/public/img/signal_antenna.png";
import key from "/public/img/key.png";
import arrows from "/public/img/arrows.png";
import stop from "/public/img/stop.png";
import spider from "/public/img/spider.png";
import { StaticImageData } from "next/image";

type categoriesProps = {
	machineName: string;
	icon: StaticImageData;
};

export const categoriesIcon = (): Array<categoriesProps> => {
	return [
		{
			machineName: "Execute",
			icon: on,
		},
		{
			machineName: "Initial_Access",
			icon: targetShooting,
		},
		{
			machineName: "Exploit",
			icon: bomb,
		},
		{
			machineName: "Restriction",
			icon: stop,
		},
		{
			machineName: "Discovery",
			icon: binoculars,
		},
		{
			machineName: "Credential_Access",
			icon: access,
		},
		{
			machineName: "Defense_Evasion",
			icon: evacion,
		},
		{
			machineName: "Collection",
			icon: cartShopping,
		},
		{
			machineName: "Persistence",
			icon: bugComputer,
		},
		{
			machineName: "Exfiltration",
			icon: magnet,
		},
		{
			machineName: "Command_And_Control",
			icon: signalAtenna,
		},
		{
			machineName: "Lateral_Movement",
			icon: arrows,
		},
		{
			machineName: "Privilege_Escalation",
			icon: key,
		},
		{
			machineName: "Malware",
			icon: spider,
		},
	];
};
