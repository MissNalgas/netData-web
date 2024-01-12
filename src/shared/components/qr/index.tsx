import QrCode from "qrcode";
import { useEffect, useRef } from "react";

export default function Qr({uri}: QrProps) {

	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {

		if (!uri) return;

		const element = canvasRef.current;
		if (!element) return;

		QrCode.toCanvas(element, uri, {
			color: {
				dark: "#000",
				light: "#ffffff",
			},
			scale: 6,
		}, (err: any) => {
			if (!err) return;
		})

	}, [uri]);

	return (
		<div className="grid place-content-center">
			<canvas
				ref={canvasRef}
			/>
		</div>
	);
}

interface QrProps {
	uri: string;
}
