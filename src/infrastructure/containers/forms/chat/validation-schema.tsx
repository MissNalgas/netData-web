import { emailValidation, passwordValidation } from "@shared/utils";
import { object } from "yup";

export default object().shape({
	affair: emailValidation(),
	message: passwordValidation(),
});
