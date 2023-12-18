import { JSX } from "react";
import TextInput from "../textInput";
import { CaptionOne, Body } from "../labels/styled";
import Icon from "../icons";
import { ContentChat } from "./styled";

interface ChatProps {
	onActionChat: () => void;
}

export default function Chat({ onActionChat }: ChatProps): JSX.Element {
	return (
		<div className="p-6">
			<div className="w-full flex justify-between py-3">
				<button
					onClick={() => onActionChat()}
					className="bg-gray10 rounded-full w-10 h-10 grid place-content-center"
				>
					<Icon icon="Cancel" size="24px" />
				</button>
				<Body $weight={700}>ID 1234456</Body>
			</div>
			<div className="w-full text-right flex justify-end">
				<div className="w-80">
					<CaptionOne>
						¿Tienes dudas? manda una comentario Xelco
					</CaptionOne>
				</div>
			</div>
			<ContentChat>
				<div className="flex justify-end  py-4">
					<div className="w-2/3 h-20 flex justify-end py-2 bg-shadow20 rounded-2xl ">
						Contents
					</div>
				</div>

				<div>
					<TextInput
						placeholder="Escribe tu mensaje"
						name={""}
						iconright="Paper-Plane"
						className="
				bg-shadow20
								disabled:text-gray-400
								rounded-lg
								h-12
								focus:outline-gray20
								z-10
								px-2
								w-full
								mt-1
								pr-12
						"
					/>
				</div>
			</ContentChat>
		</div>
	);
}
