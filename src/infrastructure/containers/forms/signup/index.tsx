import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "./validations";
import { ISignUpForm } from "./models";

export default function SignUpForm({onSubmit} : SignUpFormProps) {

	const { handleSubmit } = useForm<ISignUpForm>({
		resolver: yupResolver(schema),
	});



	return (
		<form onSubmit={handleSubmit(onSubmit)}>

		</form>
	);
}

interface SignUpFormProps {
	onSubmit: (_data: ISignUpForm) => void;
}
