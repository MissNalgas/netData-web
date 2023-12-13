import React from "react";

import { contact } from "@infrastructure/store/user/actions";
import ChatForm, { IChatForm } from "@infrastructure/containers/forms/chat";
import { toast } from "react-toastify";
import { useAppDispatch } from "@hooks/index";
import Icon from "../icons";
import { CaptionOne } from "../labels/styled";
import { useTranslation } from "react-i18next";
import { useSideModal } from "../sideModal";

export default function ContactComponent(): any {
	const sideModal = useSideModal();
	const dispatch = useAppDispatch();
	const { t } = useTranslation("profile");

	const handleSubmit = (data: IChatForm) => {
		dispatch(
			contact({
				body: data.affair,
				subject: data.message,
			})
		)
			.then(() => {
				sideModal.toggle({});
				toast.success(t("message_sent"));
			})
			.catch(() => {
				sideModal.toggle({});
				toast.error(t("message_error"));
			})
			.finally(() => {
				sideModal.toggle({});
			});
	};

	const show = () => {
		sideModal.toggle({
			content: () => (
				<section className="p-5">
					<button
						className="w-12 h-12 rounded-full bg-gray-100 items-center flex justify-center"
						onClick={() => sideModal.toggle({})}
					>
						<Icon icon="Cancel" size={22} />
					</button>
					<div className="my-5">
						<CaptionOne>{t("contact")}</CaptionOne>
					</div>

					<ChatForm onSubmit={handleSubmit} />
				</section>
			),
		});
	};

	return { show };
}
