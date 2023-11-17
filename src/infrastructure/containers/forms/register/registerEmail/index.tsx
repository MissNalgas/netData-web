import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "./validation-schema";
import TextInput from "@shared/components/textInput";
import {
	PrimaryButton,
} from "@shared/components/buttons/styled";
interface IRegisterEmail {
	email: string;
    repeatEmail: string;
}

export default function RegisterEmailForm({ onSubmit }: RegisterEmailFormProps) {
	const { handleSubmit } = useForm<IRegisterEmail>({
		resolver: yupResolver(schema),
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput
				name="email"
				label="Correo corporativo"
				placeholder="correo@example.com"
				icon="message"
                require={true}
			/>
			<TextInput
				name="repeatEmail"
				label="Confirma tu correo corporativo"
				placeholder="correo@example.com"
				icon="message"
                require={true}
			/>
			<PrimaryButton type="submit" className="w-full" >
				Siguiente
			</PrimaryButton>
		</form>
	);
}

interface RegisterEmailFormProps {
	onSubmit: (_data: IRegisterEmail) => void;
}
