"use client"
import Chart from "@shared/components/chart";
import { BarChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { useMemo, useRef } from "react";

export default function CategoryBars() {

	const loadComponents = useRef([
		GridComponent,
		BarChart,
		CanvasRenderer,
	]);

	const options = useMemo(() => ({
		xAxis: {
			type: "category",
			data: ["Acceso inicial", "Ejecucion", "Exploits", "Restriccion", "Descrubrimiento", "Acceso credencial", "Evasion de defensa"],
		},
		yAxis: {
			type: "value",
		},
		series: [
			{
				data: [120, 200, 150, 80, 70, 110, 130],
				type: "bar",
				itemStyle: {
					borderRadius: 8,
					color: (obj: any) => {
						const colors = ["#75DAD4", "#73259A", "#F00E17"];
						return colors[Math.floor(obj.dataIndex / colors.length) % colors.length];
					},
				},
			},
		],
	}), []);


	return (
		<Chart
			loadComponents={loadComponents.current}
			options={options}
		/>
	);
}
