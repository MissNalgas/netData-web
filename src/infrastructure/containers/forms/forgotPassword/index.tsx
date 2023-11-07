import { emailValidation } from "@shared/utils";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IForgotPassword {
	email: string;
}

const schema = yup.object({
	email: emailValidation(),
});

export default function ForgotPasswordForm({onSubmit} : ForgotPasswordFormProps) {

	const {handleSubmit} = useForm<IForgotPassword>({
		resolver: yupResolver(schema),
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
		</form>
	);
}

interface ForgotPasswordFormProps {
	onSubmit: (_data : IForgotPassword) => void;
}
