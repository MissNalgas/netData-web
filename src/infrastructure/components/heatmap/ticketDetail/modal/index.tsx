import CloseButton from "@shared/components/closeButton";
import Image from "next/image";

export default function TicketDetailModal({
	title,
	image,
	content,
	onClose,
}: TicketDetailModalProps) {
	return (
		<div className="flex flex-col gap-4 p-4 relative">
			<CloseButton onClick={onClose} />
			<div className="self-center bg-gray-100 w-16 h-16 rounded-full grid place-content-center">
				<Image alt={title} width={33} height={33} src={image} />
			</div>
			<h2 className="font-bold text-center">{title}</h2>
			<p className="text-justify">{content}</p>
		</div>
	);
}
interface TicketDetailModalProps {
	title: string;
	image: string;
	content: string;
	onClose?: () => void;
}
