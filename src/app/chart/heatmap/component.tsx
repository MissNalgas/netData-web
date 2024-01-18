"use client"
import { IFilters } from "@domain/models";
import { useAllTickets } from "@infrastructure/api/hooks";
import Chart from "@shared/components/chart";
import LoaderComponent from "@shared/components/loader";
import { parseQueryToFilters } from "@shared/utils";
import { ScatterChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

export default function HeatmapChart() {

	const loadComponents = useRef([
		GridComponent,
		ScatterChart,
		CanvasRenderer,
		UniversalTransition,
	]);
	const [filters, setFilters] = useState<IFilters>();
	const ticketData = useAllTickets(filters);

	const searchParams = useSearchParams();

	useEffect(() => {
		setFilters(
			parseQueryToFilters(searchParams)
		);
	}, [searchParams]);

	const option = useMemo(() => {

		if (!ticketData) return {};

		const hours = [
			"12am", "1am", "2am", "3am", "4am", "5am", "6am",
			"7am", "8am", "9am", "10am", "11am",
			"12pm", "1pm", "2pm", "3pm", "4pm", "5pm",
			"6pm", "7pm", "8pm", "9pm", "10pm", "11pm",
		];
		// prettier-ignore
		const days = [
			"Saturday", "Friday", "Thursday",
			"Wednesday", "Tuesday", "Monday", "Sunday",
		];
		// prettier-ignore
		const data = ticketData.data
		.map(function (item) {
			return [item[1], item[0], item[2]];
		});

		const maxCount = data.map(data => data[2]).reduce((a, b) => a > b ? a : b, 0);

		return {
			grid: {
				left: 2,
				bottom: 10,
				right: 10,
				containLabel: true,
			},
			xAxis: {
				type: "category",
				data: hours,
				boundaryGap: false,
				splitLine: {
					show: true,
				},
				axisLine: {
					show: false,
				},
			},
			yAxis: {
				type: "category",
				data: days,
				axisLine: {
					show: false,
				},
			},
			series: [
				{
					selectedMode: false,
					name: "Punch Card",
					type: "scatter",
					symbolSize: function (val : any) {
						return val[2] ? 16 : 0;
					},
					data: data,
					animationDelay: function (idx : any) {
						return idx * 5;
					},
					itemStyle: {
						color: function(val: any) {
							const color = Math.floor((val.data[2] / maxCount) * 4);
							const COLORS = ["#b8b8b8", "#626262", "#f99e17", "#f37335"];
							return COLORS[color] || "#f37335";
						},
					},
				},
			],
		}}, [ticketData]);


	if (ticketData === undefined) return <LoaderComponent/>
	if (ticketData === null) return <div>Error loading data</div>

	return (
		<Chart
			options={option}
			loadComponents={loadComponents.current}
		/>
	);
}
