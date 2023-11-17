import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaRegisterAccount } from "./validation-schema";
import TextInput from "@shared/components/textInput";
import {
	PrimaryButton,
} from "@shared/components/buttons/styled";
import RequirePassword from "@shared/components/requirePassword";
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
    const isError = false;

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput
				name="name"
				label="Nombres"
				placeholder="Nombres"
				icon="account"
                require={true}
			/>
			<TextInput
				name="lastName"
				label="Apellidos"
				placeholder="Apellidos"
				icon="message"
                require={true}
			/>
            <TextInput
				name="company"
				label="Compañia"
				placeholder="Compañia"
				icon="office-building"
                require={true}
			/>
            <TextInput
				label="Contraseña"
				name="password"
				icon="lock-key"
                type="password"
				placeholder="Nueva contraseña"
                iconright="eye"
                require={true}
			/>
            <TextInput
				label="Confirma tu contraseña"
				name="repeatPassword"
				icon="lock-key"
                type="password"
				placeholder="Confirma tu contraseña"
                iconright="eye"
                require={true}
			/>
            <RequirePassword isError={isError}/>
			<PrimaryButton type="submit" className="w-full">
				Siguiente
			</PrimaryButton>
		</form>
	);
}

interface RegisterAccountFormProps {
	onSubmit: (_data: IRegisterAccount) => void;
}
