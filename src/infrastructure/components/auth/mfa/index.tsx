import { yupResolver } from "@hookform/resolvers/yup";
import CodeInput from "@shared/components/codeInput";
import { Controller, useForm } from "react-hook-form";
import codeSchema from "./schema";
import { PrimaryButton } from "@shared/components/buttons/styled";
import Qr from "@shared/components/qr";


export interface IMFA {
	code: string;
}

export default function MFAComponent({onSubmit} : MFAComponentProps) {

	const { control, formState: {isValid}, handleSubmit } = useForm<IMFA>({
		resolver: yupResolver(codeSchema),
		defaultValues: {
			code: "",
		},
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Qr/>
			<Controller
				control={control}
				name="code"
				render={({field: {value, onChange}}) => (
					<CodeInput value={value} onChange={onChange}/>
				)}

			/>
			<PrimaryButton disabled={!isValid}>
				Aceptar
			</PrimaryButton>
		</form>
	);
}

interface MFAComponentProps {
	onSubmit: (_data : IMFA) => void;
}
