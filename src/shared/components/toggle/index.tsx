import { JSX, useEffect, useState } from "react";
interface ToggleComponentProps {
	actionToggle: (_isChecked: boolean) => void;
}

export default function Toggle({
	actionToggle,
}: ToggleComponentProps): JSX.Element {
	const checkedSave = localStorage.getItem("notifications");
	const [checked, setChecked] = useState(Boolean(checkedSave));

	useEffect(() => {
		setChecked(Boolean(checkedSave));
	}, [checkedSave]);
	const handleChecked = (e: any) => {
		setChecked(!checked);
		actionToggle(e.target.checked);
	};
	return (
		<div className="toggle-switch" onChange={handleChecked}>
			<input
				type="checkbox"
				id="toggle"
				className="toggle-input"
				checked={checked}
			/>
			<label htmlFor="toggle" className="toggle-label">
				<span className="toggle-text-left">on</span>
				<span className="toggle-thumb"></span>
				<span className="toggle-text-right">off</span>
			</label>
		</div>
	);
}
