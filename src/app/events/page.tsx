"use client";

import EventsTemplate from "@infrastructure/components/events";
import Topbar from "@shared/components/topbar";
import MainContainer from "@shared/containers/mainContainer";

export default function HeatmapPage() {
	return (
        <MainContainer>
            <div className="bg-shadow20 h-fit pb-24">
                <Topbar />
                <EventsTemplate />
            </div>
        </MainContainer>
	);
}
