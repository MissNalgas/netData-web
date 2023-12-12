import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

// import TextInput from "@shared/components/textInput";
import { PrimaryButton } from "@shared/components/buttons/styled";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function CodeInputForm({
	onSubmit,
	getCode = () => "",
	sendAgainAction,
}: CodeInputFormProps) {
	const { handleSubmit } = useForm({});
	const router = useRouter();
	const { t } = useTranslation("register");
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
			<div className="flex flex-row items-center	justify-center	">
				{codePartOne.map((value, index) => (
					<input
						key={index}
						type="text"
						value={value}
						style={{
							width: "52.88px",
							height: "68px",
							margin: "3%",
							border: "1px solid #999999",
							backgroundColor: "#FBFBFB",
							textAlign: "center",
							borderRadius: "4px",
						}}
						maxLength={1}
						inputMode="numeric"
						onChange={(event) => handleChange(index, event)}
						onKeyDown={(event) => {
							if (
								event.key === "Backspace" &&
								!value &&
								index > 0
							) {
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
							width: "52.88px",
							height: "68px",
							margin: "3%",
							border: "1px solid #999999",
							backgroundColor: "#FBFBFB",
							textAlign: "center",
							borderRadius: "4px",
						}}
						maxLength={1}
						inputMode="numeric"
						onChange={(event) =>
							handleChange(index + codePartOne.length, event)
						}
						onKeyDown={(event) => {
							if (
								event.key === "Backspace" &&
								!value &&
								index > 0
							) {
								inputsRef.current[
									index + codePartOne.length - 1
								]?.focus();
							}
						}}
						ref={(input) => {
							inputsRef.current[index + codePartOne.length] =
								input;
						}}
					/>
				))}
			</div>
			<PrimaryButton
				type="submit"
				className="w-full"
				disabled={codestringjoin.length < 6}
			>
				{t("next")}
			</PrimaryButton>
			<div className="flex justify-center gap-1 my-2">
				<label className="text-sm" onClick={() => router.push("login")}>
					{t("has_code_sent")}
				</label>
				<label
					className="text-sm text-primary"
					onClick={sendAgainAction}
				>
					{t("send_again_code")}
				</label>
			</div>
		</form>
	);
}

interface CodeInputFormProps {
	onSubmit: () => void;
	sendAgainAction?: () => void;
	getCode?: (_code: string) => void;
}
