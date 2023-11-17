import React, { FC, useMemo } from "react";
import CodeInputForm from "@infrastructure/containers/forms/forgotPassword/code-input";
import { ContentForm } from "../login/styled";
import RegisterEmailForm from "@infrastructure/containers/forms/register/registerEmail";
import RegisterAccountForm from "@infrastructure/containers/forms/register/registerAccount";
import ErrorImage from "@shared/components/errorImage";
import ErrorClose from "/public/img/error-closed.png";
import Computer from "/public/img/computer.png";
import Steps from "@shared/components/steps";
import { useRouter } from "next/navigation";
import { TitleOne } from "@shared/components/labels/styled";

interface IRegisterComponentProps {
	actionButton?: () => void;
	changeStateAction?: 1 | 2 | 3 | 4 | 5;
	setChangeAction?: (_value: 1 | 2 | 3 | 4 | 5) => void;
}

const RegisterComponent: FC<IRegisterComponentProps> = ({
	actionButton = () => {},
	changeStateAction,
	setChangeAction = () => {}
}: IRegisterComponentProps) => {
	const router = useRouter();

	const title = useMemo(() => {
		switch (changeStateAction) {
			case 4:
				return "Upss... ha ocurrido un error";
			case 5:
				return "¡Has creado tu cuenta de forma exitosa!";
			default:
				return "Crea una cuenta nueva";
		}
	}, [changeStateAction]);

	return (
		<ContentForm className="flex overflow-y-auto px-16 h-screen pb-8 my-auto">
			<div className="m-auto">
				<TitleOne center>{title}</TitleOne>
				{changeStateAction === 1 && (
					<>
						<Steps disable={true} />
						<RegisterEmailForm
							onSubmit={() => {
								actionButton(), setChangeAction(2);
							}}
						/>
					</>
				)}
				{changeStateAction === 2 && (
					<>
						<label className="text-sm mb-5">
							Introduce el código que fue enviado a tu correo eletrónico
						</label>
						<CodeInputForm
							onSubmit={() => {
								actionButton(), setChangeAction(3);
							}}
						/>
					</>
				)}
				{changeStateAction === 3 && (
					<div>
						<Steps />
						<RegisterAccountForm
							onSubmit={() => {
								actionButton(), setChangeAction(4);
							}}
						/>
					</div>
				)}
				{changeStateAction === 4 && (
					<ErrorImage
						image={ErrorClose}
						textButton="Intentar de nuevo"
						onClickButton={() => setChangeAction(5)}
						description="No ha sido posible crear tu cuenta por favor vuelve a intentarlo o ¡ponte en contacto con nosotros!"
					/>
				)}
				{changeStateAction === 5 && (
					<ErrorImage
						image={Computer}
						textButton="Iniciar sesión"
						onClickButton={() => router.push("login")}
					/>
				)}
			</div>
		</ContentForm>
	);
};

export default RegisterComponent;
