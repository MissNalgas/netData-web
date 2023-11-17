import { passwordValidation } from "@shared/utils";
import * as yup from "yup";

export const schemaRegisterAccount = yup.object().shape({
	name: yup.string().required(),
	lastName: yup.string().required(),
	company: yup.string().required(),
	password: passwordValidation().required(),
	repeatPassword: passwordValidation().required(),
});
