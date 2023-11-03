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
		<div className="flex flex-col justify-center items-center min-h-screen h-full">
			<h1>Welcome to Sentria!</h1>
			<button className="underline" onClick={() => loginTesting()}>Inicio</button>
		</div>
	);
};

export default Login;
