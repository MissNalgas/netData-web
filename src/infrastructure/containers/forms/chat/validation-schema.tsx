import { affair, message } from "@shared/utils";
import { object } from "yup";

export default object().shape({
	affair: affair,
	message: message,
});
