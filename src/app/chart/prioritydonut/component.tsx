"use client";

import { IFilters } from "@domain/models";
import { useTicketPerPriority } from "@infrastructure/api/hooks";
import Chart from "@shared/components/chart";
import LoaderComponent from "@shared/components/loader";
import { parseQueryToFilters } from "@shared/utils";
import { PieChart } from "echarts/charts";
import { LegendComponent, TooltipComponent } from "echarts/components";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

export default function PriorityDonut() {
	const loadComponents = useRef([
		TooltipComponent,
		LegendComponent,
		PieChart,
		CanvasRenderer,
		LabelLayout,
	]);
	const [filter, setFilter] = useState<IFilters>();
	const data = useTicketPerPriority(filter);
	const searchParams = useSearchParams();

	useEffect(() => {
		setFilter(
			parseQueryToFilters(searchParams)
		);
	}, [searchParams]);

	const options = useMemo(() => {
		if (!data) return {};

		const mappedKeys = ["low", "medium", "urgent", "high"];
		const colors = ["#75dad4", "#73259a", "#f99e17", "#b01212"];
		const transformedData = Object.entries(data).filter(([key]) => mappedKeys.includes(key)).map(([key, value], index) => {

			return {
				value,
				name: key,
				color: colors[index],
			}
		});

		return{
			tooltip: {
				trigger: "item",
			},
			legend: {
				top: "5%",
				left: "center",
			},
			series: [
				{
					name: "Access From",
					type: "pie",
					radius: ["40%", "70%"],
					avoidLabelOverlap: false,
					label: {
						show: false,
						position: "center",
					},
					emphasis: {
						label: {
							show: true,
							fontSize: 40,
							fontWeight: "bold",
						},
					},
					labelLine: {
						show: false,
					},
					itemStyle: {
						color: (obj : any) => {
							return obj.data?.color || "red";
						},
					},
					data: transformedData,
					mockdata: [
						{ value: 1048, name: "Bajo", color: "#75DAD4" },
						{ value: 735, name: "Medio", color: "#73259A" },
						{ value: 580, name: "Alto", color: "#F99E17" },
						{ value: 484, name: "Urgente", color: "#B01212" },
					],
				},
			],
		}
	}, [data]);

	if (data === undefined) return <LoaderComponent/>
	if (data === null) return <div>Error loading the data</div>


	return (
		<Chart
			options={options}
			loadComponents={loadComponents.current}
		/>
	);
}
