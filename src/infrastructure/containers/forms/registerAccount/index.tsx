import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaRegisterAccount } from "./validation-schema";
import TextInput from "@shared/components/textInput";
import {
	PrimaryButton,
} from "@shared/components/buttons/styled";
interface IRegisterAccount {
	name: string;
    lastName: string;
    company: string;
    password: string;
    repeatPassword: string;
}

export default function RegisterAccountForm({ onSubmit }: RegisterAccountFormProps) {
	const { handleSubmit } = useForm<IRegisterAccount>({
		resolver: yupResolver(schemaRegisterAccount),
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput
				name="name"
				label="Nombres"
				placeholder="Nombres"
				icon="account"
			/>
			<TextInput
				name="lastName"
				label="Apellidos"
				placeholder="Apellidos"
				icon="message"
			/>
            <TextInput
				name="company"
				label="Compañia"
				placeholder="Compañia"
				icon="office-building"
			/>
            <TextInput
				icon="lock-key"
				name="password"
				label="Contraseña"
				placeholder="Nueva contraseña"
                iconright="eye"
			/>
            <TextInput
				icon="lock-key"
				name="repeatPassword"
				label="Confirma tu contraseña"
				placeholder="Confirma tu contraseña"
                iconright="eye"
			/>
			<PrimaryButton type="submit" className="w-full">
				Siguiente
			</PrimaryButton>
		</form>
	);
}

interface RegisterAccountFormProps {
	onSubmit: (_data: IRegisterAccount) => void;
}
