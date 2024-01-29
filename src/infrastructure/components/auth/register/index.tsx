import React, { FC, useMemo } from "react";
import { ContentForm } from "../login/styled";
import RegisterEmailForm from "@infrastructure/containers/forms/register/registerEmail";
import RegisterAccountForm from "@infrastructure/containers/forms/register/registerAccount";
import ErrorImage from "@shared/components/errorImage";
import ErrorClose from "/public/img/error-closed.png";
import Computer from "/public/img/computer.png";
import Steps from "@shared/components/steps";
import { useRouter } from "next/navigation";
import { Overline, TitleOne } from "@shared/components/labels/styled";
import { useTranslation } from "react-i18next";
import LoaderComponent from "@shared/components/loader";
import ValidationsRegister from "./validations";
import Icon from "@shared/components/icons";
import { useTheme } from "styled-components";
interface IRegisterComponentProps {
	changeStateAction?: 1 | 2 | 3 | 4 ;
	setChangeAction?: (_value: 1 | 2 | 3 | 4 ) => void;
}

const RegisterComponent: FC<IRegisterComponentProps> = ({
	changeStateAction,
	setChangeAction = () => {},
}: IRegisterComponentProps) => {
    const router = useRouter();
    const { t } = useTranslation();
    const { isLoading, handleSubmitFormUser, handleSubmitValidateEmail } = ValidationsRegister({ changeStep: setChangeAction});
	const theme = useTheme();
	const title = useMemo(() => {
		switch (changeStateAction) {
			case 3:
				return `${t("register:title_error")}`;
			case 4:
				return `${t("register:title_success")}`;
			default:
				return `${t("register:title_create")}`;
		}
	}, [changeStateAction, t]);

    const handleClickArrow = () => {
        switch (changeStateAction) {
            case 2:
                setChangeAction(1)
            case 1:
                router.push("login");
            default:
                break;
        }
    };

	return (
        <ContentForm className="flex overflow-y-auto h-screen pb-8 my-auto">
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
						description={`${t("register:description_error_create_account")}`}
					/>
				)}
				{changeStateAction === 4 && (
					<ErrorImage
						image={Computer}
						textButton={`${t("register:sign_in")}`}
						onClickButton={() => router.push("login")}
					/>
				)}
				<div className="flex items-center justify-center cel:text-center my-2 cel:text-wrap gap-1 py-5 cursor-pointer" onClick={() => handleClickArrow()}>
                    <Icon icon="left-arrow" size="32"/>
                    <Overline $color={theme.colors.gray50} $weight={600} className="cel:block tablet:ml-2 tablet:inline">
                        {t("recover_password:go_back")}
                    </Overline>
			    </div>
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
