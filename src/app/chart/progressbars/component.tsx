"use client"
import Chart from "@shared/components/chart";
import LoaderComponent from "@shared/components/loader";
import theme from "@theme/index";
import { BarChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

export default function ProgressBarChart() {

	const loadComponents = useRef([
		BarChart,
		CanvasRenderer,
		GridComponent,
	]);
	const [data, setData] = useState({ open: 0, closed: 0 });
	const searchParams = useSearchParams();

	useEffect(() => {
        const open = Number(searchParams.get("events-open") || 0);
        const closed = Number(searchParams.get("events-closed") || 0);
        setData({open, closed})
	}, [searchParams]);

	const options = useMemo(() => {
		if (!data) return {};

		return {
			grid: {
				containLabel: true,
			},
			xAxis: {
				type: "value",
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { show: false },
                splitLine: { show: false },
			},
			yAxis: {
                splitLine: { show: false },
                axisLabel: { show: false },
                axisTick: { show: false },
                axisLine: { show: false },
				type: "category",
			},
			legend: {
				data: ["value"],
			},
            series: [
                {
                    name: "Serie 1",
                    type: "bar",
                    data: [, data.open],
                    itemStyle: {
                        color: `${theme.colors.red40}`,
                        borderRadius: 28,
                    },
                    label: {
                        show: true,
			            position: "right",
                    },
                },
                {
                    name: "Serie 2",
                    type: "bar",
                    data: [data.closed],
                    itemStyle: {
                        color: `${theme.colors.green40}`,
                        borderRadius: 28,
                    },
                    label: {
                        show: true,
			            position: "right",
                    },
                },
            ],
		} }, [data]);

	if (data === undefined) return <LoaderComponent/>
	if (data === null) return <div>Error loading data</div>

	return (
		<Chart
			loadComponents={loadComponents.current}
			options={options}
		/>
	);
}
