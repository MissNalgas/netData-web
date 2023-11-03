import * as yup from "yup";

const charactersOnlyEmail = /^[a-zA-ZÀ-ÿ-.-\u00f1\u00d1 @#$%^&.!¡*+=]+$/;
const numbersOnly = /^[0-9]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$/%^&*.])/;

type TextValidationResult<T extends boolean> =
	T extends true ? yup.StringSchema<string> :
	T extends false ? yup.StringSchema<string | undefined> :
	never;

export const textValidation = <T extends boolean>(required: T) : TextValidationResult<T> => {
	let schema = yup.string().max(100);
	if (!required) {
		schema = schema.required();
	}
	return schema as TextValidationResult<T>;
}

export const emailValidation = () => textValidation(true).email();
export const passwordValidation = () => textValidation(true).min(6).matches(passwordRegex);

export { charactersOnlyEmail, numbersOnly };
