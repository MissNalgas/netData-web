"use client"
import { useTicketPerSolution } from "@infrastructure/api/hooks";
import Chart from "@shared/components/chart";
import LoaderComponent from "@shared/components/loader";
import { BarChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function SolutionBars() {

	const loadComponents = useRef([
		BarChart,
		CanvasRenderer,
		GridComponent,
	]);
	const data = useTicketPerSolution();
	const {i18n} = useTranslation();

	const options = useMemo(() => {
		if (!data) return {};

		const translation = i18n.resolvedLanguage;

		const resolvedKey = translation === "es" ? "solutionsEs" : "solutionsEn";
		const solutions = data[resolvedKey];

		const maxValue = data.counts.reduce((a, b) => a > b ? a : b, 0);

		return {
			grid: {
				containLabel: true,
			},
			xAxis: {
				type: "value",
			},
			yAxis: {
				type: "category",
				data: solutions,
			},
			legend: {
				data: ["value"],
			},
			series: [{
				type: "bar",
				data: data.counts,
				itemStyle: {
					color: (obj: any) => {

						const percentage = obj.value / maxValue;

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
		} }, [data, i18n]);

	if (data === undefined) return <LoaderComponent/>
	if (data === null) return <div>Error loading data</div>

	return (
		<Chart
			loadComponents={loadComponents.current}
			options={options}
		/>
	);
}
