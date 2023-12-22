"use client"
import { useTicketPerCategory } from "@infrastructure/api/hooks";
import Chart from "@shared/components/chart";
import { PieChart } from "echarts/charts";
import { LegendComponent } from "echarts/components";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function ExampleChart() {
	const data = useTicketPerCategory();
	const { i18n } = useTranslation("dashboard");

	const loadComponentes = useRef([
		LegendComponent,
		PieChart,
		CanvasRenderer,
		LabelLayout,
	]);

	const option = useMemo(() => {
		if (!data) return {};

		const key = i18n.resolvedLanguage === "en" ? "categoriesEn" : "categoriesEs";
		const formattedData = data[key].map((category, index) => ({
			value: data.count[index],
			name: category,
		}));

		return {
			series: [
				{
					name: "Nightingale Chart",
					type: "pie",
					radius: ["10%", "100%"],
					center: ["50%", "50%"],
					roseType: "area",
					itemStyle: {
						borderRadius: 8,
					},
					data: formattedData,
				},
			],
		};
	}, [data, i18n]);


	return (
		<Chart options={option} loadComponents={loadComponentes.current}/>
	);
}
