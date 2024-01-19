import Image from "next/image";

export default function CategoryCircle({
	onClick,
	title,
	icon,
	bgColor = "#FDE2B9",
}: CategoryCircleProps) {
	return (
		<button
			onClick={onClick}
			style={{
				backgroundColor: bgColor,
			}}
			className="flex flex-col gap-2 justify-center items-center h-[100px] w-[100px] rounded-[50%]"
		>
			<h5 className="text-sm text-center">{title}</h5>
			<Image src={icon} alt="key-icon" width={33} height={33} />
		</button>
	);
}

interface CategoryCircleProps {
	onClick?: () => void;
	title: string;
	icon: string;
	bgColor?: string;
}
