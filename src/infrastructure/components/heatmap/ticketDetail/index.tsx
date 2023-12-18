import { ITicket } from "@domain/models";
import Icon from "@shared/components/icons";
import colors from "@theme/colors";
import { PentaContainerGrid } from "./styled";
import CategoryCircle from "./categoryCircle";
import { Fragment } from "react";
import { useSideModal } from "@shared/components/sideModal";
import Chat from "@shared/components/chat";

const grid = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];

export default function TicketDetail({ ticket, onClose }: TicketDetailProps) {
	const { toggle } = useSideModal();

	const openChat = () => {
		toggle({
			content: () => <Chat onActionChat={() => toggle({})} />,
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
					<h3 className="font-bold">Entiende tu ticket</h3>
					<h5 className="text-center">ID {ticket.id}</h5>
				</div>
				<button
					onClick={openChat}
					className="bg-gray10 rounded-full w-10 h-10 grid place-content-center"
				>
					<Icon icon="Paper-Plane" size="24px" />
				</button>
			</div>
			<div className="flex justify-between items-center text-sm">
				<div className="flex items-center gap-2">
					<Icon icon="Magnifier" size="22px" color={colors.green50} />
					<span className="text-green50">En revisión</span>
				</div>
				<div className="flex items-center gap-2">
					<Icon icon="headphone" size="22px" color={colors.gray50} />
					<span className="text-gray50">Agente: Francis Parra</span>
				</div>
			</div>
			<iframe
				className="w-full rounded p-2 bg-gray-100"
				height={300}
				src="/chart/heatmap?height=300"
			/>
			<PentaContainerGrid>
				{grid.map((item, index) => (
					<Fragment key={index}>
						{item === 1 ? (
							<CategoryCircle
								onClick={() => {
									toggle({
										content: () => (
											<div>content {index}</div>
										),
									});
								}}
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
	ticket: ITicket;
	onClose: () => void;
}
