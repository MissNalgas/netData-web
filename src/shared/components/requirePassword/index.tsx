import { useTheme } from "styled-components";
import Icon from "../icons";
import { useTranslation } from "react-i18next";

interface IRequirePasswordProps {
    isError: boolean;
}

export default function RequirePassword(props: IRequirePasswordProps) {
    const { isError } = props;
    const { t } = useTranslation("register");
    const theme = useTheme();

    const useCases = [
        {
            case: `${t("min_8_charcters")}`,
        }, {
            case: `${t("min_uppercase")}`,
        }, {
            case: `${t("min_especial_character")}`,
        }, {
            case: `${t("min_number")}`,
        },
    ];

    return(
        <div className="flex flex-col justify-between py-3">
            <label className="text-sm flex flex-row items-center gap-2 text-gray50">
                {t("password_contain")}
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