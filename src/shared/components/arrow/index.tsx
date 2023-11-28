import { FloatingArrow, arrow, flip, offset, useFloating, useHover, useInteractions } from "@floating-ui/react";
import Icon from "../icons";
import { useRef, useState } from "react";

export default function Arrow({ action, nameIcon }: { action: () => void, nameIcon: string }) {

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

	return (
		<>
			<div ref={refs.setReference} className="bg-shadow20 rounded-full ml-1 h-7" onClick={action} {...getReferenceProps()}>
				<Icon
					icon={nameIcon}
					size={25}
				/>
			</div>
			<div className={`bg-gray-800 text-white p-1 rounded transition ${isOpen ? "opacty-100" : "opacity-0"}` }style={floatingStyles} ref={refs.setFloating} {...getFloatingProps()}>
				<span>
					Ver más
				</span>
				<FloatingArrow context={context} ref={arrowRef}/>
			</div>
		</>
	);
}
