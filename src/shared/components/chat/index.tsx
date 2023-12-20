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
import { chatObject } from "@infrastructure/store/chat/types";

interface ChatProps {
	tikectId: string | number;
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

	useEffect(() => {
		dispatch(getComments({ id: tikectId.toString() }));
	}, [dispatch, tikectId]);

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
				<Body $weight={700}>ID {tikectId}</Body>
			</div>
			<div className="w-full text-right flex justify-end">
				<div className="w-80">
					<CaptionOne>{t("you_have_doubts")}</CaptionOne>
				</div>
			</div>
			<ContentChat>
				<div className="flex justify-end  py-4 h-5/6">
					<div className="flex flex-col gap-2 overflow-y-auto items-end">
						{chatData.length ? (
							chatData?.map((item: chatObject) => (
								<div
									className="w-2/3 h-auto flex justify-end p-2 bg-shadow20 rounded-2xl"
									key={item.id}
								>
									<CaptionOne
										style={{
											width: "90%",
											height: "auto",
											wordWrap: "break-word",
										}}
									>
										{item.body_text}
									</CaptionOne>
								</div>
							))
						) : (
							<div className="w-full h-auto flex justify-end p-2 bg-shadow20 rounded-2xl">
								<CaptionOne
									style={{
										height: "auto",
										wordWrap: "break-word",
									}}
								>
									{t("loading")}
								</CaptionOne>
							</div>
						)}
					</div>
				</div>
				<div>
					<ChatForm onSubmit={handleSubmit} />
				</div>
			</ContentChat>
		</div>
	);
}
