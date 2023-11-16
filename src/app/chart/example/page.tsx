"use client"
import Chart from "@shared/components/chart";
import { PieChart } from "echarts/charts";
import { LegendComponent } from "echarts/components";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { useMemo, useRef } from "react";

export default function ExampleChartPage() {

	const loadComponentes = useRef([
		LegendComponent,
		PieChart,
		CanvasRenderer,
		LabelLayout,
	]);

	const option = useMemo(() => ({
		series: [
			{
				name: "Nightingale Chart",
				type: "pie",
				radius: [50, 250],
				center: ["50%", "50%"],
				roseType: "area",
				itemStyle: {
					borderRadius: 8,
				},
				data: [
					{ value: 40, name: "rose 1" },
					{ value: 38, name: "rose 2" },
					{ value: 32, name: "rose 3" },
					{ value: 30, name: "rose 4" },
					{ value: 28, name: "rose 5" },
					{ value: 26, name: "rose 6" },
					{ value: 22, name: "rose 7" },
					{ value: 18, name: "rose 8" },
				],
			},
		],

		}), []);


	return (
		<Chart options={option} loadComponents={loadComponentes.current}/>
	);
}
