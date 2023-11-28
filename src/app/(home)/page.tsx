"use client";
import Topbar from "@shared/components/topbar";
import Dashboard from "@infrastructure/components/dashboard";

export default function Home() {
	return (
		<div className="bg-shadow20 h-fit pb-24">
			<Topbar />
			<Dashboard/>
		</div>
	);
}
