"use client";

import { useState } from "react";
import EventsCibersecurity from "@infrastructure/components/dashboard/eventsCibersecurity";
import Topbar from "@shared/components/topbar";

export default function HeatmapPage() {

	const [isFilteringByOpen, setIsFilteringByOpen] = useState(true);


	return (
		<div className="bg-shadow20 h-fit pb-24">
			<Topbar
				screen="other"
				onPressGroupButton={isActive => setIsFilteringByOpen(isActive)}
			/>
			<EventsCibersecurity
				isFilteringByOpen={isFilteringByOpen}
			/>
		</div>
	);
}
