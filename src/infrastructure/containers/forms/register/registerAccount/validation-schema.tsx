import * as yup from "yup";

export const schemaRegisterAccount = yup.object().shape({
	name: yup.string().required("field_required"),
	lastName: yup.string().required("field_required"),
	company: yup.string().required("field_required"),
	password: yup
		.string()
		.min(8, "min_8_charcters")
		.matches(/[A-Z]/, "min_uppercase")
		.matches(/[a-z]/, "min_lowercase")
		.matches(/[!?"@#]/, "min_especial_character")
		.matches(/\D/, "min_number")
		.required("field_required"),
	repeatPassword: yup
		.string()
		.min(8, "min_8_charcters")
		.matches(/[A-Z]/, "min_uppercase")
		.matches(/[a-z]/, "min_lowercase")
		.matches(/[!?"@#]/, "min_especial_character")
		.matches(/\D/, "min_number")
		.oneOf([yup.ref("password")], "Contraseña no es la misma")
		.required("field_required"),
});
