import ExampleChart from "./component";

export default function ChartExamplePage() {
	if (typeof window === "undefined") {
		return null;
	} else {
		return <ExampleChart/>
	}
}
