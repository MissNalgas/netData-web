import { ITicket, TicketStatus } from "@domain/models";
import Icon from "@shared/components/icons";
import colors from "@theme/colors";
import { PentaContainerGrid } from "./styled";
import CategoryCircle from "./categoryCircle";
import { Fragment } from "react";
import { useSideModal } from "@shared/components/sideModal";
import TicketDetailModal from "./modal";
import { useTranslation } from "react-i18next";
import Chat from "@shared/components/chat";

const grid = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];

const texts = [
	"ticket_selected:persistence",
	"ticket_selected:objective",
	"ticket_selected:user",
	"ticket_selected:systems",
	"ticket_selected:ttps",
	"ticket_selected:your_actions",
	"ticket_selected:our_actions",
];
const titles = [
	"ticket_selected:used_mechanisms_persistence",
	"ticket_selected:objectives",
	"ticket_selected:compromised_user_accounts",
	"ticket_selected:involved_systems",
	"ticket_selected:techniques_and_procedures",
	"ticket_selected:what_action_should_you_take",
	"ticket_selected:what_action_are_we_taking",
];
const images = [
	"/img/clave 1.png",
	"/img/bomba 1.png",
	"/img/acceso 2.png",
	"/img/el-malware 2.png",
	"/img/seguridad-informatica 2.png",
	"/img/charlar 1.png",
	"/img/logo-sentria.png",
];

export default function TicketDetail({ ticket, onClose }: TicketDetailProps) {
	const { toggle } = useSideModal();
	const { t } = useTranslation();

	const openChat = () => {
		toggle({
			content: () => (
				<Chat tikectId={ticket.id} onActionChat={() => toggle({})} />
			),
		});
	};

	const onClickCircle = (index: number) => {
		const keys = [
			"persistent",
			"objectives",
			"user",
			"system",
			"https",
			"whatWeNeedYouToDo",
			"whatWeAreDoing",
		] as const;

		const image = images[index];
		const title = t(titles[index]);
		const data = ticket?.customFields && ticket.customFields[keys[index]];

		toggle({
			content: () => (
				<TicketDetailModal
					onClose={() => toggle({})}
					title={title}
					content={data}
					image={image}
				/>
			),
		});
	};

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<button
					onClick={onClose}
					className="bg-gray10 rounded-full w-10 h-10 grid place-content-center"
				>
					<Icon icon="Cancel" size="24px" />
				</button>
				<div>
					<h3 className="font-bold">
						{t("ticket_selected:understands_ticket")}
					</h3>
					<h5 className="text-center">ID {ticket.id}</h5>
				</div>
				<button
					onClick={openChat}
					className="bg-gray10 rounded-full w-10 h-10 grid place-content-center"
				>
					<Icon icon="Paper-Plane" size="24px" />
				</button>
			</div>
			<div
				className="flex justify-between items-center text-sm"
				style={{
					gap: "28%",
				}}
			>
				<div className="flex items-center gap-2">
					{ticket.status <= TicketStatus.Open ? (
						<>
							<Icon
								icon="Magnifier"
								size="22px"
								color={colors.green50}
							/>
							<span className="text-green50">
								{t("ticket_selected:on_revision")}
							</span>
						</>
					) : (
						<>
							<Icon
								icon="Approve"
								size="22px"
								color={colors.gray40}
							/>
							<span className="text-gray40">
								{t("ticket_selected:closed")}
							</span>
						</>
					)}
				</div>
				<div className="flex items-center gap-2">
					<Icon icon="headphone" size="22px" color={colors.gray50} />
					<span className="text-gray50">
						{t("ticket_selected:agent")}: {ticket.agent}
					</span>
				</div>
			</div>
			<iframe
				className="w-full rounded p-2 bg-gray-100"
				height={300}
				src="/chart/heatmap?height=300&date={}"
			/>
			<PentaContainerGrid>
				{grid.map((item, index) => (
					<Fragment key={index}>
						{item === 1 ? (
							<CategoryCircle
								onClick={() =>
									onClickCircle(Math.floor(index / 2))
								}
								title={t(texts[Math.floor(index / 2)])}
								icon={images[Math.floor(index / 2)]}
							/>
						) : (
							<div />
						)}
					</Fragment>
				))}
			</PentaContainerGrid>
		</div>
	);
}
interface TicketDetailProps {
	ticket: ITicket | any;
	onClose: () => void;
}
