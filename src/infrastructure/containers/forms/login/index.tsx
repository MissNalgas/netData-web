import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "./validation-schema";

interface ILogin {
	email: string;
	password: string;
}

export default function LoginForm({onSubmit} : LoginFormProps) {

	const { handleSubmit } = useForm<ILogin>({
		resolver: yupResolver(schema),
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)}>

		</form>
	);
}

interface LoginFormProps {
	onSubmit: (_data : ILogin) => void;
}
