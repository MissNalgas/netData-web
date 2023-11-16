import { valdiationPassword } from "@shared/utils";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextInput from "@shared/components/textInput";
import { PrimaryButton } from "@shared/components/buttons/styled";
import Icon from "@shared/components/icons";
import { useTheme } from "styled-components";
interface IForgotPassword {
	password: string;
	repeatPassword: string;
}

export default function ChangePasswordForm({
	onSubmit
}: ChangePasswordFormProps) {
	const {
		handleSubmit,
		formState: { isValid }
	} = useForm<IForgotPassword>({
		resolver: yupResolver(valdiationPassword)
	});
	const theme = useTheme();
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
				<div className="flex flex-col justify-between py-3">
					<label className="text-sm flex flex-row items-center gap-2">
						Asegúrate que tu contraseña contenga:
					</label>
					<div className="px-3">
						<label className="text-sm flex flex-row items-center gap-2">
							<Icon
								icon="ellipse"
								size={10}
								color={!isError ? theme.colors.yellow : theme.colors.red}
							/>
							Mínimo 8 carácteres
						</label>
						<label className="text-sm flex flex-row items-center gap-2">
							<Icon
								icon="ellipse"
								size={10}
								color={!isError ? theme.colors.yellow : theme.colors.red}
							/>
							Mínimo una mayúscula y minúscula
						</label>
						<label className="text-sm flex flex-row items-center gap-2">
							<Icon
								icon="ellipse"
								size={10}
								color={!isError ? theme.colors.yellow : theme.colors.red}
							/>
							Mínimo un carácter especial (!”?@#).
						</label>
						<label className="text-sm flex flex-row items-center gap-2">
							<Icon
								icon="ellipse"
								size={10}
								color={!isError ? theme.colors.yellow : theme.colors.red}
							/>
							Mínimo un número
						</label>
					</div>
				</div>
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
