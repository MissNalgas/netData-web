"use client";

import LayoutComponent from "@infrastructure/components/auth/layout";
import RegisterComponent from "@infrastructure/components/auth/register";
import { NextPage } from "next";
import { useState } from "react";

const Register: NextPage = () => {
    const [changeAction, setChangeAction] = useState<1 | 2 | 3 	| 4 >(1);

	const handleActionButtonClick = (numberComponent: 1 | 2 | 3	| 4) => {
		setChangeAction(numberComponent);
	};

	return (
		<LayoutComponent>
			<RegisterComponent
                setChangeAction={handleActionButtonClick}
                changeStateAction={changeAction}
            />
		</LayoutComponent>
	);
};

export default Register;
