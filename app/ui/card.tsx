import clsx from 'clsx';
import {Button} from "@/app/ui/button";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "success" | "danger";
    loading?: boolean;
    icon?: React.ReactNode;
    shortcut?: string;
    disabledTooltip?: string | React.ReactNode;
}


export function NavBar({
                           variant = "primary",
                           loading,
                           icon,
                           children,
                           className,
                           ...rest
                       }: ButtonProps) {
    return (
        <nav className={"flex sticky  w-full px-16"}>
            <div>LOGO</div>

            <div className="flex grow justify-center gap-x-2">

                <div>Menu1</div>
                <div>Menu2</div>

            </div>

            <div className="flex justify-center gap-x-4">
                <Button variant={"outline"}>Login</Button>
                <Button>Register Now</Button>
            </div>

        </nav>
    );
}
