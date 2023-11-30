import Image from "next/image";
import React, { useEffect, useState } from "react";
import Polygon from "/public/img/Polygon.png";

interface ModalProps {
	children: React.ReactNode;
	isOpen: boolean;
	onActionModal: () => void;
	tooltipStyles?: React.CSSProperties;
	showPolygon?: boolean;
	polygonStyle?: React.CSSProperties;
}

type position = {
	top?: string;
	left?: string;
	right?: string;
	bottom?: string;
};

export default function Modal(props: ModalProps) {
	const {
		children,
		isOpen,
		onActionModal,
		tooltipStyles,
		showPolygon,
		polygonStyle,
	} = props;
	console.log("isOpen", isOpen);
	const modalStyles = isOpen
		? "fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-700 overflow-hidden z-50"
		: "hidden";
	const [modalPosition, setModalPosition] = useState<position>({
		top: "0",
		left: "0",
		right: "0",
		bottom: "0",
	});

	const typeModal2 = "config";

	useEffect(() => {
		const changePosition = (typeModal: string) => {
			let buttonPosition;
			switch (typeModal) {
				case "config":
					buttonPosition = {
						top: "26.5%",
						left: "76%",
					};
					setModalPosition(buttonPosition);
					break;
				case "step1":
					buttonPosition = {
						top: "2%",
						left: "7%",
					};
					setModalPosition(buttonPosition);
					break;
				default:
					break;
			}
		};
		changePosition(typeModal2);
	}, []);
	console.log("polygonStyle", polygonStyle);
	return (
		<div
			onClick={onActionModal}
			className={modalStyles}
			style={{
				zIndex: 99999,
			}}
		>
			<div
				className="bg-white rounded-md p-4 max-w-xl"
				style={
					(tooltipStyles && {
						zIndex: 99999,
						position: "absolute",
						borderRadius: "38px",
						translate: "transform(50%, 50%)",

						...tooltipStyles,
					}) || {
						zIndex: 99999,
						width: "fit-content",
						top: modalPosition.top,
						left: modalPosition.left,
						right: modalPosition.right,
						bottom: modalPosition.bottom,
						position: "absolute",
						borderRadius: "24px",
					}
				}
			>
				{showPolygon && (
					<Image
						src={Polygon}
						alt="logo"
						width={20}
						height={20}
						style={{
							...polygonStyle,
							top: "0ch",
							right: "1ch",
							color: "transparent",
							position: "absolute",
						}}
					/>
				)}

				{children}
			</div>
		</div>
	);
}
