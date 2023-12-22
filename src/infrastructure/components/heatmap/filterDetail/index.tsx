import React from "react";
import { IFilters } from "@domain/models";
import { format } from "date-fns";
import Chip from "./chip";

export default function FilterDetail({filter, setFilter, className = ""}: FilterDetailProps) {

	const removeFilter = (key: string) => {
		setFilter?.(filters => {
			if (!filters) return;
			filters[key as keyof IFilters] = null;
			return {...filters};
		});
	}

	if (!filter || Object.values(filter).every(value => value === null))
		return (
			<span className={className}>
				<b>Filtrado por: </b>
				Sin filtros aplicados
			</span>
		);

	return (
		<div className={"flex items-center gap-2 flex-col sm:flex-row " + className}>
			<span>
				<b>Filtrado por:</b>
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
					) : !!value && (
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
