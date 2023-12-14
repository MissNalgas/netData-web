import { JSX } from "react";
import TextInput from "../textInput";
import { TitleTree } from "../labels/styled";
import Icon from "../icons";

export default function Chat(): JSX.Element {
	return (
		<div>
			<div>
				<Icon icon="user" size={20} />
				<TitleTree>ID 1234456</TitleTree>
			</div>
			¿Tienes dudas? manda una comentario Xelco
			<TextInput placeholder="Escribe tu mensaje" name={""} />
		</div>
	);
}
