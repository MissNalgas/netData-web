import colors from "@theme/colors";
import styled from "styled-components";

interface CalendarInputProps {
	$isActive?: boolean;
}
export const CalendarInput = styled.button<CalendarInputProps>`
	background: ${colors.shadow20};
	display: flex;
	height: 36px;
	align-items: center;
	border-radius: 10px;
	box-shadow: 0 0 0 1px
		${({ $isActive }) => ($isActive ? colors.orange50 : "transparent")};
`;

export const CalendarContainer = styled.div`
	display: grid;
	place-content: center;
	& .react-calendar__tile--now {
		background: ${colors.orange10};
		&:hover {
			background: #e6e6e6;
		}
	}
	& .react-calendar {
		border: none;
		background: ${colors.shadow20};
		padding: 8px;
		border-radius: 10px;
	}
	& .react-calendar__tile {
		border-radius: 8px;
	}
	& .react-calendar__tile--active {
		background: ${colors.orange50} !important;
		&:hover {
			background: ${colors.orange40};
		}
	}
`;
