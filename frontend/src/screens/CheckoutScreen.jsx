
import React, {useState} from "react";
import {Radio, RadioGroup} from "@headlessui/react";
import { ChevronDownIcon, CheckCircleIcon } from '@heroicons/react/16/solid'

const mockdeliveryOptions = [
    { id: 1, shipping:"Standard", turnaround: "3-10 business days", price:"$6.00"},
    { id: 2, shipping:"Express", turnaround: "3-5 business days", price:"$18.00"},
]

export default function CheckoutScreen() {
   const [deliveredMethod, setDeliveredMethod] = React.useState(mockdeliveryOptions[0]);

    return (
        <>
        <section className={"bg-gray-100"}>
        <div className={"p-1"}>
            <div className={"mx-auto max-w-2xl px-4 pb-22 pt-16 sm:px-6 lg:max-w-7xl lg:px-8"}>
                <h1 className={"text-3xl font-semibold"}>Checkout Shopping</h1>
                <form className={"lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"}>

                    <div className={"mt-10 border-t border-gray-300 pt-10"}>
                        <h2 className={"text-xl font-medium text-gray-800"}>Shipping Information</h2>

                        {/* Shipping form input First Name, Last Name, Address, Phone, ZipCode Country*/}
                        <div className={"mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"}>
                            <div>
                                <label htmlFor={"first-name"} className={"block text-sm/6 font-medium text-gray-800"}>
                                    First name
                                </label>
                                <div className={"mt-2"}>
                                    <input
                                        id="first-name"
                                        name={"first-name"}
                                        type={"text"}
                                        autoComplete={"given-name"}
                                        placeholder={"Enter your first name"}
                                        className={"block w-full rounded-md bg-white px-3 py-2 text-base text-gray-800 outline outline-1 -outline-offset-1 outline-gray-400" +
                                            "placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-800 sm:text-sm/6"}/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor={"last-name"} className={"block text-sm/6 font-medium text-gray-800"}>
                                    Last name
                                </label>
                                <div className={"mt-2"}>
                                    <input
                                        id="last-name"
                                        name={"last-name"}
                                        type={"text"}
                                        autoComplete={"given-name"}
                                        placeholder={"Enter your last name"}
                                        className={"block w-full rounded-md bg-white px-3 py-2 text-base text-gray-800 outline outline-1 -outline-offset-1 outline-gray-400" +
                                            "placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-800 sm:text-sm/6"}/>
                                </div>
                            </div>
                        </div>

                        <div className={"mt-2 sm:col-span-2"}>
                            <label htmlFor={"company"} className={"block text-sm/6 font-medium text-gray-800"}>
                                Company
                            </label>
                            <div className={"mt-2"}>
                                <input
                                    id="company"
                                    name={"company"}
                                    type={"text"}
                                    placeholder={"Enter your company"}
                                    className={"block w-full rounded-md bg-white px-3 py-2 text-base text-gray-800 outline outline-1 -outline-offset-1 outline-gray-400" +
                                        "placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-800 focus:ring-2  sm:text-sm/6"}
                                />
                            </div>
                        </div>

                        <div className={"mt-2 sm:col-span-2"}>
                            <label htmlFor={"address"} className={"block text-sm/6 font-medium text-gray-800"}>
                                Address
                            </label>
                            <div className={"mt-2"}>
                                <input
                                    id="address"
                                    name={"address"}
                                    type={"text"}
                                    placeholder={"Enter your address"}
                                    className={"block w-full rounded-md bg-white px-3 py-2 text-base text-gray-800 outline outline-1 -outline-offset-1 outline-gray-400" +
                                        "placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-800 sm:text-sm/6"}
                                />
                            </div>
                        </div>

                        <div className={"mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"}>
                            <div>
                                <label htmlFor={"City"} className={"block text-sm/6 font-medium text-gray-800"}>
                                    City
                                </label>
                                <div className={"mt-2"}>
                                    <input
                                        id="city"
                                        name={"city"}
                                        type={"text"}
                                        autoComplete={"given-name"}
                                        placeholder={"Enter City"}
                                        className={"block w-full rounded-md bg-white px-3 py-2 text-base text-gray-800 outline outline-1 -outline-offset-1 outline-gray-400" +
                                            "placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-800 sm:text-sm/6"}/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor={"last-name"} className={"block text-sm/6 font-medium text-gray-800"}>
                                    Country
                                </label>
                                <div className={"mt-2 grid grid-cols-1"}>
                                    <select id={"country"}
                                            name={"country"}
                                            autoComplete={"country-name"}
                                            className={"col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-800 outline outline-1 " +
                                                "-outline-offset-1 outline-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-800 sm:text-sm/6"}
                                    >
                                        <option>United States</option>
                                        <option>Japan</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                    <ChevronDownIcon
                                    aria-hidden={true}
                                    className={"pointer-events-none col-start-1 row-start-1 mr-2 size-4 self-center justify-self-end text-gray-600 sm:size-5"}/>
                                </div>
                            </div>
                        </div>

                        <div className={"mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"}>
                            <div>
                                <label htmlFor={"State"} className={"block text-sm/6 font-medium text-gray-800"}>
                                    State
                                </label>
                                <div className={"mt-2"}>
                                    <input
                                        id="state"
                                        name={"state"}
                                        type={"text"}
                                        autoComplete={"given-name"}
                                        placeholder={"Enter State"}
                                        className={"block w-full rounded-md bg-white px-3 py-2 text-base text-gray-800 outline outline-1 -outline-offset-1 outline-gray-400" +
                                            "placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-800 sm:text-sm/6"}/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor={"Postal Code"} className={"block text-sm/6 font-medium text-gray-800"}>
                                    Postal Code
                                </label>
                                <div className={"mt-2"}>
                                    <input
                                        id="postal_code"
                                        name={"postal_code"}
                                        type={"text"}
                                        autoComplete={"given-name"}
                                        placeholder={"Enter ZipCode"}
                                        className={"block w-full rounded-md bg-white px-3 py-2 text-base text-gray-800 outline outline-1 -outline-offset-1 outline-gray-400" +
                                            "placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-800 sm:text-sm/6"}/>
                                </div>
                            </div>
                        </div>

                        <div className={"mt-2 sm:col-span-2"}>
                            <label htmlFor={"phone"} className={"block text-sm/6 font-medium text-gray-800"}>
                                Phone Number
                            </label>
                            <div className={"mt-2"}>
                                <input
                                    id="phone_number"
                                    name={"phone_number"}
                                    type={"text"}
                                    placeholder={"Enter your phone number"}
                                    className={"block w-full rounded-md bg-white px-3 py-2 text-base text-gray-800 outline outline-1 -outline-offset-1 outline-gray-400" +
                                        "placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-800 sm:text-sm/6"}
                                />
                            </div>
                        </div>

                        {/* -Delivery Option */}
                        <div className={"mt-10 border-t border-gray-300 pt-10 pb-6"}>
                            <fieldset>
                                <legend className={"text-lg font-medium text-gray-800"}>Delivery Method</legend>
                                <RadioGroup
                                value={deliveredMethod}
                                onChange={setDeliveredMethod}
                                className={"mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"}>

                                    {mockdeliveryOptions.map((deliver) => {
                                        return (
                                            <Radio value={deliver.id} key={deliver.id} aria-label={deliver.shipping}
                                                   aria-description={`${deliver.turnaround} for ${deliver.price}`}
                                            className={"group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none " +
                                                "data-[checked]:border-transparent data-[focus]:ring-2 data-[focus]:ring-indigo-800"}>
                                                <span className={"flex flex-1"}>
                                                    <span className={"flex flex-col"}>
                                                        <span className={"block text-sm font-medium text-gray-800"}>{deliver.shipping}</span>
                                                        <span className={"mt-1 flex items-center text-sm text-gray-800"}>{deliver.turnaround}</span>
                                                        <span className={"mt-6 text-sm font-medium text-gray-800"}>{deliver.price}</span>
                                                    </span>
                                                </span>

                                                <CheckCircleIcon
                                                aria-hidden="true"
                                                className={"size-6 text-blue-800 group-[&:not([data-checked])]:hidden"}/>



                                            </Radio>
                                        )
                                    })}
                                </RadioGroup>


                            </fieldset>
                        </div>


                        </div>
                </form>
            </div>

        </div>
        </section>

        </>
    )
}