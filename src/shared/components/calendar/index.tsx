import { useState } from "react";
import Calendar from "react-calendar";
import { CalendarContainer } from "./styled";
import Icon from "../icons";
import theme from "@theme/index";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarComponent() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <CalendarContainer>
        <div className="flex justify-between mx-4 my-2 items-center">
            <p className="font-semibold text-lg">Calendario</p>
            <Icon
                icon="calendar"
                color={theme.colors.white}
                size={32}
            />
        </div>
        <Calendar
            onChange={onChange}
            value={value}
            selectRange={true}
        />
    </CalendarContainer>
  );
}