import { valdiationPassword } from "@shared/utils";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextInput from "@shared/components/textInput";
import { PrimaryButton } from "@shared/components/buttons/styled";
import RequirePassword from "@shared/components/requirePassword";
interface IForgotPassword {
	password: string;
	repeatPassword: string;
}

export default function ChangePasswordForm({
	onSubmit,
}: ChangePasswordFormProps) {
	const {
		handleSubmit,
		formState: { isValid },
	} = useForm<IForgotPassword>({
		resolver: yupResolver(valdiationPassword),
	});
	const isError = false;
	const showValidationInputs = !isValid;

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput
				name="password"
				label="Contraseña"
				placeholder="Nueva contraseña"
				icon="lock-key"
				iconright="eye"
				type="password"
			/>
			<TextInput
				name="repeatPassword"
				label="Confirma tu contraseña"
				placeholder="Confirma tu contraseña"
				icon="lock-key"
				iconright="eye"
				type="password"
			/>
			{showValidationInputs && (
				<RequirePassword isError={isError} />
			)}

			<PrimaryButton type="submit" className="w-full my-2">
				Reestablecer contraseña
			</PrimaryButton>
		</form>
	);
}

interface ChangePasswordFormProps {
	onSubmit: (_data: IForgotPassword) => void;
}
