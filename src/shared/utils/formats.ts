import { enUS, es } from "date-fns/locale";
import { format, parse } from "date-fns";
import { IFilters } from "@domain/models";
import { formatDateDTO } from "./maps";
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
