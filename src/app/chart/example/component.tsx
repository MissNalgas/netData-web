"use client"
import { IGraphicDay } from "@domain/models";
import Chart from "@shared/components/chart";
import { PieChart } from "echarts/charts";
import { LegendComponent } from "echarts/components";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";

interface ChartProps {
    data: IGraphicDay;
}

export default function ExampleChart(props: ChartProps) {
    const { data } = props;
    const { t } = useTranslation("dashboard");

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
				radius: ["10%", "100%"],
				center: ["50%", "50%"],
				roseType: "area",
				itemStyle: {
					borderRadius: 8,
				},
				data: [
					{ value: data?.Low ?? 0, name: `${t("low")}` },
					{ value: data?.Medium ?? 0, name: `${t("medium")}` },
					{ value: data?.High ?? 0, name: `${t("high")}` },
					{ value: data?.Urgent ?? 0, name: `${t("urgent")}` },
				],
			},
		],

		}), [t, data]);


	return (
		<Chart options={option} loadComponents={loadComponentes.current}/>
	);
}
