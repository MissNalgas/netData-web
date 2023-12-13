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
import spider from "/public/img/spider.png";
import key from "/public/img/key.png";
import arrows from "/public/img/arrows.png";
import stop from "/public/img/stop.png";

export const allEvents = [
	{
		id: 1,
		event: "execution_event",
		description: "description_execution",
		number: 3,
		image: on,
	},
	{
		id: 2,
		event: "initial_access",
		description: "description_initial_access",
		number: 3,
		image: targetShooting,
	},
	{
		id: 3,
		event: "exploits_event",
		description: "description_exploits",
		number: 3,
		image: bomb,
	},
	{
		id: 4,
		event: "restriction_event",
		description: "description_restriction",
		number: 3,
		image: stop,
	},
	{
		id: 5,
		event: "discovery_event",
		description: "description_discovery",
		number: 3,
		image: binoculars,
	},
	{
		id: 6,
		event: "credential_access",
		description: "credential_access_sub",
		number: 3,
		image: access,
	},
	{
		id: 7,
		event: "defense_evasion",
		description: "defense_evasion_sub",
		number: 3,
		image: evacion,
	},
	{
		id: 8,
		event: "collection",
		description: "collection_sub",
		number: 3,
		image: cartShopping,
	},
	{
		id: 9,
		event: "persistence",
		description: "persistence_sub",
		number: 3,
		image: bugComputer,
	},
	{
		id: 10,
		event: "execute",
		description: "execute_sub",
		number: 3,
		image: on,
	},
	{
		id: 11,
		event: "exfiltration",
		description: "exfiltration_sub",
		number: 3,
		image: magnet,
	},
	{
		id: 12,
		event: "command_control",
		description: "command_control_sub",
		number: 3,
		image: signalAtenna,
	},
	{
		id: 13,
		event: "lateral_movement",
		description: "lateral_movement_sub",
		number: 3,
		image: arrows,
	},
	{
		id: 14,
		event: "privilege_escalation",
		description: "privilege_escalation_sub",
		number: 3,
		image: key,
	},
	{
		id: 15,
		event: "malware",
		description: "malware_sub",
		number: 3,
		image: spider,
	},
];
