import React from 'react';
import {assets} from "../assets/assets";

const mockShopping = [
    {
        _id: '1',
        name: 'Wooden Designer Chair',
        image: assets.chair1,
        description:
            'Contemporary wooden chair. Designed in Japan',
        brand: 'DWR',
        category: 'Furniture',
        price: 489.99,
        countInStock: 12,
        rating: 4.5,
        numReviews: 38,
    },
    {
        _id: '2',
        name: 'Grey Comfortable Arm Chair',
        image: assets.grey_comportable_armchair,
        description:
            'The Emmy speaks to multiple generations,” says Beamer. “Youthful yet mature, it resonates with a sense of modernism' +
            ' and tradition. It’s a place to feel at home.” Made in U.S.A.',
        brand: 'Emma Chair',
        category: 'Furniture',
        price: 599.99,
        countInStock: 7,
        rating: 4.0,
        numReviews: 40,
    },
    {
        _id: '3',
        name: 'Grey Lounge Sofa',
        image: assets.grey_sofa_isolated,
        description:
            'Charles and Ray Eames had ideas about making a better world, one in which things were designed to ' +
            'fulfill the practical needs of ordinary people and bring greater pleasure to our lives. Their Soft Pad ' +
            'Collection (1969) of luxuriously padded chairs evolved from their Aluminum Group Collection. With the addition ' +
            'of plush 2” thick cushions, the Soft Pad Collection retains the style of the earlier one but adds ' +
            'significant comfort. Backed by a 12-year manufacturer’s warranty.',
        brand: 'Emma Chair',
        category: 'Furniture',
        price: 3299.99,
        countInStock: 3,
        rating: 2.0,
        numReviews: 50,
    },
    {
        _id: '4',
        name: 'Modern Bedrooms',
        image: assets.modern_bedroom,
        description:
            'Modern bedroom developed for creature comfort. Designed in Japan',
        brand: 'Herman Miller',
        category: 'Furniture',
        price: 1299.99,
        countInStock:22,
        rating: 4.0,
        numReviews: 10,
    },
]

export default function OrderSummaryScreen() {
    return (
        <>
            <div className={"bg-white"}>
                <div className={"mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-24 lg:px-8"}>
                    <div className={"max-w-xl"}>
                        <h1 className={"font-medium text-5xl text-blue-900 hover:scale-y-125 ease-in-out transition-all duration-500"}>Thank you!</h1>
                        <p className={"mt-2 text-3xl font-bold tracking-tight sm:text-4xl"}>
                            Product is on the way
                        </p>

                        <dl className={"mt-10 text-sm font-medium"}>
                            <dt className={"text-gray-800 text-lg font-semibold"}>#Order Number</dt>
                            <dd className={"mt-2 text-lg text-gray-800 font-semibold"}>Come back to it later #1220034</dd>
                        </dl>
                    </div>

                    <div className={"mt-10 border-t border-gray-400"}>
                        <h2 className={"sr-only"}>Your Order</h2>

                        <h3 className={"sr-only"}>Items</h3>

                        {mockShopping.map((product) => (
                            <div className={"flex border-b border-gray-400 py-10 space-x-6"} key={product._id}>
                                <img
                                alt={product.name}
                                src={product.image}
                                className={"size-20 rounded-lg bg-gray-100 object-cover sm:size-32 shadow-md"}
                                />

                                <div className={"flex flex-auto flex-col"}>
                                    <h4 className={"font-medium text-gray-800"}>
                                        {product.name}
                                    </h4>

                                    <p className={"mt-2 text-sm text-gray-600"}>{product.brand}</p>

                                    <div className={"mt-6 flex flex-1 items-end"}>
                                        <dl className={"flex divide-x divide-gray-300 text-sm"}>
                                            <div className={"flex pr-4 sm:pr-6"}>
                                                <dt className={"font-medium text-gray-800"}>Quantity:</dt>
                                                <dd className={"ml-2 text-gray-800"}>{product.countInStock}</dd>
                                            </div>
                                            <div className={"flex pl-4 sm:pl-6"}>
                                                <dt className={"font-medium text-gray-800"}>Price:</dt>
                                                <dd className={"ml-2 text-gray-800"}>${product.price}</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className={"sm:ml-40 sm:pl-6"}></div>
                        <h3 className={"sr-only"}>Your Information</h3>

                        <h4 className={"sr-only"}>Addresses</h4>

                        <dl className={"grid grid-cols-2 gap-x-4 py-8 text-sm"}>
                            <div>
                                <dt className={"font-medium text-lg text-gray-800"}>Shipping Address</dt>
                                <dd className={"mt-2 text-gray-800"}>
                                    <address className={"mt-1"}>
                                        <span className={"block"}>Mia Mitsumori</span>
                                        <span className={"block"}>4924 Manassas Circle</span>
                                        <span className={"block"}>Brentwood, TN 37027</span>
                                    </address>

                                </dd>
                            </div>
                            <div className={"pr-6 sm:pr-6 "}>
                                <dt className={"font-medium text-lg text-gray-800"}>Shipping Method</dt>
                                <dd className={"mt-2 text-gray-800"}>
                                    <p>DHL</p>
                                    <p>Takes up to 3-5 business days</p>
                                </dd>
                            </div>
                        </dl>

                        <h3 className={"sr-only"}>Summary</h3>

                        <dl className={"space-y-6 border-t border-gray-400 pt-10 text-md"}>
                            <div className={"flex justify-between"}>
                                <dt className={"font-medium text-gray-800"}>Subtotal</dt>
                                <dd className={"text-gray-800"}>$40.00</dd>
                            </div>

                            <div className={"flex justify-between"}>
                                <dt className={"font-medium text-gray-800"}>Shipping</dt>
                                <dd className={"text-gray-800"}>$6.00</dd>
                            </div>

                            <div className={"flex justify-between"}>
                                <dt className={"font-medium text-gray-800"}>Taxes</dt>
                                <dd className={"text-gray-800"}>$8.00</dd>
                            </div>

                            <div className={"flex justify-between"}>
                                <dt className={"font-bold text-lg text-gray-800"}>Total</dt>
                                <dd className={"font-bold text-gray-800 text-lg"}>$54.00</dd>
                            </div>
                        </dl>
                    </div>


                </div>
            </div>
        </>
    )
}