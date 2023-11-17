import { useTheme } from "styled-components";
import Icon from "../icons";

interface IRequirePasswordProps {
    isError: boolean;
}

export default function RequirePassword(props: IRequirePasswordProps) {
    const { isError } = props;
    const theme = useTheme();

    const useCases = [
        {
            case: "Mínimo 8 carácteres",
        }, {
            case: "Mínimo una mayúscula y minúscula",
        }, {
            case: "Mínimo un carácter especial (!”?@#).",
        }, {
            case: "Mínimo un número",
        },
    ];

    return(
        <div className="flex flex-col justify-between py-3">
            <label className="text-sm flex flex-row items-center gap-2 text-gray50">
                Asegúrate que tu contraseña contenga:
            </label>
            <div className="px-3 mt-2">
                {useCases.map((item, index) => (
                    <label key={index} className="text-sm flex flex-row items-center gap-2 text-gray40">
                        <Icon
                            icon="ellipse"
                            size={10}
                            color={!isError ? theme.colors.yellow : theme.colors.red}
                        />
                        {item.case}
                    </label>
                ))}
            </div>
        </div>
    )
}