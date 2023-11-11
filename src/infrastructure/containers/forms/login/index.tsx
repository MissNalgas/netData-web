import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "./validation-schema";
import TextInput from "@shared/components/textInput";
interface ILogin {
	email: string;
	password: string;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
	const { handleSubmit } = useForm<ILogin>({
		resolver: yupResolver(schema),
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput
				name="email"
				label="Correo corporativo"
				placeholder="correo@example.com"
				icon="account"
			/>
			<div className="flex justify-between my-2">
				<label className="text-sm">Contraseña</label>
				<label className="text-sm text-primary">
					¿Olvidaste tu contraseña?
				</label>
			</div>
			<TextInput
				name="password"
				placeholder="Ingresa tu contraseña"
				icon="account"
				iconright="eye"
			/>
		</form>
	);
}

interface LoginFormProps {
	onSubmit: (_data: ILogin) => void;
}
