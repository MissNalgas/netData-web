import theme from "@theme/index";
import Icon from "../icons";

interface IStepsProps {
    disable?: boolean
}

export default function Steps(props: IStepsProps) {
    const { disable } = props;

    return (
        <div className="flex justify-between m-8">
            <div className="flex bg-yellow rounded-2xl grow justify-center p-3">
                <Icon
                    icon="message"
                    color={theme.colors.white}
                    size={42}
                />
            </div>
            <div className="border-dashed border-gray10 w-2/5 border-t my-8 border-8 mx-5"/>
            <div className={`flex ${!disable ? "bg-yellow" : "bg-orange20"} rounded-2xl grow justify-center p-3`}>
                <Icon
                    icon="account"
                    size={42}
                    color={theme.colors.white}
                />
            </div>
        </div>
    )
}