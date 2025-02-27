export const Button = ({ onClick, isLoading, children }: { onClick: () => void, isLoading?: boolean, children: React.ReactNode }) => (
    <button
        onClick={onClick}
        className="flex items-center justify-center w-[108px] h-[40px] p-2 bg-primary text-white rounded-lg"
        disabled={isLoading}
    >
        {isLoading ? (
            <div className="w-[25px] h-[25px] border border-b-transparent rounded-full border-white animate-spin"/>
        ) : (
            children
        )}
    </button>
);
