"use client"
import Image from "next/image";
import SavingsItem from "./letterItem";
import Topbar from "@shared/components/topbar";
import Icon from "@shared/components/icons";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@infrastructure/store";
import { currencyFormat } from "@shared/utils";
import { useTranslation } from "react-i18next";

export default function SavingsTemplate() {
    const { saving } = useSelector((state: RootState) => state.dashboard.dashboard.today);
    const { t } = useTranslation("saving_month");
	return (
		<>
			<Topbar screen="dashboard"/>
			<div>
				<div className="w-full h-40 bg-primary rounded-bl-3xl rounded-br-3xl grid place-content-center relative">
					<Link href="/" className="absolute top-4 left-4 bg-gray-200 rounded-full">
						<Icon icon="left-arrow" size="32"/>
					</Link>
					<h1 className="font-bold text-2xl text-white text-center mx-8 my-4">{t("last_month_savings")}</h1>
					<div className="card p-4 flex items-center gap-2 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-max">
						<Image className="bg-gray-100 rounded-lg" src="/img/money 1.png" alt="Money" width={50} height={55}/>
						<h2 className="text-4xl font-bold">{currencyFormat(saving?.f)} <span className="text-xl">USD</span></h2>
					</div>
				</div>
				<div className="flex flex-col p-4 gap-4 my-10">
					<div className="card p-4 py-8">
						<h2 className="text-2xl text-gray50 font-bold text-center">{t("keep_in_mind")}</h2>
					</div>
					<div className="grid gap-4 grid-cols-1 laptop:grid-cols-2">
						<div className="flex flex-col gap-4">
							<div className="card p-4 flex items-center gap-2">
								<Image src="/img/Diseño sin título (4) 1.png" width={63} height={63} alt="Gear image"/>
								<div>
									<h4 className="font-bold text-gray-800">{t("saving_month")}</h4>
									<p>{t("calculate_with_operation")}</p>
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
								{t("last_tickets")} <b>{saving?.a}</b>
							</SavingsItem>
							<SavingsItem letter="B">
                                {t("investigation_hour")} <b>{saving?.b}</b> {t("hours")}
							</SavingsItem>
							<SavingsItem letter="C">
                                {t("hour_work_month")} <b>{saving?.c}</b> {t("hours")}
							</SavingsItem>
							<SavingsItem letter="D">
                                {t("number_agents")} <b>{saving?.d}</b> {t("agent")}
							</SavingsItem>
							<SavingsItem letter="E">
                                {t("agent_month_value")} <b>{currencyFormat(saving?.e)} USD</b>
							</SavingsItem>
							<SavingsItem letter="F">
                                {t("sanvingUSD")}
							</SavingsItem>
						</div>

					</div>
				</div>
			</div>
		</>
	);
}
