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


export function ProductFeatures({
                                    variant = "primary",
                                    loading,
                                    icon,
                                    children,
                                    className,
                                    ...rest
                                }: ButtonProps) {
    return (
        <div className={"flex w-full px-16 pt-8 flex-col justify-center"}>

            <p className={"text-3xl text-center py-4"}>Product Features</p>

            <div className={"flex"}>
                <div className={"flex justify-center basis-1/3 justify-center flex-col px-16"}>
                    <Image src={"./Settings-amico.svg"}
                           width={793}
                           height={909}
                           alt={""}/>
                    <p className={"text-xl text-center py-4"}>Evaluate before buy</p>
                    <p className={"text-center"}>Evaluate the hardware remote before making a decision to buy it.</p>
                </div>
                <div className={"flex justify-center basis-1/3 justify-center flex-col px-16"}>
                    <Image src={"./Time management-amico.svg"}
                           width={793}
                           height={909}
                           alt={""}/>
                    <p className={"text-xl text-center py-4"}>Save Time</p>
                    <p className={"text-center"}>Save time by evaluating already setup development boards.</p>

                </div>
                <div className={"flex justify-center basis-1/3 justify-center flex-col px-16"}>
                    <Image src={"./Interview-amico.svg"}
                           width={793}
                           height={909}
                           alt={""}/>
                    <p className={"text-xl text-center py-4"}>24/7 Support</p>
                    <p className={"text-center"}>We are 24/7 available to support you with your queries.</p>

                </div>
            </div>
        </div>
    );
}
