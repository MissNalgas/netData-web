import * as yup from "yup";

const charactersOnlyEmail = /^[a-zA-ZÀ-ÿ-.-\u00f1\u00d1 @#$%^&.!¡*+=]+$/;
const numbersOnly = /^[0-9]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$/%^&*.])/;

export const textValidation = () => yup.string().max(100);
export const emailValidation = () => textValidation().email().required();
export const passwordValidation = () => textValidation().required().min(6).matches(passwordRegex);

export { charactersOnlyEmail, numbersOnly };
