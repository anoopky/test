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


export function Hero({
                           variant = "primary",
                           loading,
                           icon,
                           children,
                           className,
                           ...rest
                       }: ButtonProps) {
    return (
        <div className={"flex w-full"}>

            <div> Col1 </div>
            <div> Image 1</div>

        </div>
    );
}
