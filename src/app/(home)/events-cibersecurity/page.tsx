"use client";

import EventsCibersecurity from "@infrastructure/components/dashboard/eventsCibersecurity";
import Topbar from "@shared/components/topbar";

export default function HeatmapPage() {
	return (
		<div className="bg-shadow20 h-fit pb-24">
			<Topbar />
			<EventsCibersecurity showEventsDay="" />
		</div>
	);
}
