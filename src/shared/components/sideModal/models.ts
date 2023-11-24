import React from "react";

export interface SideModalProps {
	children?: React.ReactNode;
}

export type ModalToggle = (_props: { content?: ModalContent }) => void;

export interface ISideModalContext {
	isOpen: boolean;
	toggle: ModalToggle;
	content?: ModalContent;
}

export type ModalContent = () => React.ReactNode;
