"use client";
import Tabs from "@shared/components/tabs";
import { useState } from "react";
import TicketCard from "@shared/components/ticketCard";
import TextInput from "@shared/components/textInput";
import Topbar from "@shared/components/topbar";

const TABS = ["Incidentes de hoy", "Incidentes de ayer"] as const;

export default function Home() {

	const [tab, setTab] = useState<typeof TABS[number]>(TABS[0]);

	return (
		<>
			<Topbar/>
			<div className="flex flex-col items-center justify-center h-full min-h-screen">
				<div >
					<Tabs
						selectedTab={tab}
						onChange={setTab}
						tabs={TABS}
					/>
					{tab}
					<TicketCard/>
					<iframe
						className="w-[600px] max-w-lg h-[540px]"
						src="/chart/example?height=540"
					/>
					<TextInput
						name="email"
						label="Email"
						placeholder="correo@example.com"
						icon={() => (
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.0917 9.59167C12.9087 8.94888 13.505 8.06743 13.7977 7.06995C14.0904 6.07247 14.0649 5.00855 13.7248 4.02622C13.3847 3.04389 12.7469 2.19199 11.9001 1.58905C11.0532 0.986099 10.0395 0.662086 9 0.662086C7.96045 0.662086 6.94676 0.986099 6.09994 1.58905C5.25312 2.19199 4.61528 3.04389 4.27517 4.02622C3.93506 5.00855 3.90959 6.07247 4.2023 7.06995C4.49501 8.06743 5.09134 8.94888 5.90833 9.59167C4.5084 10.1525 3.2869 11.0828 2.37407 12.2833C1.46125 13.4837 0.8913 14.9094 0.724997 16.4083C0.712959 16.5178 0.722594 16.6285 0.753352 16.7342C0.784109 16.8399 0.835387 16.9385 0.904257 17.0244C1.04335 17.1979 1.24565 17.309 1.46666 17.3333C1.68768 17.3576 1.9093 17.2932 2.08277 17.1541C2.25624 17.015 2.36735 16.8127 2.39166 16.5917C2.57465 14.9627 3.3514 13.4582 4.57351 12.3657C5.79562 11.2731 7.37741 10.6692 9.01667 10.6692C10.6559 10.6692 12.2377 11.2731 13.4598 12.3657C14.6819 13.4582 15.4587 14.9627 15.6417 16.5917C15.6643 16.7964 15.762 16.9855 15.9159 17.1225C16.0698 17.2595 16.269 17.3346 16.475 17.3333H16.5667C16.7851 17.3082 16.9848 17.1977 17.1221 17.026C17.2595 16.8543 17.3234 16.6353 17.3 16.4167C17.1329 14.9135 16.5599 13.4842 15.6424 12.2818C14.7249 11.0795 13.4974 10.1496 12.0917 9.59167ZM9 9C8.34073 9 7.69626 8.8045 7.1481 8.43823C6.59993 8.07196 6.17269 7.55137 5.9204 6.94228C5.66811 6.33319 5.6021 5.66297 5.73071 5.01637C5.85933 4.36976 6.1768 3.77582 6.64297 3.30964C7.10915 2.84347 7.70309 2.526 8.3497 2.39738C8.9963 2.26876 9.66652 2.33478 10.2756 2.58707C10.8847 2.83936 11.4053 3.2666 11.7716 3.81477C12.1378 4.36293 12.3333 5.0074 12.3333 5.66667C12.3333 6.55072 11.9821 7.39857 11.357 8.02369C10.7319 8.64881 9.88405 9 9 9Z" fill="#F99E17"/>
							</svg>
						)}
					/>
				</div>
			</div>
		</>
	);
}

