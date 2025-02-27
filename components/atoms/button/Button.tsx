import React from "react";

type TButtonProps = {
    onClick: () => void,
    isLoading?: boolean,
    children: React.ReactNode ,
    className? : string
}

export const Button = ({ onClick, isLoading, children , className }: TButtonProps) => (
    <button
        onClick={onClick}
        className={`flex items-center justify-center w-[108px] h-[40px] p-2 bg-primary text-white rounded-lg ${className ?? ''}`}
        disabled={isLoading}
    >
        {isLoading ? (
            <div className="w-[25px] h-[25px] border border-b-transparent rounded-full border-white animate-spin"/>
        ) : (
            children
        )}
    </button>
);
