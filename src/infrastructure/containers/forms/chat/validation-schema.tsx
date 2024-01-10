import { reply } from "@shared/utils";
import { object } from "yup";

export default object().shape({
	reply: reply,
});
