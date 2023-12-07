import { registerDataForm, validateEmail } from "@infrastructure/store/auth/actions";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useAppDispatch } from "@hooks/index";
import { IFormRegister } from "@infrastructure/store/auth/types";
import { useTranslation } from "react-i18next";


interface IRegisterEmail {
	email: string;
    repeatEmail: string;
};

type TProps = {
	changeStep: (_step:  1 | 2 | 3 | 4 | 5) => void;
};

export default function ValidationsRegister(props:TProps) {
    const { changeStep } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation("register");

    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const validateIfExistEmail = useCallback(async (email: string) => {
        return await dispatch(validateEmail({ email })).unwrap();
    }, [dispatch]);

    const handleSubmitValidateEmail = async(data: IRegisterEmail) => {
        const { email } = data;
		setIsLoading(true);
        try {
            const message = await validateIfExistEmail(email);
            if(message !== "Mail already exist"){
                setEmail((email))
                changeStep(2);
            }else {
                toast.error(t("email_already_registered"));
            }
        } catch (error) {
            toast.error(t("an_error_ocurred"));
        } finally {
            setIsLoading(false)
        }
	};

    const handleSubmitFormUser = async(data: IFormRegister) => {
        try {
            const response = await dispatch(registerDataForm({data, email})).unwrap();
            if(response.data.status === "error"){
                changeStep(3);
            }else{
                changeStep(4);
            }
        } catch (error) {
            toast.error(t("an_error_ocurred"));
        } finally {
            setIsLoading(false)
        }
    }
    return { handleSubmitValidateEmail, handleSubmitFormUser, isLoading }
};