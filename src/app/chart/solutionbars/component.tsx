"use client"
import Chart from "@shared/components/chart";
import { BarChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { useMemo, useRef } from "react";

export default function SolutionBars() {

	const loadComponents = useRef([
		BarChart,
		CanvasRenderer,
		GridComponent,
	]);

	const options = useMemo(() => ({
		grid: {
			containLabel: true,
		},
		xAxis: {
			type: "value",
		},
		yAxis: {
			type: "category",
			data: ["Falso positivo", "Verdadero positivo", "Amenaza controlada", "Incidente conocido", "Duplicado", "Otros"],
		},
		legend: {
			data: ["value"],
		},
		series: [{
			type: "bar",
			data: [8, 10, 0, 17, 0, 0],
			itemStyle: {
				color: (obj: any) => {

					const MAX_VALUE = 17;
					const percentage = obj.value / MAX_VALUE;

					function getMiddle(numberA : number, numberB: number) {
						const max = numberB - numberA;
						return numberA + max * percentage;
					}

					const red = getMiddle(200, 30);
					const green = getMiddle(240, 172);
					const blue = getMiddle(238, 155);

					return `rgb(${red}, ${green}, ${blue})`;
				},
				borderRadius: 8,
			},
			label: {
				show: true,
				position: "right",
			},
		}],
	}), []);


	return (
		<Chart
			loadComponents={loadComponents.current}
			options={options}
		/>
	);
}
