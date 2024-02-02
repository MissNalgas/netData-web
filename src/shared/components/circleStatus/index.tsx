interface ICircleStatusProps {
    externalColor: string;
    internalColor: string;
};

export default function CircleStatus (props: ICircleStatusProps) {
    const { internalColor, externalColor } = props;

    return (
        <div className={`bg-${externalColor} w-4 h-4 rounded-full flex items-center justify-center mr-2`}>
            <div className={`bg-${internalColor} rounded-full w-2 h-2`}/>
        </div>
    )
};