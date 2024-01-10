import React from "react";

import { LoginForm } from "@infrastructure/containers";

import { ContentForm, SecondTitleCustom, TitleCustom } from "./styled";
import { ILogin } from "@infrastructure/containers/forms/login";
import LoaderComponent from "@shared/components/loader";
import { useTranslation } from "react-i18next";

const LoginComponent: React.FC<LoginComponentProps> = ({onSubmit, isLoading}) => {
	// const { login } = useAuth();
	const { t } = useTranslation("login");
	// const [isLoading, setIsLoading] = useState(false);

	// const handleSubmit = (data: ILogin) => {
	// 	setIsLoading(true);
	// 	login(data.email, data.password).finally(() => {
	// 		setIsLoading(false);
	// 	}).catch((err) => {
	//
	// 		if (err instanceof SentriaError) {
	// 			toast.error(err.message);
	// 		} else {
	// 			toast.error("Hubo un error al iniciar sesión, por favor, vuelve a intentar");
	// 		}
	//
	// 	})
	// }

	return (
		<ContentForm>
			<TitleCustom $center>{t("welcome_title")}</TitleCustom>
			<SecondTitleCustom $center>{t("subTitle")}</SecondTitleCustom>
			<LoginForm disableSubmit={isLoading} onSubmit={onSubmit} />
			{isLoading && (
				<div className="fixed top-0 left-0 w-full bg-white">
					<LoaderComponent />
				</div>
			)}
		</ContentForm>
	);
};

export default LoginComponent;

interface LoginComponentProps {
	onSubmit: (_data: ILogin) => void;
	isLoading?: boolean;

}
