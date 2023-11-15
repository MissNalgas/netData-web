import { emailValidation } from "@shared/utils";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

import TextInput from "@shared/components/textInput";
import { PrimaryButton } from "@shared/components/buttons/styled";

interface ICodeInput {
	email: string;
}

const schema = yup.object({
	email: emailValidation(),
});

export default function CodeInputForm({ onSubmit }: CodeInputFormProps) {
	const { handleSubmit } = useForm<ICodeInput>({
		resolver: yupResolver(schema),
	});
	const router = useRouter();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput
				name="email"
				label="Correo corporativo"
				placeholder="correo@example.com"
				icon="account"
			/>
			<PrimaryButton type="submit" className="w-full">
				codigo
			</PrimaryButton>
			<div className="flex justify-between my-2">
				<label
					className="text-sm text-primary"
					onClick={() => router.push("login")}
				>
					Volver al inicio de sesión
				</label>
			</div>
		</form>
	);
}

interface CodeInputFormProps {
	onSubmit: (_data: ICodeInput) => void;
}
