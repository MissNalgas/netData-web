import colors from "@theme/colors";
import styled from "styled-components";

export const CalendarContainer = styled.div.attrs({
	className: "bg-shadow20 rounded-lg",
})`
    /* ~~~ container styles ~~~ */
    margin: auto;
    margin-top: 20px;
    padding: 10px;
    border-radius:20px;

    .react-calendar__tile--now{
        background-color: ${colors.orange50}!important;
        color: ${colors.white}!important;
        border-radius: 12px!important;
    }


    .react-calendar__tile--now:enabled:hover,
    .react-calendar__tile--now:enabled:focus {
        background: ${colors.orange50};
        border-radius: 12px;
        font-weight: bold;
        color: ${colors.white};
    }

    .react-calendar__navigation {
        display: flex;
    }

    
    .react-calendar__navigation__label {
        font-weight: bold;
        color: ${colors.orange50};
        text-transform: capitalize;
    }

     /* ~~~ label styles ~~~ */
    .react-calendar__month-view__weekdays {
        text-align: center;
        margin: 12px 0px;
        text-transform: capitalize;
        color: ${colors.gray40}
    }

    abbr[title] {
        text-decoration: none;
    }

    .react-calendar__navigation__arrow {
        flex-grow: 0.333;
    }


    /* ~~~ neighboring month & weekend styles ~~~ */
    .react-calendar__month-view__days__day--neighboringMonth {
        opacity: 0.33;
    }

    .react-calendar__month-view__days {
        color: ${colors.gray40};
    }

    .react-calendar__tile--range {
        border-radius: 12px;
        background-color: ${colors.white};
        border-radius: 0px;
        color: ${colors.gray40};
        margin: 2px 0px;
    }


    .react-calendar__tile--rangeStart {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
    }

    .react-calendar__tile--rangeEnd {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
    }
    
  
`;