"use client"
import * as echarts from "echarts/core";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";


export default function Chart({options, loadComponents} : ChartProps) {

	const chartRef = useRef<null | echarts.ECharts>(null);
	const containerRef = useRef(null);
	const [height, setHeight] = useState(0);
	const firstRenderRef = useRef(false);
	const searchParams = useSearchParams();

	useEffect(() => {
		if (!height || firstRenderRef.current) return;

		const element = containerRef.current;
		if (!element) return;

		echarts.use(loadComponents);

		const chart = chartRef.current = echarts.init(element);


		chart.setOption(options);
		firstRenderRef.current = true;
	}, [height, loadComponents, options]);

	useEffect(() => {
		const heightParam = Number(searchParams.get("height")) || 400;
		setHeight(heightParam);
	}, [searchParams]);


	return (
		<div
			className="w-full"
			style={{height}}
			ref={containerRef}
		/>
	);
}
interface ChartProps {
	options: Record<any, any>;
	loadComponents: Array<any>;
}
