import React from "react";
import { IFilters } from "@domain/models";
import { format } from "date-fns";
import Chip from "./chip";
import { useTranslation } from "react-i18next";

export default function FilterDetail({filter, setFilter, className = ""}: FilterDetailProps) {
	const { t } = useTranslation();
	const removeFilter = (key: string) => {
		setFilter?.(filters => {
			if (!filters) return;
			filters[key as keyof IFilters] = null;
			return {...filters};
		});
	}

	if (!filter || Object.values(filter).every(value => value === null || typeof value === "number"))
		return (
			<span className={className}>
				<b>{t("tickets_week:filtered_by")} </b>
				{t("tickets_week:without_filters")}
			</span>
		);

	return (
		<div className={"flex items-center gap-2 flex-col sm:flex-row " + className}>
			<span>
				<b>{t("tickets_week:filtered_by")}</b>
			</span>
			<div className="flex items-center gap-2 flex-wrap">
				{Object.entries(filter).map(([key, value]) => (
					value instanceof Date ? (
						<Chip
							onClose={() => removeFilter(key)}
							key={key}
						>
							{format(value, "M/dd/yyyy")}
						</Chip>
					) : (!!value && typeof value === "object" && "label" in value) && (
						<Chip
							onClose={() => removeFilter(key)}
							key={key}
						>
							{value.label}
						</Chip>
					)
				))}
			</div>
		</div>
	);
}
interface FilterDetailProps {
	filter?: IFilters;
	setFilter?: React.Dispatch<React.SetStateAction<IFilters | undefined>>;
	className?: string;
}
