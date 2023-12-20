"use client"
import Chart from "@shared/components/chart";
import { ScatterChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { useMemo, useRef } from "react";

export default function HeatmapChart() {


	const loadComponents = useRef([
		GridComponent,
		ScatterChart,
		CanvasRenderer,
		UniversalTransition,
	]);


	const option = useMemo(() => {
		const hours = [
			"12a", "1a", "2a", "3a", "4a", "5a", "6a",
			"7a", "8a", "9a", "10a", "11a",
			"12p", "1p", "2p", "3p", "4p", "5p",
			"6p", "7p", "8p", "9p", "10p", "11p",
		];
		// prettier-ignore
		const days = [
			"Saturday", "Friday", "Thursday",
			"Wednesday", "Tuesday", "Monday", "Sunday",
		];
		// prettier-ignore
		const data = [[3, 2, 1], [2, 3, 4]]
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
		}}, []);


	return (
		<Chart
			options={option}
			loadComponents={loadComponents.current}
		/>
	);
}
