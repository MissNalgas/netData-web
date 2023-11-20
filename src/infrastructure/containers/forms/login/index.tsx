import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import schema from "./validation-schema";
import TextInput from "@shared/components/textInput";
import {
	PrimaryButton,
	SecondaryButton,
} from "@shared/components/buttons/styled";
import { useSideModal } from "@shared/components/sideModal";
interface ILogin {
	email: string;
	password: string;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
	const { handleSubmit } = useForm<ILogin>({
		resolver: yupResolver(schema),
	});
	const router = useRouter();
	const sideModal = useSideModal();

	const show = () => {
		sideModal.toggle({
			content: () => (
				<div>
					<button onClick={() => sideModal.toggle({})}>close</button>
					<h1 className="text-xl font-bold text-center">This is an example</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ea.
					</p>

				</div>
			),
		});
	}

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
				<label
					className="text-sm text-primary"
					onClick={() => router.push("recover-password")}
				>
					¿Olvidaste tu contraseña?
				</label>
			</div>
			<TextInput
				name="password"
				placeholder="Ingresa tu contraseña"
				icon="account"
				iconright="eye"
				type="password"
			/>
			<PrimaryButton type="submit" className="w-full">
				Iniciar sesión
			</PrimaryButton>
			<SecondaryButton onClick={show} type="button" className="w-full">
				¡Quiero registrarme!
			</SecondaryButton>
		</form>
	);
}

interface LoginFormProps {
	onSubmit: (_data: ILogin) => void;
}
