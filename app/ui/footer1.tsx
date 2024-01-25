import clsx from 'clsx';
import {Button} from "@/app/ui/button";
import Image from 'next/image';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "success" | "danger";
    loading?: boolean;
    icon?: React.ReactNode;
    shortcut?: string;
    disabledTooltip?: string | React.ReactNode;
}


export function FooterSmall({
                           variant = "primary",
                           loading,
                           icon,
                           children,
                           className,
                           ...rest
                       }: ButtonProps) {
    return (
        <div className={"flex w-full px-16 bg-gray-300 py-8"}>
            Silicon cloud labs Copyright © 1900-2024

        </div>
    );
}
