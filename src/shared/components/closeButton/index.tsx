import Icon from "../icons";

export default function CloseButton({onClick}: {onClick?: () => void}) {
	return (
		<button onClick={onClick} className="absolute top-2 right-2 grid place-content-center">
			<Icon icon="Cancel" size="24px"/>
		</button>
	);
}
