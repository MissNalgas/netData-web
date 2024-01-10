"use client";
import Topbar from "@shared/components/topbar";
import ProfileComponent from "@infrastructure/components/profile";

export default function Home() {
	return (
		<div className="bg-shadow20 h-fit pb-24">
			<Topbar />
			<ProfileComponent />
		</div>
	);
}
