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
		const heightParam = Number(searchParams.get("height")) || 300;
		setHeight(heightParam);
	}, [searchParams]);

	useEffect(() => {
		if (typeof window === "undefined") return;

		function resize() {
			chartRef.current?.resize();
		}

		resize();

		window.addEventListener("resize", resize);

		return () => {
			window.removeEventListener("resize", resize);
		}

	}, []);


	return (
		<div
			className="w-full max-h-screen"
			style={{height}}
			ref={containerRef}
		/>
	);
}
interface ChartProps {
	options: Record<any, any>;
	loadComponents: Array<any>;
}
