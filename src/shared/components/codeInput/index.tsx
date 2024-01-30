import { ChangeEvent, Fragment, useRef, useState } from "react";

export default function CodeInput({
	value,
	onChange,
	maxLength = 6,
	emptyFill = "-",
}: CodeInputProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isFocus, setIsFocus] = useState(false);

	const handleClick = () => {
		inputRef.current?.focus();
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		if (value.length > maxLength) return;

		onChange(value);
	};

	return (
		<div>
			<div
				onClick={handleClick}
				className="flex gap-2"
				aria-hidden="true"
			>
				{Array(maxLength)
					.fill(emptyFill)
					.map((char, index) => (
						<Fragment key={index}>
							<div
								className={`${
									isFocus && index !== value.length
										? "border-gray-300"
										: ""
								} ${
									isFocus && index === value.length
										? "border-2 border-primary"
										: "border"
								} grid place-content-center w-14 h-20 rounded`}
							>
								<span
									className={`${
										value.charAt(index)
											? "font-bold text-2xl"
											: "text-gray-400"
									}`}
								>
									{value.charAt(index) || char}
								</span>
							</div>
							{(index + 1) % 3 === 0 &&
								index !== maxLength - 1 && (
									<div className="grid place-content-center text-2xl">
										-
									</div>
								)}
						</Fragment>
					))}
			</div>
			<input
				ref={inputRef}
				className="absolute opacity-0 pointer-events-none"
				type="text"
				value={value}
				onChange={handleChange}
				onFocus={() => setIsFocus(true)}
				onBlur={() => setIsFocus(false)}
			/>
		</div>
	);
}

interface CodeInputProps {
	value: string;
	onChange: (_newValue: string) => void;
	maxLength?: number;
	emptyFill?: string;
}
