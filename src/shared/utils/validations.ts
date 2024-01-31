import * as yup from "yup";

const charactersOnlyEmail = /^[a-zA-ZÀ-ÿ.\u00f1\u00d1@#$%^&.!¡*+=-]+$/;
const numbersOnly = /^\D+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$/%^&*.])/;

type TextValidationResult<T extends boolean> = T extends true
	? yup.StringSchema<string>
	: T extends false
	? yup.StringSchema<string | undefined>
	: never;

export const textValidation = <T extends boolean>(
	required: T
): TextValidationResult<T> => {
	let schema = yup.string().max(100);
	if (!required) {
		schema = schema.required();
	}
	return schema as TextValidationResult<T>;
};

export const emailValidation = () => textValidation(true).email().required();
export const passwordValidation = () =>
	textValidation(true).min(6).matches(passwordRegex);
const validationPassword = yup.object().shape({
	password: yup
		.string()
		.min(8, "min_8_charcters")
		.matches(/[A-Z]/, "min_uppercase")
		.matches(/[a-z]/, "min_lowercase")
		.matches(/[!?"@#]/, "min_especial_character")
		.matches(/\D/, "min_number"),
	repeatPassword: yup
		.string()
		.min(8, "min_8_charcters")
		.matches(/[A-Z]/, "min_uppercase")
		.matches(/[a-z]/, "min_lowercase")
		.matches(/[!?"@#]/, "min_especial_character")
		.matches(/\D/, "min_number")
		.oneOf([yup.ref("password")], "Contraseña no es la misma"),
});

const affair = yup.string().max(100).required();
const message = yup.string().max(500).required();
const reply = yup.string().max(500).required();

export {
	charactersOnlyEmail,
	numbersOnly,
	validationPassword,
	affair,
	message,
	reply,
};
