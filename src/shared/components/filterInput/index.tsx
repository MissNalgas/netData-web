import colors from "@theme/colors";
import TextInput from "../textInput";
import { FormEventHandler, MouseEventHandler, useState } from "react";
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

const FILTERS = [
	{
		name: "category",
		placeholder: "Categoría",
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
		placeholder: "Estado",
		icon: "Sentria",
		options: [
			{
				value: "EstadoA",
				label: "Estado A",
			},
			{
				value: "EstadoB",
				label: "Estado B",
			},
		],
	},
	{
		name: "risk",
		placeholder: "Riesgo",
		icon: "Sentria",
		options: [
			{
				value: "RiesgoA",
				label: "Riesgo A",
			},
			{
				value: "RiesgoB",
				label: "Riesgo B",
			},
		],
	},
]

export default function FilterInput() {

	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [filterData, setFilter] = useFilterState({category: ""});
	const [showCalendar, setShowCalendar] = useState(false);
	const [date, setDate] = useState<Date | null>(null);

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
	}

	const clearDate : MouseEventHandler = (e) => {
		e.stopPropagation();
		setDate(null);
	}


	return (
		<>
			<TextInput
				ref={refs.setReference}
				name="filter"
				icon="Magnifier"
				iconColor={colors.orange50}
				placeholder="# de ticket"
				iconright="equalizer"
				iconColorRight={colors.orange50}
				onRightIconClick={() => setIsFilterOpen(s => !s)}
			/>
			{isFilterOpen && (
				<form onSubmit={handleSubmit} style={floatingStyles} ref={refs.setFloating} className="w-[95vw] max-w-[400px] bg-white border-2 rounded-2xl p-3 flex flex-col gap-2">
					{FILTERS.map(filter => (
						<Select
							isClearable
							value={filterData[filter.name as keyof typeof filterData]}
							icon={filter.icon}
							key={filter.name}
							placeholder={filter.placeholder}
							options={filter.options as any as GroupBase<string>[]}
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
								<button type="button" onClick={clearDate} className="ml-auto mr-2">
									<Icon color="#666666" icon="Cancel" size="20"/>
								</button>
							</>
						) : (
							<span className="text-[#808080]">Date</span>
						)}
					</CalendarInput>
					{showCalendar && (
						<CalendarContainer>
							<Calendar value={date} onChange={value => updateDate(value as Date)}/>
						</CalendarContainer>
					)}
					<PrimaryButton type="submit">Aplicar filtros</PrimaryButton>
				</form>
			)}
		</>
	);
}
