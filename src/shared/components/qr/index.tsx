import colors from "@theme/colors";
import QrCode from "qrcode";
import { useEffect, useRef } from "react";

export default function Qr() {

	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {

		const element = canvasRef.current;
		if (!element) return;

		QrCode.toCanvas(element, "https://google.com", {
			color: {
				dark: colors.orange50,
				light: "#ffffff",
			},
			scale: 8,
		}, (err: any) => {
			if (!err) return;
		})

	}, []);

	return (
		<div className="grid place-content-center">
			<canvas
				ref={canvasRef}
			/>
		</div>
	);
}
