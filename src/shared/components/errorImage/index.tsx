import Image, { StaticImageData } from "next/image";
import { PrimaryButton } from "../buttons/styled";
import { TextInfoCustom } from "@infrastructure/components/auth/recover-password/styled";

interface ErrorImageProps {
    image: StaticImageData;
    textButton: string;
    onClickButton: () => void;
    description?: string;
}

export default function ErrorImage(props:ErrorImageProps){
    const {image, textButton, onClickButton, description} = props;

    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <Image
                src={image}
                width={272}
                height={159}
                alt="Logo"
                priority
            />
            {description && (
                <TextInfoCustom className="text-sm block text-center">
                    {description}
                </TextInfoCustom>
            )}

            <PrimaryButton onClick={onClickButton}>
                {textButton}
            </PrimaryButton>
        </div>
    )
}