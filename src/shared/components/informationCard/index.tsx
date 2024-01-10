import theme from "@theme/index";
import Icon from "../icons";
import { Overline } from "../labels/styled";
import Image, { StaticImageData } from "next/image";

interface InformationCardProps {
	imageCenter?: StaticImageData;
	imageLeft?: StaticImageData;
	textLeft?: string;
	textCenter?: string;
	textRight?: string;
	classContainer?: string | undefined;
	showIconLeft?: boolean;
    onClick?: () => void;
}

export default function InformationCard(props: InformationCardProps) {
	const {
		imageCenter,
		imageLeft,
		textRight,
		textLeft,
		textCenter,
		classContainer,
		showIconLeft = true,
        onClick,
	} = props;

	return (
		<div
            onClick={onClick}
			className={`flex justify-between border border-gray20 rounded-md items-center p-2 my-2 hover:border-orange ${classContainer}`}
		>
			<div className="flex items-center">
				{imageLeft && (
					<Image
						src={imageLeft}
						alt="referencia"
						width={22}
						className="mr-2"
					/>
				)}
				<Overline>{textLeft}</Overline>
			</div>
			<div className="flex items-center">
				{imageCenter && (
					<Image
						src={imageCenter}
						alt="referencia"
						width={22}
						className="mr-2"
					/>
				)}
				<Overline>{textCenter}</Overline>
			</div>

			<div className="flex items-center">
				<Overline $weight={theme.fontWeight.semiBold}>
					{textRight}
				</Overline>
				{showIconLeft && <Icon icon="right-arrow" size={22} />}
			</div>
		</div>
	);
}
