import Image from "next/image";

export default function CategoryCircle({onClick, title, icon} : CategoryCircleProps) {

	return (
		<button onClick={onClick} className="flex flex-col gap-2 justify-center items-center">
			<h5 className="text-sm text-center">{title}</h5>
			<Image src={icon} alt="key-icon" width={33} height={33}/>
		</button>
	);
};



interface CategoryCircleProps {
	onClick?: () => void;
	title: string;
	icon: string;
}
