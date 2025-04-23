
import React from 'react';

const benefits = [
    {
        name: 'Free shipping for purchases over $100',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-shipping-simple.svg',
        description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
        name: '1-year warranty',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-warranty-simple.svg',
        description: "If it breaks in the first 1 years we'll replace it. After that you're on your own though.",
    },
    {
        name: 'Exchanges',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-exchange-simple.svg',
        description:
            "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
]

export default function ShippingFooter() {
    return (
        <div className={"bg-white"}>
            <div className={"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-6"}>
                <div className={"rounded-xl bg-gray-200 px-6 py-16 opacity-85 shadow-md sm:p-16"}>
                    <div className={"mx-auto max-w-xl h-auto lg:max-w-none inset-0 relative"}>
                        <div className={"text-center"}>
                            <h2 className={"text-2xl font-bold tracking-tight text-gray-700"}>
                                Contemporary design at an affortable price
                            </h2>
                        </div>

                        <ul className={"mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3"}>
                            {benefits.map((incentive) => {
                                return (
                                    <li key={incentive.id}>
                                    <div
                                    className={"text-center sm:flex sm:text-left lg:block lg:text-center"}>
                                        <div className={"sm:shrink-0"}>
                                            <div className={"flow-root"}>
                                                <img alt={""} src={incentive.imageSrc} className={"mx-auto size-16"} />
                                            </div>
                                        </div>
                                        <div className={"mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6"}>
                                            <h3 className={"text-sm font-medium text-gray-800"}>{incentive.name}</h3>
                                            <p className={"mt-2 text-sm text-gray-500"}>{incentive.description}</p>
                                        </div>
                                    </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}