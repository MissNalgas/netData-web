import React from "react";
import { createContext, useCallback, useMemo, useState } from "react";
import { ISideModalContext, ModalContent, ModalToggle, SideModalProps } from "./models";
import { SideModalComponent } from "./component";


export const SideModalContext = createContext<ISideModalContext>({
	isOpen: false,
	toggle() {},
	content: undefined,
});

export function SideModalProvider({children} : SideModalProps) {

	const [content, setContent] = useState<ModalContent>();

	const toggle : ModalToggle  = useCallback(({content}) => {
		setContent((previousValue) => previousValue ? undefined : content);
	}, []);

	const contextValue = useMemo(() => ({
		isOpen: !!content,
		toggle,
	}), [content, toggle]);

	return (
		<SideModalContext.Provider value={contextValue}>
			{children}
			<div className={`fixed top-0 left-0 w-full h-full ${content ? "" : "pointer-events-none"}`}>
				<div
					onClick={() => toggle({})}
					className={`bg-black ${content ? "opacity-20" : "opacity-0"} w-full h-full absolute transition`}
				/>
				<SideModalComponent show={!!content}>
					{content?.()}
				</SideModalComponent>
			</div>
		</SideModalContext.Provider>
	);
}
