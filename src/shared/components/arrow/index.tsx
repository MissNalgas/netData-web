import Icon from "../icons";

export default function Arrow({ action, nameIcon }: { action: () => void, nameIcon: string }) {
    return(
        <div className="bg-shadow20 rounded-full ml-1 h-7" onClick={action}>
            <Icon
                icon={nameIcon}
                size={25}
            />
        </div>
    )
}