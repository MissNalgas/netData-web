import React from "react";
import Icon from "../icons";
import { useTheme } from "styled-components";

export default function TextInput(props: TextInputProps) {
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
		onIconClick,
	} = props;
	const theme = useTheme();
	const helper = error || success || helperText;

	return (
		<div>
			{label && (
				<label className="text-sm" htmlFor={name}>
					{label}
				</label>
			)}
			<div className="relative">
				<input
					id={name}
					className={`
						disabled:text-gray-400
						border borde-gray-100
						rounded-lg
						h-10
						focus:outline-gray-500
						z-10
						px-2
						w-full
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
					{...props}
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
				{iconright && (
					<button
						onClick={onIconClick}
						className="h-full absolute right-0 top-0 w-10 grid place-content-center"
					>
						<Icon
							icon={iconright}
							size={20}
							color={iconColorRight || theme.colors.gray10}
						/>
					</button>
				)}
			</div>
			<span
				className={`
					text-sm
					block
					${error ? "text-red-600" : success ? "text-green-600" : ""}
					${helper ? "opacity-100" : "opacity-0"}
				`}
			>
				{helper}&nbsp;
			</span>
		</div>
	);
}

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	icon?: string;
	iconColor?: string;
	iconright?: string;
	iconColorRight?: string;
	label?: string;
	name: string;
	helperText?: string;
	error?: string;
	success?: string;
	onIconClick?: React.MouseEventHandler<HTMLButtonElement>;
}
