import clsx from 'clsx';
import Image from "next/image";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "danger";
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

export function Product({
                            variant = "primary",
                            loading,
                            icon,
                            children,
                            className,
                            ...rest
                        }: ButtonProps) {
    return (
        <div className={"border rounded-md p-4"}>
            <Image
                height={700}
                width={300}
                // src={"https://3ba1f5b2.rocketcdn.me/wp-content/uploads/2019/03/Difference-Between-Arduino-and-Elegoo-1024x726.png"}
                src={"https://forum.fritzing.org/uploads/default/original/2X/d/d832e8028b58e7a2a0e3161afa08d1fd84b51135.svg"}
                alt={"product.imageAlt"}
                className="object-cover object-center"
            />
            <div className={"pl-2 pt-4"}>
                <p className={"text-sm font-medium text-gray-900"}>
                    Arduino UNO
                </p>
                <p className={"text-sm text-gray-500"}>
                    Long detail about the product here
                </p>
            </div>
        </div>
    );
}
