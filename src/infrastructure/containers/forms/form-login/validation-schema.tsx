import { emailValidation, passwordValidation } from "shared";
import { object } from "yup";


export default object().shape({
	email: emailValidation(),
	password: passwordValidation()
});
