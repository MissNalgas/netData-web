import { ReactNode } from "react";

export default function ContainerBackground({ children, className, id }: { children: ReactNode, className?: string | undefined; id?: string }) {
    return (
        <div className={`p-4 bg-white rounded-2xl shadow-lg shadow-shadow30/50 ${className}`} id={id}>
            {children}
        </div>
    )
};