"use client";

import { NextPage } from "next";
import LayoutComponent from "@infrastructure/components/auth/layout";
import RecoverPasswordComponent from "@infrastructure/components/auth/recover-password";
import { useState } from "react";

const RecoverPassword: NextPage = ({}) => {
	const [changeAction, setChangeAction] = useState<1 | 2 | 3 	|4>(1);

	const handleActionButtonClick = (numberComponent: 1 | 2 | 3	|4) => {
		setChangeAction(numberComponent);
	};

	return (
		<LayoutComponent>
			<RecoverPasswordComponent
				changeStateAction={changeAction}
				setChangeAction={handleActionButtonClick}
			/>
		</LayoutComponent>
	);
};

export default RecoverPassword;
