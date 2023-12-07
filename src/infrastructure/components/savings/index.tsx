"use client"
import Image from "next/image";
import SavingsItem from "./letterItem";
import Topbar from "@shared/components/topbar";
import Icon from "@shared/components/icons";
import Link from "next/link";

export default function SavingsTemplate() {
	return (
		<>
			<Topbar/>
			<div>
				<div className="w-full h-40 bg-primary rounded-bl-3xl rounded-br-3xl grid place-content-center relative">
					<Link href="/" className="absolute top-4 left-4 bg-gray-200 rounded-full">
						<Icon icon="left-arrow" size="32"/>
					</Link>
					<h1 className="font-bold text-2xl text-white text-center">Tu ahorro de servicio del último mes</h1>
					<div className="card p-4 flex items-center gap-2 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-max">
						<Image className="bg-gray-100 rounded-lg" src="/img/money 1.png" alt="Money" width={50} height={55}/>
						<h2 className="text-4xl font-bold">$8.000 <span className="text-xl">USD</span></h2>
					</div>
				</div>
				<div className="flex flex-col p-4 gap-4 my-10">
					<div className="card p-4 py-8">
						<h2 className="text-2xl text-gray50 font-bold text-center">Ten en cuenta que...</h2>
					</div>
					<div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
						<div className="flex flex-col gap-4">
							<div className="card p-4 flex items-center gap-2">
								<Image src="/img/Diseño sin título (4) 1.png" width={63} height={63} alt="Gear image"/>
								<div>
									<h4 className="font-bold text-gray-800">El ahorro mensual</h4>
									<p>Se calcula con la siguiente operación</p>
								</div>
							</div>
							<div className="card p-4 flex items-center gap-2">
								<Image src="/img/Diseño sin título (2) 1.png" width={63} height={63} alt="Man sitting image"/>
								<Image src="/img/function1.png" width={110} height={63} alt="(A x B) / C = D"/>
							</div>
							<div className="card p-4 flex items-center gap-2">
								<Image src="/img/Diseño sin título (3) 1.png" alt="Hand and wallet" width={63} height={63}/>
								<Image src="/img/function2.png" width={102} height={36} alt="D x E = F"/>
							</div>
						</div>
						<div className="card flex flex-col p-4 gap-4">
							<SavingsItem letter="A">
								Tickets de los últimos 30 días: <b>1000</b>
							</SavingsItem>
							<SavingsItem letter="B">
								Hora de investigación por ticket: <b>2</b> horas
							</SavingsItem>
							<SavingsItem letter="C">
								Horas de trabajo en el mes: <b>160</b> horas
							</SavingsItem>
							<SavingsItem letter="D">
								Cantidad de agentes necesarios: <b>3</b> agentes
							</SavingsItem>
							<SavingsItem letter="E">
								Valor mes por agente: <b>2800 USD</b>
							</SavingsItem>
							<SavingsItem letter="F">
								Ahorro en USD
							</SavingsItem>
						</div>

					</div>
				</div>
			</div>
		</>
	);
}
