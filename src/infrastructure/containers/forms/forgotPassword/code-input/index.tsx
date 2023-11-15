import { emailValidation } from "@shared/utils";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

// import TextInput from "@shared/components/textInput";
import { PrimaryButton } from "@shared/components/buttons/styled";
import { ChangeEvent, useEffect, useRef, useState } from "react";

interface ICodeInput {
	email: string;
}

const schema = yup.object({
	email: emailValidation()
});

export default function CodeInputForm({
	onSubmit,
	getCode = () => ""
}: CodeInputFormProps) {
	const { handleSubmit } = useForm<ICodeInput>({
		resolver: yupResolver(schema)
	});
	const router = useRouter();
	const [codePartOne, setCodePartOne] = useState(["", "", ""]);
	const [codePartTwo, setCodePartTwo] = useState(["", "", ""]);

	const inputsRef = useRef<any>([]);

	const codestringjoin = codePartOne.join("") + codePartTwo.join("");

	useEffect(() => {
		if (codestringjoin.length === 6) {
			getCode(codestringjoin);
		} else {
			getCode("");
		}
	}, [codestringjoin, getCode]);

	const handleChange = (
		index: number,
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const value = event.target.value;
		if (/^\d*$/.test(value)) {
			if (index < codePartOne.length) {
				setCodePartOne((prevCode) => {
					const newCode = [...prevCode];
					newCode[index] = value;
					return newCode;
				});

				if (value.length === 1 && index < codePartOne.length - 1) {
					inputsRef.current[index + 1]?.focus();
				} else if (value.length === 0 && index > 0) {
					inputsRef.current[index - 1]?.focus();
				}
			} else {
				const index2 = index - codePartOne.length;
				setCodePartTwo((prevCode) => {
					const newCode = [...prevCode];
					newCode[index2] = value;
					return newCode;
				});

				if (value.length === 1 && index2 < codePartTwo.length - 1) {
					inputsRef.current[index2 + codePartOne.length + 1]?.focus();
				} else if (value.length === 0 && index2 > 0) {
					inputsRef.current[index2 + codePartOne.length - 1]?.focus();
				}
			}
		}
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div
				className="flex flex-row items-center	"
				style={{
					width: "30vw"
				}}
			>
				{codePartOne.map((value, index) => (
					<input
						key={index}
						type="text"
						value={value}
						style={{
							width: "15%",
							margin: "3%",
							alignContent: "center"
						}}
						maxLength={1}
						inputMode="numeric"
						onChange={(event) => handleChange(index, event)}
						onKeyDown={(event) => {
							if (event.key === "Backspace" && !value && index > 0) {
								inputsRef.current[index - 1]?.focus();
							}
						}}
						ref={(input) => {
							inputsRef.current[index] = input;
						}}
					/>
				))}
				<div>-</div>

				{codePartTwo.map((value, index) => (
					<input
						key={index}
						type="text"
						value={value}
						style={{
							width: "10%",

							margin: "3%",
							alignContent: "center"
						}}
						maxLength={1}
						inputMode="numeric"
						onChange={(event) =>
							handleChange(index + codePartOne.length, event)
						}
						onKeyDown={(event) => {
							if (event.key === "Backspace" && !value && index > 0) {
								inputsRef.current[index + codePartOne.length - 1]?.focus();
							}
						}}
						ref={(input) => {
							inputsRef.current[index + codePartOne.length] = input;
						}}
					/>
				))}
			</div>
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
	getCode?: (_code: string) => void;
}
