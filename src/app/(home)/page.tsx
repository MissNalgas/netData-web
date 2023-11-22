"use client";
import Tabs from "@shared/components/tabs";
import { useState } from "react";
import TicketCard from "@shared/components/ticketCard";
import TextInput from "@shared/components/textInput";
import Topbar from "@shared/components/topbar";

const TABS = ["Incidentes de hoy", "Incidentes de ayer"] as const;

export default function Home() {

	const [tab, setTab] = useState<(typeof TABS)[number]>(TABS[0]);

	return (
		<>
			<Topbar />
			<div className="flex flex-col items-center justify-center h-full min-h-screen">
				<div className="flex flex-col gap-2" >
					<Tabs
						selectedTab={tab}
						onChange={setTab}
						tabs={TABS}
					/>
					{tab}
					<TicketCard/>
					<div className="card flex flex-col gap-2 pt-4 px-2 text-2xl font-bold">
						<h1 className="title">Title</h1>
						<iframe
							className="w-[600px] max-w-lg h-[540px]"
							src="/chart/example?height=540"
						/>
					</div>
					<TextInput
						name="email"
						label="Email"
						placeholder="correo@example.com"
						icon="account"
					/>
				</div>
			</div>
		</>
	);
}
