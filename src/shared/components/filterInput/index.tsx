import colors from "@theme/colors";
import TextInput from "../textInput";
import { useState } from "react";
import { autoUpdate, offset, useFloating } from "@floating-ui/react";

export default function FilterInput() {

	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const {refs, floatingStyles} = useFloating({
		middleware: [offset(8)],
		whileElementsMounted: autoUpdate,
	});


	return (
		<>
			<TextInput
				ref={refs.setReference}
				name="filter"
				icon="Magnifier"
				iconColor={colors.orange50}
				placeholder="# de ticket"
				iconright="equalizer"
				iconColorRight={colors.orange50}
				onRightIconClick={() => setIsFilterOpen(s => !s)}
			/>
			{isFilterOpen && (
				<div style={floatingStyles} ref={refs.setFloating} className="w-[95vw] max-w-[400px] bg-white border-2 rounded-2xl p-3 flex flex-col gap-2">
					<span onClick={() => setIsFilterOpen(false)}>10</span>
					<span>11</span>
					<span>12</span>
				</div>
			)}
		</>
	);
}
