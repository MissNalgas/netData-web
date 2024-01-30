import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { PrimaryButton } from "@shared/components/buttons/styled";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Overline } from "@shared/components/labels/styled";
import theme from "@theme/index";
import { Input } from "./styled";
import Icon from "@shared/components/icons";

export default function CodeInputForm({
	onSubmit,
	getCode = () => "",
	sendAgainAction,
	handleClickArrow,
}: CodeInputFormProps) {
	const { handleSubmit } = useForm({});
	const router = useRouter();
	const { t } = useTranslation();
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
					<Input
						key={index}
						type="text"
						value={value}
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
					<Input
						key={index}
						type="text"
						value={value}
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
				{t("register:next")}
			</PrimaryButton>
			<div className="cel:text-center my-2 cel:text-wrap gap-1">
				<Overline
					className="text-sm"
					onClick={() => router.push("login")}
				>
					{t("register:has_code_sent")}
				</Overline>
				<Overline
					onClick={sendAgainAction}
					$color={theme.colors.orange}
					className="cel:block tablet:ml-2 tablet:inline"
				>
					{t("register:send_again_code")}
				</Overline>
			</div>
			<div
				className="flex items-center justify-center cel:text-center my-2 cel:text-wrap gap-1 py-5"
				aria-hidden="true"
				onClick={handleClickArrow}
			>
				<Icon icon="left-arrow" size="32" />
				<Overline
					$color={theme.colors.gray50}
					$weight={600}
					className="cel:block tablet:ml-2 tablet:inline"
				>
					{t("recover_password:go_back")}
				</Overline>
			</div>
		</form>
	);
}

interface CodeInputFormProps {
	onSubmit: () => void;
	sendAgainAction?: () => void;
	getCode?: (_code: string) => void;
	handleClickArrow?: () => void;
}
