"use client";

import HeadmapTemplate from "@infrastructure/components/heatmap/template";
import Topbar from "@shared/components/topbar";

export default function HeatmapPage() {
	return (
		<div className="bg-shadow20 h-fit pb-24">
			<Topbar />
			<HeadmapTemplate />
		</div>
	);
}
