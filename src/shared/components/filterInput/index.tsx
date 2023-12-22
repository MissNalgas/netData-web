import colors from "@theme/colors";
import TextInput from "../textInput";
import { FormEventHandler, MouseEventHandler, useEffect, useMemo, useState } from "react";
import { autoUpdate, offset, useFloating } from "@floating-ui/react";
import Select from "../select";
import { useFilterState } from "./hooks";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalendarContainer, CalendarInput } from "./styled";
import Icon from "../icons";
import { format } from "date-fns";
import { PrimaryButton } from "../buttons/styled";
import { GroupBase } from "react-select";
import { FilterOption, IFilters, TicketPriority } from "@domain/models";
import { useTranslation } from "react-i18next";


type INITIAL_TYPE = {category: null | FilterOption, status: null | FilterOption, risk: null | FilterOption};
const INITAL_STATE : INITIAL_TYPE = {category: null, status: null, risk: null};


export default function FilterInput({filter, onChange, placeholder} : FilterInputProps) {

	const { t } = useTranslation();
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [filterData, setFilter] = useFilterState(INITAL_STATE);
	const [showCalendar, setShowCalendar] = useState(false);
	const [date, setDate] = useState<Date | null>(null);

	useEffect(() => {
		if (!filter) return;

		setFilter({
			category: filter.category,
			status: filter.status || null,
			risk: filter.risk || null,
		});
		setDate(filter.date);
	}, [filter, setFilter]);

	const updateDate = (newDate: Date) => {
		setShowCalendar(false);
		setDate(newDate);
	}

	const {refs, floatingStyles} = useFloating({
		middleware: [offset(8)],
		whileElementsMounted: autoUpdate,
	});

	const handleSubmit : FormEventHandler = (e) => {
		e.preventDefault();
		setIsFilterOpen(false);
		onChange?.({
			...filterData,
			date: date,
		});
	}

	const clearDate : MouseEventHandler = (e) => {
		e.stopPropagation();
		setDate(null);
	}

	const filters = useMemo(() => ([
		{
			name: "category",
			placeholder: t("filter:category"),
			icon: "Sentria",
			options: [
				{
					value: "CategoriaA",
					label: "Categoría A",
				},
				{
					value: "CategoriaB",
					label: "Categoría B",
				},
			],
		},
		{
			name: "status",
			placeholder: t("filter:status"),
			icon: "Sentria",
			options: [
				{
					value: "open",
					label: t("filter:open"),
				},
				{
					value: "close",
					label: t("filter:closed"),
				},
			],
		},
		{
			name: "risk",
			placeholder: t("filter:risk"),
			icon: "Sentria",
			options: [
				{
					value: TicketPriority.Low,
					label: t("filter:low"),
				},
				{
					value: TicketPriority.Medium,
					label: t("filter:medium"),
				},
				{
					value: TicketPriority.High,
					label: t("filter:high"),
				},
				{
					value: TicketPriority.Urgent,
					label: t("filter:urgent"),
				},
			],
		},
	]), [t]);


	return (
		<>
			<TextInput
				ref={refs.setReference}
				name="filter"
				icon="Magnifier"
				iconColor={colors.orange50}
				placeholder={placeholder}
				iconright="equalizer"
				iconColorRight={colors.orange50}
				onRightIconClick={() => setIsFilterOpen(s => !s)}
			/>
			{isFilterOpen && (
				<form onSubmit={handleSubmit} style={floatingStyles} ref={refs.setFloating} className="w-[95vw] max-w-[400px] bg-white border-2 rounded-2xl p-3 flex flex-col gap-2">
					{filters.map(filter => (
						<Select
							isClearable
							value={filterData[filter.name as keyof typeof filterData]}
							icon={filter.icon}
							key={filter.name}
							placeholder={filter.placeholder}
							options={filter.options as any as GroupBase<FilterOption>[]}
							onChange={item => setFilter({[filter.name]: item})}
						/>
					))}
					<CalendarInput type="button" $isActive={!!date} onClick={() => setShowCalendar(s => !s)}>
						<Icon color={colors.orange50} className="mx-2" size="24" icon="Sentria"/>
						{date ? (
							<>
								<span className="text-primary">
									{format(date, "L/dd/yyyy")}
								</span>
								<div onClick={clearDate} className="ml-auto mr-2">
									<Icon color="#666666" icon="Cancel" size="20"/>
								</div>
							</>
							) : (
								<span className="text-[#808080]">{t("filter:date")}</span>
						)}
					</CalendarInput>
					{showCalendar && (
					<CalendarContainer>
						<Calendar value={date} onChange={value => updateDate(value as Date)}/>
					</CalendarContainer>
					)}
					<PrimaryButton type="submit">{t("filter:apply_filters")}</PrimaryButton>
				</form>
			)}
		</>
	);
}
interface FilterInputProps {
	onChange?: (_data: IFilters) => void;
	placeholder?: string;
	filter?: IFilters;
}
