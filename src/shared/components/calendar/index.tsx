import Calendar from "react-calendar";
import { CalendarContainer } from "./styled";
import Icon from "../icons";
import theme from "@theme/index";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface CalendarProps {
	value?: Date | null | undefined;
	onChange?: (_value: Value) => void;
}
export default function CalendarComponent({ value, onChange }: CalendarProps) {
	return (
		<CalendarContainer>
			<div className="flex justify-between mx-4 my-2 items-center">
				<p className="font-semibold text-lg">Calendario</p>
				<Icon icon="calendar" color={theme.colors.white} size={32} />
			</div>
			<Calendar
				className="rounded-lg border-transparent"
				onChange={onChange}
				value={value}
				selectRange={false}
			/>
		</CalendarContainer>
	);
}
