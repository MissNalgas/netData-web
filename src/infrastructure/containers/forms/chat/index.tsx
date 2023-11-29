import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import schema from "./validation-schema";
import TextInput from "@shared/components/textInput";
import { PrimaryButton } from "@shared/components/buttons/styled";

export interface ILogin {
	affair: string;
	message: string;
}

export default function ChatForm({ onSubmit, disableSubmit }: ChatFormProps) {
	const { handleSubmit, register } = useForm<ILogin>({
		resolver: yupResolver(schema),
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput
				label="Asunto"
				placeholder="Escribe aquí"
				{...register("affair")}
			/>
			<TextInput
				istextarea={true}
				height="h-40"
				label="Tu mensaje"
				placeholder="Escribe aquí"
				{...register("message")}
			/>
			<PrimaryButton
				disabled={disableSubmit}
				type="submit"
				className="w-full"
			>
				Enviar
			</PrimaryButton>
		</form>
	);
}

interface ChatFormProps {
	onSubmit: (_data: ILogin) => void;
	disableSubmit?: boolean;
}
