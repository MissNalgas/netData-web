import { enUS, es } from "date-fns/locale";
import { format } from "date-fns";

export function currencyFormat(num: number) {
	return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export const getFormattedDate = (date: Date, lang?: string) => {
	if (lang === "es") {
		return format(date, "dd 'de' LLLL 'de' yyyy", { locale: es });
	} else {
		return format(date, "LLLL dd 'of' yyyy", { locale: enUS });
	}
};

export const getDateHour = (date: Date) => {
	return format(new Date(date), "hh:mm a ");
};
