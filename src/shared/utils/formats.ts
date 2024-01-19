import { enUS, es } from "date-fns/locale";
import theme from "theme";
import { format, parse } from "date-fns";
import { IFilters } from "@domain/models";
import { formatDateDTO } from ".";
import { ReadonlyURLSearchParams } from "next/navigation";

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

export const categoryNameToMachineName = (categoryName: string): string => {
	switch (categoryName) {
		case "Execution":
			return "Execute";
		case "Initial Access":
			return "Initial_Access";
		case "Exploit":
			return "Exploit";
		case "Restriction":
			return "Restriction";
		case "Discovery":
			return "Discovery";
		case "Credential Access":
			return "Credential_Access";
		case "Defense Evasion":
			return "Defense_Evasion";
		case "Collection":
			return "Collection";
		case "Persistence":
			return "Persistence";
		case "Exfiltration":
			return "Exfiltration";
		case "Command and Control":
			return "Command_And_Control";
		case "Lateral Movement":
			return "Lateral_Movement";
		case "Malware":
			return "Malware";
	}
	return "";
};

export const backgroundColor = (category: string) => {
	switch (category) {
		case "Execution":
			return theme.colors.blue10;
		case "Initial Access":
			return theme.colors.blue30;
		case "Exploit":
			return theme.colors.blue10;
		case "Restriction":
			return theme.colors.blue10;
		case "Discovery":
			return theme.colors.purple20;
		case "Credential Access":
			return theme.colors.blue10;
		case "Defense Evasion":
			return theme.colors.blue10;
		case "Collection":
			return theme.colors.blue10;
		case "Persistence":
			return theme.colors.blue10;
		case "Exfiltration":
			return theme.colors.orange20;
		case "Command and Control":
			return theme.colors.blue10;
		case "Lateral Movement":
			return theme.colors.red20;
		case "Malware":
			return theme.colors.red40;
	}
	return "";
};

export function formatFiltersToQuery(filter: IFilters) {
	const searchParam = new URLSearchParams();
	for (const key in filter) {
		switch (key) {
			case "category":
			case "status":
			case "risk":
				const value = filter[key]?.value;
				value && searchParam.set(key, value);
				break;
			case "date":
				const date = filter.date && formatDateDTO(filter.date);
				date && searchParam.set("date", date);
				break;
			default:
				break;
		}
	}
	return searchParam.toString();
}

export function parseQueryToFilters(params: ReadonlyURLSearchParams): IFilters {
	const filters: Partial<IFilters> = {};

	const date = params.get("date");
	if (date) {
		filters.date = parse(date, "yyyy-MM-dd", new Date()) || null;
	} else {
		filters.date = null;
	}

	const replaceKeys = ["category", "status", "risk"] as const;

	for (const key of replaceKeys) {
		const value = params.get(key);
		if (value) {
			filters[key] = {
				value,
				label: value,
			};
		} else {
			filters[key] = null;
		}
	}

	return filters as IFilters;
}
