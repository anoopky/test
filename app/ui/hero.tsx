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

            <div className={"basis-1/2 flex flex-col justify-center px-16"}>
                <h2 className={"text-5xl"}>
                    Hardware on Cloud
                </h2>
                <p className={"py-8 text-base/7"}>
                    Silicon Cloud Labs offers a diverse range of cloud-based hardware solutions,
                    which enables users to familiarize themselves with the hardware and its
                    underlying stack prior to making a purchase of the physical hardware.
                </p>
                <Button className={"w-32"}>Watch video</Button>
            </div>
            <div className={"basis-1/2"}>
                <Image
                    src="/Printed circuit board-amico.svg"
                    width={1000}
                    height={760}
                    className="hidden md:block"
                    alt="Screenshots of the dashboard project showing desktop version"
                />
            </div>


        </div>
    );
}
