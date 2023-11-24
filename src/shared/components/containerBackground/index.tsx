import { ReactNode } from "react";

export default function ContainerBackground({ children, className }: { children: ReactNode, className?: string | undefined; }) {
    return (
        <div className={`p-4 bg-white rounded-2xl shadow-lg shadow-shadow30/50 ${className}`}>
            {children}
        </div>
    )
};