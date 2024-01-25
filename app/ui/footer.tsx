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


export function Footer({
                           variant = "primary",
                           loading,
                           icon,
                           children,
                           className,
                           ...rest
                       }: ButtonProps) {
    return (
        <div className={"flex w-full px-16 bg-gray-200 pt-8"}>

            <div className={"flex basis-1/4 h-32 "}>
                <p>Information</p>
                <br/>
                <ul>
                    <li>about us</li>
                    <li>join us</li>
                </ul>
            </div>

            <div className={"flex basis-1/4 h-32 "}>
                <p>Legal</p>
                <br/>
                <ul>
                    <li>terms and condition</li>
                    <li>privacy policy</li>
                </ul>
            </div>


            <div className={"flex basis-1/4 h-32"}>
                <p>Support</p>
                <br/>
                <ul>
                    <li>faq</li>
                    <li>contact</li>
                </ul>
            </div>


            <div className={" flex basis-1/4 h-32"}>
                <p>SOCIAL MEDIA</p>
                <br/>
                <ul>
                    <li>reddit</li>
                    <li>github</li>
                    <li>youtube</li>
                    <li>twitter</li>
                </ul>
            </div>

        </div>
    );
}
