import { JSX } from "react";
interface ToggleComponentProps {
	actionToggle: () => void;
}

export default function Toggle({
	actionToggle,
}: ToggleComponentProps): JSX.Element {
	return (
		<div className="toggle-switch" onClick={actionToggle}>
			<input type="checkbox" id="toggle" className="toggle-input" />
			<label htmlFor="toggle" className="toggle-label">
				<span className="toggle-text-left">on</span>
				<span className="toggle-thumb"></span>
				<span className="toggle-text-right">off</span>
			</label>
		</div>
	);
}
