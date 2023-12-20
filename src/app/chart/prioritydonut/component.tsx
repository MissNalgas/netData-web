"use client";

import Chart from "@shared/components/chart";
import { PieChart } from "echarts/charts";
import { LegendComponent, TooltipComponent } from "echarts/components";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { useMemo, useRef } from "react";

export default function PriorityDonut() {
	const loadComponents = useRef([
		TooltipComponent,
		LegendComponent,
		PieChart,
		CanvasRenderer,
		LabelLayout,
	]);

	const options = useMemo(
		() => ({
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
						color: (obj: any) => {
							return obj.data?.color || "red";
						},
					},
					data: [
						{ value: 1048, name: "Bajo", color: "#75DAD4" },
						{ value: 735, name: "Medio", color: "#73259A" },
						{ value: 580, name: "Alto", color: "#F99E17" },
						{ value: 484, name: "Urgente", color: "#B01212" },
					],
				},
			],
		}),
		[]
	);

	return <Chart options={options} loadComponents={loadComponents.current} />;
}
