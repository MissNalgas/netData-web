import Image from "next/image";
import mockupImg from "./mockupImg";

export default function TicketCard() {
	return (
		<button className="bg-gray-100 rounded-lg p-2 flex items-center w-full justify-between">
			<Image width={30} height={30} src={mockupImg} alt="Mockup img"/>
			<b>ID 6543212</b>
			<span className="text-sm">Initial access</span>
			<span className="text-sm">10:00pm</span>
		</button>
	)
}
