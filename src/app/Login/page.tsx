"use client";

import { NextPage } from "next";
import { useRouter } from "next/navigation";

import { getDataUser } from "infrastructure/store/user/actions";
import { useAppDispatch } from "hooks";

const Login: NextPage = () => {
	const dispatch = useAppDispatch();

	const router = useRouter();
	const getTesting = () => dispatch(getDataUser(1));

	const loginTesting = async () => {
		await getTesting();
		router.push("/Home");
	};
	return (
		<div>
			<h1>Welcome to my Next.js app!</h1>
			<button onClick={() => loginTesting()}>Inicio</button>
		</div>
	);
};

export default Login;
