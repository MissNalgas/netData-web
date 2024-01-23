import Image from "next/image";

export default function CategoryCircle({
	onClick,
	title,
	icon,
	bgColor = "#FDE2B9",
}: CategoryCircleProps) {
	return (
		<div>
			<h5 className="text-sm text-center">{title}</h5>
			<button
				onClick={onClick}
				style={{
					backgroundColor: bgColor,
				}}
				className="flex flex-col gap-2 justify-center items-center  h-[70px] w-[70px] rounded-[50%]"
			>
				<Image src={icon} alt="key-icon" width={33} height={33} />
			</button>
		</div>
	);
}

interface CategoryCircleProps {
	onClick?: () => void;
	title: string;
	icon: string;
	bgColor?: string;
}
