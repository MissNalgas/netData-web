import * as yup from "yup";

const codeSchema = yup.object({
	code: yup.string().min(6).required(),
});

export default codeSchema;
