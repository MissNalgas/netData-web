import { JSX, useEffect } from "react";
import { CaptionOne, Body } from "../labels/styled";
import Icon from "../icons";
import { ContentChat } from "./styled";
import ChatForm, { IChatForm } from "@infrastructure/containers/forms/chat";
import { useAppDispatch, useTypedSelector } from "@hooks/index";
import { useTranslation } from "react-i18next";
import { useSideModal } from "../sideModal";
import { getComments, sendComment } from "@infrastructure/store/chat/actions";
import { toast } from "react-toastify";

interface ChatProps {
	tikectId: string;
	onActionChat: () => void;
}

export default function Chat({
	onActionChat,
	tikectId = "1",
}: ChatProps): JSX.Element {
	const dispatch = useAppDispatch();
	const { t } = useTranslation("information");
	const sideModal = useSideModal();

	const chatData = useTypedSelector((state) => state.chat.data);

	console.log("data", chatData);
	useEffect(() => {
		dispatch(getComments({ id: 1 }));
	}, [dispatch]);

	const handleSubmit = (data: IChatForm) => {
		dispatch(
			sendComment({
				ticketId: tikectId.toString(),
				reply: data.reply,
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
	return (
		<div className="p-6">
			<div className="w-full flex justify-between py-3">
				<button
					onClick={() => onActionChat()}
					className="bg-gray10 rounded-full w-10 h-10 grid place-content-center"
				>
					<Icon icon="Cancel" size="24px" />
				</button>
				<Body $weight={700}>ID 1234456</Body>
			</div>
			<div className="w-full text-right flex justify-end">
				<div className="w-80">
					<CaptionOne>{t("you_have_doubts")}</CaptionOne>
				</div>
			</div>
			<ContentChat>
				<div className="flex justify-end  py-4">
					<div className="w-2/3 h-20 flex justify-end py-2 bg-shadow20 rounded-2xl ">
						Contents
					</div>
				</div>

				<div>
					<ChatForm onSubmit={handleSubmit} />
				</div>
			</ContentChat>
		</div>
	);
}
