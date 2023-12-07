import { object } from "yup";
import * as yup from "yup";

export default object().shape({
    email: yup.string().email("invalid_email").required("field_required").trim(),
	repeatEmail: yup.string().email("invalid_email").required("field_required").oneOf([yup.ref("email")], "no_match_email").trim(),
});
