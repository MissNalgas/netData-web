"use client"
import { useTicketPerCategory } from "@infrastructure/api/hooks";
import Chart from "@shared/components/chart";
import LoaderComponent from "@shared/components/loader";
import { BarChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function CategoryBars() {

	const data = useTicketPerCategory();
	const { i18n } = useTranslation();

	const loadComponents = useRef([
		GridComponent,
		BarChart,
		CanvasRenderer,
	]);

	const options = useMemo(() => {
		if (!data) return {};

		const key = i18n.resolvedLanguage === "en" ? "categoriesEn" : "categoriesEs" as keyof typeof data;

		return {
			xAxis: {
				type: "category",
				data: data[key],
			},
			yAxis: {
				type: "value",
			},
			series: [
				{
					data: data.count,
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
		}
	}, [data, i18n]);

	if (data === null) return <div>Error loading data</div>;

	if (data === undefined) return <LoaderComponent/>


	return (
		<Chart
			loadComponents={loadComponents.current}
			options={options}
		/>
	);
}
