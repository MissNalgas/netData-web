"use client"
import React from "react";
import { Container } from "./styled";

export default function SavingsItem({children, letter} : SavingsItemProps) {

	return (
		<Container>
			<div className="w-12 h-12 bg-gray-100 rounded grid place-content-center text-xl font-bold">
				{letter}
			</div>
			<div>
				{children}
			</div>
		</Container>
	);
}
interface SavingsItemProps {
	children?: React.ReactNode;
	letter: string;
}
