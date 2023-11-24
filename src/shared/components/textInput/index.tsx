import React, { forwardRef, useMemo, useState } from "react";
import Icon from "../icons";
import { useTheme } from "styled-components";

export default forwardRef<HTMLInputElement, TextInputProps>(function TextInput(props, ref) {
	const {
		icon,
		iconright,
		iconColor,
		iconColorRight,
		label,
		name,
		helperText,
		error,
		success,
		type,
		require,
		} = props;
	const theme = useTheme();
	const [inputType, setInputType] = useState(type);

	const toggleShowPassword = () => {
		setInputType((prevType) => (prevType === "password" ? "text" : "password"));
	};

	const inputProps = useMemo(() => {
		const copy = {...props};
		const nonInputProps = ["icon", "iconRight", "iconColor", "iconColorRight", "label", "helperText", "error", "success"] as Array<keyof typeof props>;

		//If the type is password we use the state instead
		if (type === "password") {
			nonInputProps.push("type");
		}

		for (const prop of nonInputProps) {
			delete copy[prop];
		}
		return copy;
	}, [props, type]);

	return (
		<div>
			{label && (
				<label className="text-sm text-gray50" htmlFor={name}>
					{label}
					{require && <span className="text-orange50">*</span>}
				</label>
			)}
			<div className="relative">
				<input
					ref={ref}
					type={inputType}
					id={name}
					className={`
						disabled:text-gray-400
						border borde-gray-100
						rounded-lg
						h-10
						focus:outline-gray20
						z-10
						px-2
						w-full
						mt-1
						${icon ? "pl-12" : ""}
						${iconright ? "pr-12" : ""}
						${
						error
						? "outline outline-1 outline-red-500 focus:outline-red-500"
						: success
						? "outline outline-1 outline-green-500 focus:outline-green-500"
						: ""
						}
					`}
					{...inputProps}
				/>
				{icon && (
					<div className="h-full absolute left-0 top-0 w-10 grid place-content-center">
						<Icon
							icon={icon}
							size={20}
							color={iconColor || theme.colors.orange50}
						/>
					</div>
				)}
				{(iconright || error) && (
					<>
						{error && (
							<div className="h-full absolute right-6 top-0 w-10 grid place-content-center">
								<Icon
									icon="Exclamation-Mark"
									size={20}
									color={theme.colors.red}
								/>
							</div>
						)}
						{iconright && (
							<div
								onClick={toggleShowPassword}
								className="h-full absolute right-0 top-0 w-10 grid place-content-center cursor-pointer"
								>
								<Icon
									icon={iconright}
									size={20}
									color={iconColorRight || theme.colors.gray30}
								/>
							</div>
						)}
					</>
				)}
			</div>
			<span
				className={`
					text-sm
					block
					${error ? "text-red-600" : success ? "text-green-600" : ""}
					${helperText ? "opacity-100" : "opacity-0"}
				`}
			>
				{helperText}&nbsp;
			</span>
		</div>
	);
});

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	icon?: string;
	iconColor?: string;
	iconright?: string;
	iconColorRight?: string;
	label?: string;
	name: string;
	helperText?: string;
	error?: any;
	success?: string;
	type?: "text" | "password" | "number";
	require?: boolean;
}
