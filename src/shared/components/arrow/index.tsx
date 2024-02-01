import { FloatingArrow, arrow, flip, offset, useFloating, useHover, useInteractions } from "@floating-ui/react";
import Icon from "../icons";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface ArrowProps {
    action: () => void,
    nameIcon: string,
    className?: string,
    showMore?: boolean
}

export default function Arrow(props: ArrowProps) {
    const { action, nameIcon, className, showMore = true } = props;
	const [isOpen, setIsOpen] = useState(false);
	const arrowRef = useRef(null);
	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [offset(12), flip(), arrow({element: arrowRef})],
		placement: "top",
	});
	const hover = useHover(context);
	const {getReferenceProps, getFloatingProps } = useInteractions([hover]);
    const { t } = useTranslation("information");

	return (
		<>
			<div ref={refs.setReference} className={`flex bg-shadow20 rounded-full ml-1 h-7 w-7 justify-center items-center cursor-pointer ${className}`} onClick={action} {...getReferenceProps()}>
				<Icon
					icon={nameIcon}
					size={25}
				/>
			</div>
			{showMore && (<div className={`bg-gray-800 text-white p-1 rounded transition ${isOpen ? "opacty-100" : "opacity-0"}` }style={floatingStyles} ref={refs.setFloating} {...getFloatingProps()}>
				<span>
                    {t("show_more")}
				</span>
				<FloatingArrow context={context} ref={arrowRef}/>
			</div>)}
		</>
	);
}
