'use client';
import clsx from 'clsx';
import {Button} from "@/app/ui/button";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "success" | "danger";
    loading?: boolean;
    icon?: React.ReactNode;
    shortcut?: string;
    disabledTooltip?: string | React.ReactNode;
}

import {Fragment, useState} from 'react';
import {Dialog, RadioGroup, Transition} from '@headlessui/react';
import {ShieldCheckIcon, XMarkIcon} from '@heroicons/react/24/outline';
import {
    CheckIcon,
    QuestionMarkCircleIcon,
    StarIcon,
} from '@heroicons/react/20/solid';
import Image from "next/image";

const product = {
    name: 'Arduino UNO',
    price: '12Gb RAM',
    rating: 3.9,
    href: '#',
    imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-quick-preview-03-detail.jpg',
    imageAlt:
        'Interior of light green canvas bag with padded laptop sleeve and internal organization pouch.',
    sizes: [
        {name: '16 GB RAM', description: 'ARM ubuntu 22.0 Instance '},
    ],
};

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

export function DevCard() {

    return (
        <div className="basis-1/2 border rounded-md p-4 w-full">
            <div className={"flex w-full"}>
                <div className={"basis-1/3"}>
                    <Image
                        height={500}
                        width={300}
                        src={"https://3ba1f5b2.rocketcdn.me/wp-content/uploads/2019/03/Difference-Between-Arduino-and-Elegoo-1024x726.png"}
                        alt={product.imageAlt}
                        className="object-cover object-center"
                    />
                </div>
                <div className={"basis-2/3 px-4 w-full"}>
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                        My Arduino UNO test
                    </h2>
                    <p className={"text-sm mt-1 text-gray-500"}>Arduino UNO</p>
                    {/*<h2 className="text-xs mt-2 text-gray-500">*/}
                    {/*    {"3 days ago."}*/}
                    {/*</h2>*/}

                    <div className="mt-4 flex items-center">
                        <CheckIcon
                            className="h-5 w-5 flex-shrink-0 text-green-500"
                            aria-hidden="true"
                        />
                        <p className="ml-2 font-medium text-gray-500">
                            Ready
                        </p>
                    </div>

                    <div>
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                    CPU
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                    RAM
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                    Storage
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    12GB
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    1v
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                   100GB
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    {/*<div*/}
                    {/*    className="flex justify-between flex-col mt-4 w-full rounded-lg border border-gray-300 p-4 focus:outline-none">*/}
                    {/*    <p className="text-base font-medium text-gray-900">*/}
                    {/*        {"16 GB RAM"}*/}
                    {/*    </p>*/}
                    {/*    <p className="mt-1 w-full text-sm text-gray-500 inline">*/}
                    {/*        {"ARM ubuntu 22.0 Instance Linux core 12.03"}*/}
                    {/*    </p>*/}
                    {/*</div>*/}

                    <div className="mt-6 float-right">
                        <Button className={"px-8"}>view</Button>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}
