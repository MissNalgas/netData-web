import { passwordValidation, textValidation } from "@shared/utils";
import * as yup from "yup";

export default yup.object({
	firstname: textValidation(true),
	lastname: textValidation(true),
	company: textValidation(true),
	password: passwordValidation(),
	repeatPassword: passwordValidation().oneOf([yup.ref("password")])
});
