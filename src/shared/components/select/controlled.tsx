import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import Select, { SelectProps } from ".";
import { GroupBase } from "react-select";

interface ControlledSelectProps<Option, Item extends FieldValues, TName extends FieldPath<Item> = FieldPath<Item>, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> extends SelectProps<Option, IsMulti, Group> {
	name: TName;
	control: Control<Item>
}

export default function ControlledSelect<Option, Item extends FieldValues, TName extends FieldPath<Item> = FieldPath<Item>, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props : ControlledSelectProps<Option, Item, TName, IsMulti, Group>) {
	return (
		<Controller
			name={props.name}
			control={props.control}
			render={({field: { onChange, value }}) => (
				<Select
					{...props}
					value={value}
					onChange={onChange}
				/>
			)}
		/>
	);
}
