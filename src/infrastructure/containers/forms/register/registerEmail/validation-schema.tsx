import { emailValidation } from "@shared/utils";
import { object } from "yup";


export default object().shape({
	email: emailValidation(),
	repeatEmail: emailValidation(),
});
