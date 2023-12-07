import React, { forwardRef, useMemo, useState } from "react";
import Icon from "../icons";
import { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";

export default forwardRef<HTMLInputElement, TextInputProps>(
	function TextInput(props, ref) {
		const {
			icon,
			iconright,
			iconColor,
			iconColorRight,
			label,
			name,
			error,
			success,
			type,
			require,
			height,
			istextarea,
			cols = 30,
			rows = 10,
		} = props;
		const theme = useTheme();
		const [inputType, setInputType] = useState(type);
        const { t } = useTranslation("register");

		const toggleShowPassword = () => {
			setInputType((prevType) =>
				prevType === "password" ? "text" : "password"
			);
		};

		const inputProps = useMemo(() => {
			const copy = { ...props };
			const nonInputProps = [
				"icon",
				"iconRight",
				"iconColor",
				"iconColorRight",
				"label",
				"error",
				"success",
			] as Array<keyof typeof props>;

			//If the type is password we use the local state instead
			if (type === "password") {
				nonInputProps.push("type");
			}

			for (const prop of nonInputProps) {
				delete copy[prop];
			}
			return copy;
		}, [props, type]);

		return (
			<div className="my-2">
				{label && (
					<label className="text-sm text-gray50" htmlFor={name}>
						{label}
						{require && <span className="text-orange50">*</span>}
					</label>
				)}
				<div className="relative">
					{istextarea ? (
						<textarea
							maxLength={500}
							cols={cols}
							rows={rows}
							id={name}
							style={{ resize: "none" }}
							className={`
                                border borde-gray-100
                                rounded-lg
                                ${height ? ` ${height}` : "h-10"}
                                focus:outline-gray20
                                p-2
                                w-full
                                ${
                                    error
                                        ? "outline outline-1 outline-red30 focus:outline-red30"
                                        : success
                                        ? "outline outline-1 outline-green-500 focus:outline-green-500"
                                        : ""
                                }
                            `}
							{...inputProps}
						/>
					) : (
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
                                        ? "outline outline-1 outline-red30 focus:outline-red30"
                                        : success
                                        ? "outline outline-1 outline-green-500 focus:outline-green-500"
                                        : ""
                                }
                            `}
							{...inputProps}
						/>
					)}

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
										color={
											iconColorRight ||
											theme.colors.gray30
										}
									/>
								</div>
							)}
						</>
					)}
				</div>
                <span className={`text-sm block ${error ? "text-red30" : success ? "text-green-600" : ""}`}>
                    {t(error)}
                </span>
			</div>
		);
	}
);

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	icon?: string;
	iconColor?: string;
	iconright?: string;
	iconColorRight?: string;
	label?: string;
	name: string;
	error?: any;
	success?: string;
	type?: "text" | "password" | "number";
	require?: boolean;
	height?: string;
	istextarea?: boolean;
	cols?: number;
	rows?: number;
}
