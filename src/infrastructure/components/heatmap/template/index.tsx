"use client"
import TwoColumnLayout from "@shared/components/buttons/twoColumnLayout";
import FilterInput from "@shared/components/filterInput";
import TicketCard from "@shared/components/ticketCard";
import Image from "next/image";

export default function HeadmapTemplate() {

	return (
		<TwoColumnLayout>
			<div className="flex flex-col gap-8">
				<div className="card p-4 h-[max-content] flex flex-col items-center">
					<h2 className="text-2xl font-bold">Heatmap</h2>
					<h3 className="text-xl">Tu historial de tickets</h3>
					<div className="w-full max-w-[400px]">
						<FilterInput/>
					</div>
					<iframe className="w-[500px] h-[500px] bg-gray-100 rounded-lg p-2" src="/chart/heatmap"/>
				</div>
				<div className="card p-4">
					<h2 className="text-2xl font-bold">Eventos de ciberseguridad por prioridad</h2>
					<iframe src="/chart/prioritydonut" className="w-full h-[300px]"/>
				</div>
				<div className="card p-4">
					<h2 className="text-2xl font-bold">Eventos de ciberseguridad por categoría</h2>
					<iframe src="/chart/categorybars" className="w-full h-[300px]"/>
				</div>
				<div className="card p-4 flex flex-col gap-2">
					{Array(3).fill("").map((_, i) => (
						<TicketCard key={i}/>
					))}
				</div>

			</div>
			<div className="flex flex-col h-full gap-4">
				<div className="card flex items-center p-4">
					<Image src="/img/Diseño sin título (2) 1.png" alt="Ticket icon" width={100} height={0}/>
					<span className="font-bold">Seleccionaste este # de tickets</span>
					<h1 className="text-8xl font-bold text-primary">
						0
					</h1>
				</div>
				<div className="card h-full flex-1 p-4">
					<div className="grid place-content-center text-xl font-bold h-full">
						<span className="text-center">
							¡No hay ningún ticket seleccionado!
						</span>
					</div>
				</div>
				<div className="card p-4">
					<h2 className="text-2xl font-bold">Eventos de ciberseguridad por solución</h2>
					<iframe src="/chart/solutionbars?height=400" className="w-full h-[400px]"/>
				</div>
			</div>
		</TwoColumnLayout>
	);

}
