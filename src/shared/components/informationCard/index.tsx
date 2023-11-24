import theme from "@theme/index";
import Icon from "../icons";
import { CaptionTwo } from "../labels/styled";
import Image, { StaticImageData } from "next/image";

interface InformationCardProps {
    imageCenter?: StaticImageData;
    imageLeft?: StaticImageData;
    textLeft?: string;
    textCenter?: string;
    textRight?: string;
}

export default function InformationCard(props: InformationCardProps){
    const { imageCenter, imageLeft, textRight, textLeft, textCenter } = props;

    return(
        <div className="flex justify-between border border-gray20 rounded-md items-center p-2 my-2 hover:border-orange">
            <div className="flex items-center">
                {imageLeft && (
                    <Image src={imageLeft} alt="referencia" width={22} className="mr-2"/>
                )}
                <CaptionTwo>{textLeft}</CaptionTwo>
            </div>
            <div className="flex items-center">
                {imageCenter && (
                    <Image src={imageCenter} alt="referencia" width={22} className="mr-2"/>
                )}
                <CaptionTwo>{textCenter}</CaptionTwo>
            </div>
            <div className="flex items-center">
                <CaptionTwo $weight={theme.fontWeight.semiBold}>{textRight}</CaptionTwo>
                <Icon icon="right-arrow" size={22}/>
            </div>
        </div>
    )
}