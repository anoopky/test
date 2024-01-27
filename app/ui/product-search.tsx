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
import {Product} from "@/app/ui/product";

const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            {value: 'white', label: 'White'},
            {value: 'beige', label: 'Beige'},
            {value: 'blue', label: 'Blue'},
            {value: 'brown', label: 'Brown'},
            {value: 'green', label: 'Green'},
            {value: 'purple', label: 'Purple'},
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            {value: 'new-arrivals', label: 'All New Arrivals'},
            {value: 'tees', label: 'Tees'},
            {value: 'crewnecks', label: 'Crewnecks'},
            {value: 'sweatshirts', label: 'Sweatshirts'},
            {value: 'pants-shorts', label: 'Pants & Shorts'},
        ],
    },
    {
        id: 'sizes',
        name: 'Sizes',
        options: [
            {value: 'xs', label: 'XS'},
            {value: 's', label: 'S'},
            {value: 'm', label: 'M'},
            {value: 'l', label: 'L'},
            {value: 'xl', label: 'XL'},
            {value: '2xl', label: '2XL'},
        ],
    },
];
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

export function ProductSearch() {

    return (
        <div className={"flex w-full "}>
            <div className={"basis-1/4 "}>
                <div className="hidden lg:block">
                    <form className="space-y-10 divide-y divide-gray-200">
                        {filters.map((section, sectionIdx) => (
                            <div
                                key={section.name}
                                className={sectionIdx === 0 ? null : 'pt-10'}
                            >
                                <fieldset>
                                    <legend className="block text-sm font-medium text-gray-900">
                                        {section.name}
                                    </legend>
                                    <div className="space-y-3 pt-6">
                                        {section.options.map((option, optionIdx) => (
                                            <div
                                                key={option.value}
                                                className="flex items-center"
                                            >
                                                <input
                                                    id={`${section.id}-${optionIdx}`}
                                                    name={`${section.id}[]`}
                                                    defaultValue={option.value}
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label
                                                    htmlFor={`${section.id}-${optionIdx}`}
                                                    className="ml-3 text-sm text-gray-600"
                                                >
                                                    {option.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </fieldset>
                            </div>
                        ))}
                    </form>
                </div>
            </div>
            <div className={"grid grid-cols-3 gap-16 "}>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
        // <div className="border rounded-md shadow p-4 w-full">
        //     <div className={"flex w-full"}>
        //         <div className={""}>
        //             <Image
        //                 height={500}
        //                 width={300}
        //                 src={"https://3ba1f5b2.rocketcdn.me/wp-content/uploads/2019/03/Difference-Between-Arduino-and-Elegoo-1024x726.png"}
        //                 alt={product.imageAlt}
        //                 className="object-cover object-center"
        //             />
        //         </div>
        //         <div className={"px-4 w-full"}>
        //             <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
        //                 {product.name}
        //             </h2>
        //
        //             <h2 className="text-sm text-gray-500">
        //                 {"3 days ago."}
        //             </h2>
        //
        //             <div className="mt-4 flex items-center">
        //                 <CheckIcon
        //                     className="h-5 w-5 flex-shrink-0 text-green-500"
        //                     aria-hidden="true"
        //                 />
        //                 <p className="ml-2 font-medium text-gray-500">
        //                     Ready
        //                 </p>
        //             </div>
        //
        //             <div
        //                 className="flex justify-between flex-col mt-4 w-full rounded-lg border border-gray-300 p-4 focus:outline-none">
        //                 <p className="text-base font-medium text-gray-900">
        //                     {"16 GB RAM"}
        //                 </p>
        //                 <p className="mt-1 w-full text-sm text-gray-500 inline">
        //                     {"ARM ubuntu 22.0 Instance Linux core 12.03"}
        //                 </p>
        //             </div>
        //
        //             <div className="mt-6 float-right">
        //                 <Button className={"px-8"}>view</Button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
        ;
}
