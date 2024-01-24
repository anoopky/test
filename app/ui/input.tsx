import clsx from 'clsx';
import {Button} from "@/app/ui/button";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    variant?: "primary" | "secondary" | "outline" | "success" | "danger";
    loading?: boolean;
    icon?: React.ReactNode;
    shortcut?: string;
    disabledTooltip?: string | React.ReactNode;
}


export function Input({
                          variant = "primary",
                          loading,
                          icon,
                          children,
                          className,
                          ...rest
                      }: ButtonProps) {
    return (

        <div>
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
            <div className="relative mt-2 rounded-md shadow-sm">

                {/*<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">*/}
                {/*    <span className="text-gray-500 sm:text-sm">$</span>*/}
                {/*</div>*/}

                <input type="text"
                       name="price"
                       id="price"
                       className="block w-full rounded-md border-0 py-1.5  pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                       placeholder="0.00"/>
            </div>
        </div>
    );
}
