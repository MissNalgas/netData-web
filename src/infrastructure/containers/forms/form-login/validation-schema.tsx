import { string, object } from "yup";

const charactersOnly = /^[a-zA-ZÀ-ÿ-.-\u00f1\u00d1 @#$%^&.!¡*+=]+$/;
const regexCharacter = /^(?=(?:.*[@#$%^&.!¡*+=]){1})/;
const uniquemayus = /^[^A-Z]*[A-Z][^A-Z]*$/;

export default object().shape({
	user: string()
		.email("No es un correo válido")
		.matches(charactersOnly, "Este campo es requerido")
		.required("Este campo es requerido"),
	password: string()
		.min(8, "La contraseña es muy corta")
		.matches(uniquemayus, "Este debe tener una mayúscula")
		.matches(regexCharacter, "Este debe tener un símbolo")
		.required("Este campo es requerido")
});
