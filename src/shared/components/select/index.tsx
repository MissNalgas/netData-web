import colors from "@theme/colors";
import ReactSelect, { GroupBase, Props } from "react-select";
import Icon from "../icons";

export interface SelectProps<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> extends Props<Option, IsMulti, Group> {
	icon?: string;
	iconColor?: string;
};

export default function Select<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props : SelectProps<Option, IsMulti, Group>) {
	return (
		<ReactSelect
			components={{
				Control({children, getStyles, innerRef, innerProps, ...otherProps}) {
					return (
						<div ref={innerRef} style={getStyles("control", otherProps as any) as any} className="flex" {...innerProps}>
							{props.icon && (
								<Icon className="ml-2" size="25" icon={props.icon} color={props.iconColor || colors.orange50}/>
							)}
							{children}
						</div>
					);
				},
			}}
			styles={{
				singleValue(baseStyles) {
					return {
						...baseStyles,
						color: colors.orange50,
					}
				},
				control(baseStyles, state) {
					return {
						...baseStyles,
						color: colors.orange,
						borderColor: "transparent",
						background: colors.shadow20,
						borderRadius: 10,
						boxShadow: !state.isFocused ? "0 0 0 1px transparent" : `0 0 0 1px ${colors.orange50}`,
					}
				},
				menu(baseStyles) {
					return {
						...baseStyles,
						background: colors.shadow20,
					}
				},
				option(baseStyles, state) {

					return {
						...baseStyles,
						color: state.isSelected ? "#000" : baseStyles.color,
						background: state.isSelected ? "#00000015" : state.isFocused ? "#00000005" : "transparent",
						":active": {
							background: colors.yellow,
						},
					}
				},

			}}
			{...props}
		/>
	);
};
