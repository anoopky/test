/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

'use client';
import {Disclosure, RadioGroup, Tab} from '@headlessui/react';
import {PaperClipIcon, StarIcon} from '@heroicons/react/20/solid';
import {HeartIcon, MinusIcon, PlusIcon} from '@heroicons/react/24/outline';
import {Button} from "@/app/ui/button";

const product = {
    name: 'Zip Tote Basket',
    price: '$140',
    rating: 4,
    images: [
        {
            id: 1,
            name: 'Angled view',
            src: 'https://upload.wikimedia.org/wikipedia/commons/7/74/ArduinoUno.svg',
            alt: 'Angled front view with bag zipped and handles upright.',
        },

        {
            id: 1,
            name: 'Angled view',
            src: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Raspberry_Pi_3_illustration.svg',
            alt: 'Angled front view with bag zipped and handles upright.',
        },

        {
            id: 1,
            name: 'Angled view',
            src: 'https://forum.fritzing.org/uploads/default/original/2X/d/d832e8028b58e7a2a0e3161afa08d1fd84b51135.svg',
            alt: 'Angled front view with bag zipped and handles upright.',
        },

    ],
    colors: [
        {
            name: 'Washed Black',
            bgColor: 'bg-gray-700',
            selectedColor: 'ring-gray-700',
        },
        {name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400'},
        {
            name: 'Washed Gray',
            bgColor: 'bg-gray-500',
            selectedColor: 'ring-gray-500',
        },
    ],
    description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
    details: [
        {
            name: 'Features',
            items: [
                'Multiple strap configurations',
                'Spacious interior with top zip',
                'Leather handle and tabs',
                'Interior dividers',
                'Stainless strap loops',
                'Double stitched construction',
                'Water-resistant',
            ],
        },
        // More sections...
    ],
};

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

export function ProductPage() {
    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                {/* Image gallery */}
                <Tab.Group as="div" className="flex flex-col-reverse">
                    {/* Image selector */}
                    <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                        <Tab.List className="grid grid-cols-4 gap-6">
                            {product.images.map((image) => (
                                <Tab
                                    key={image.id}
                                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                >
                                    {({selected}) => (
                                        <>
                                            <span className="sr-only">{image.name}</span>
                                            <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img
                              src={image.src}
                              alt=""
                              className="h-full w-full object-cover object-center"
                          />
                        </span>
                                            <span
                                                className={classNames(
                                                    selected ? 'ring-indigo-500' : 'ring-transparent',
                                                    'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </>
                                    )}
                                </Tab>
                            ))}
                        </Tab.List>
                    </div>

                    <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
                        {product.images.map((image) => (
                            <Tab.Panel key={image.id}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="h-full w-full object-cover object-center sm:rounded-lg"
                                />
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>

                {/* Product info */}
                <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        {product.name}
                    </h1>

                    <div className="mt-3">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">
                            {product.price}
                        </p>
                    </div>

                    {/* Reviews */}
                    <div className="mt-3">
                        <h3 className="sr-only">Reviews</h3>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                        key={rating}
                                        className={classNames(
                                            product.rating > rating
                                                ? 'text-indigo-500'
                                                : 'text-gray-300',
                                            'h-5 w-5 flex-shrink-0'
                                        )}
                                        aria-hidden="true"
                                    />
                                ))}
                            </div>
                            <p className="sr-only">{product.rating} out of 5 stars</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="sr-only">Description</h3>

                        <div
                            className="space-y-6 text-base text-gray-700"
                            dangerouslySetInnerHTML={{__html: product.description}}
                        />
                    </div>

                    <form className="mt-6">
                        <div className="mt-10 flex gap-4">
                            <Button className={'basis-1/2'} variant={"outline"}>
                                Buy Now
                            </Button>

                            <Button className={'basis-1/2'}>
                                Try now
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-4">
                <div className="px-4 py-6 sm:px-6">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                        Applicant Information
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                        Personal details and application.
                    </p>
                </div>
                <div className="border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">Full name</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Margot Foster
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">
                                Application for
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Backend Developer
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">Email address</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                margotfoster@example.com
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">
                                Salary expectation
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                $120,000
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">About</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                                proident. Irure nostrud pariatur mollit ad adipisicing
                                reprehenderit deserunt qui eu.
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Attachments
                            </dt>
                            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <ul
                                    role="list"
                                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                                >
                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                        <div className="flex w-0 flex-1 items-center">
                                            <PaperClipIcon
                                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        resume_back_end_developer.pdf
                      </span>
                                                <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a
                                                href="#"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                Download
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                        <div className="flex w-0 flex-1 items-center">
                                            <PaperClipIcon
                                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        coverletter_back_end_developer.pdf
                      </span>
                                                <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a
                                                href="#"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                Download
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
