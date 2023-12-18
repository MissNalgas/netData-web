import { JSX } from "react";
import TextInput from "../textInput";
import { CaptionOne, Body } from "../labels/styled";
import Icon from "../icons";

export default function Chat(): JSX.Element {
	return (
		<div>
			<div className="w-full flex justify-between py-3">
				<Icon icon="Cancel" size={20} />
				<Body $weight={700}>ID 1234456</Body>
			</div>
			<div className="w-64 text-right">
				<CaptionOne>
					¿Tienes dudas? manda una comentario Xelco
				</CaptionOne>
			</div>

			<TextInput
				placeholder="Escribe tu mensaje"
				name={""}
				iconright="Arrow-Button"
				className="
								disabled:text-gray-400
								border borde-gray-100
								rounded-lg
								h-10
								focus:outline-gray20
								z-10
								px-2
								w-full
								mt-1
								pr-12
						"
			/>
		</div>
	);
}
