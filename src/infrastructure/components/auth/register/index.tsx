import React, { FC, useMemo } from "react";
import { ContentForm } from "../login/styled";
import RegisterEmailForm from "@infrastructure/containers/forms/register/registerEmail";
import RegisterAccountForm from "@infrastructure/containers/forms/register/registerAccount";
import ErrorImage from "@shared/components/errorImage";
import ErrorClose from "/public/img/error-closed.png";
import Computer from "/public/img/computer.png";
import Steps from "@shared/components/steps";
import { useRouter } from "next/navigation";
import { TitleOne } from "@shared/components/labels/styled";
import { useTranslation } from "react-i18next";
import LoaderComponent from "@shared/components/loader";
import ValidationsRegister from "./validations";
interface IRegisterComponentProps {
	changeStateAction?: 1 | 2 | 3 | 4 | 5;
	setChangeAction?: (_value: 1 | 2 | 3 | 4 | 5) => void;
}

const RegisterComponent: FC<IRegisterComponentProps> = ({
	changeStateAction,
	setChangeAction = () => {},
}: IRegisterComponentProps) => {
    const router = useRouter();
    const { t } = useTranslation("register");
    const { isLoading, handleSubmitFormUser, handleSubmitValidateEmail } = ValidationsRegister({ changeStep: setChangeAction});

	const title = useMemo(() => {
		switch (changeStateAction) {
			case 3:
				return `${t("title_error")}`;
			case 4:
				return `${t("title_success")}`;
			default:
				return `${t("title_create")}`;
		}
	}, [changeStateAction, t]);

	return (
		<ContentForm className="flex overflow-y-auto px-16 h-screen pb-8 my-auto">
			<div className="m-auto">
				<TitleOne $center>{title}</TitleOne>
				{changeStateAction === 1 && (
					<>
						<Steps disable={true} />
						<RegisterEmailForm
							onSubmit={handleSubmitValidateEmail}
						/>
					</>
				)}
				{changeStateAction === 2 && (
					<div>
						<Steps />
						<RegisterAccountForm
							onSubmit={handleSubmitFormUser}
						/>
					</div>
				)}
				{changeStateAction === 3 && (
					<ErrorImage
						image={ErrorClose}
						textButton={`${("retry")}`}
						onClickButton={() => setChangeAction(1)}
						description={`${t("description_error_create_account")}`}
					/>
				)}
				{changeStateAction === 4 && (
					<ErrorImage
						image={Computer}
						textButton={`${t("sing_in")}`}
						onClickButton={() => router.push("login")}
					/>
				)}
                {isLoading && (
                    <div className="fixed top-0 left-0 w-full bg-white">
                        <LoaderComponent/>
                    </div>
                )}
			</div>
		</ContentForm>
	);
};

export default RegisterComponent;
