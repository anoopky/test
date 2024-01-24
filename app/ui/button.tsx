import clsx from 'clsx';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline"  | "danger";
    loading?: boolean;
    icon?: React.ReactNode;
    shortcut?: string;
    disabledTooltip?: string | React.ReactNode;
}


function LoadingSpinner({className}: { className?: string }) {
    return (
        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    );
}

export function Button({
                           variant = "primary",
                           loading,
                           icon,
                           children,
                           className,
                           ...rest
                       }: ButtonProps) {
    return (
        <button
            className={clsx(
                "inline-flex h-10 px-4 rounded-md border text-sm",
                "items-center justify-center",
                {
                    "bg-indigo-500 text-white hover:bg-indigo-600":
                        variant === "primary",
                    "border-indigo-300 text-indigo-500 hover:border-indigo-500":
                        variant === "outline",
                    "bg-red-600 text-white hover:bg-red-700":
                        variant === "danger"
                },
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
                "transition-colors ease-in-out",
                className,
            )}
            {...rest}
        >
            {loading ? <LoadingSpinner/> : icon ? icon : null}
            {children}
        </button>
    );
}
