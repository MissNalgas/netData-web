import React from "react";

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
}

export default function Modal(props: ModalProps){
    const { children, isOpen } = props;
    const modalStyles = isOpen ? "fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-700 overflow-hidden z-50" : "hidden";

    return (
        <div className={modalStyles} style={{zIndex: 999}}>
            <div className="bg-white rounded-md p-4 max-w-xl">
                {children}
            </div>
        </div>
    );
}