
import React, {useState} from "react";
import {Radio, RadioGroup} from "@headlessui/react";
import { ChevronDownIcon, CheckCircleIcon } from '@heroicons/react/16/solid'
import {assets} from "../assets/assets";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {saveShippingAddress} from "../features/slices/cartSlice";

const mockdeliveryOptions = [
    { id: 1, shipping:"Standard", turnaround: "3-10 business days", price:"Free of charge for over $100.00"},
 //   { id: 2, shipping:"Express", turnaround: "3-5 business days", price:"$18.00"},
]

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

export default function CheckoutScreen() {
   const [deliveredMethod, setDeliveredMethod] = React.useState(mockdeliveryOptions[0]);

   const cart = useSelector((state) => state.cartSlice);
   const {shippingAddress} = cart;
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const [firstName, setFirstName] = React.useState('');
   const [lastName, setLastName] = useState("");
   const [company, setCompany] = React.useState('');
   const [address, setAddress] = React.useState(shippingAddress?.address || "");
   const [city, setCity] = React.useState(shippingAddress?.city || "");
   const [state, setState] = React.useState(shippingAddress?.state || "");
   const [postalCode, setPostalCode] = React.useState(shippingAddress?.postalCode || "");
   const [phoneNumber, setPhoneNumber] = React.useState(shippingAddress?.phoneNumber || "");
   const [country, setCountry] = React.useState(shippingAddress?.country || "");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({
            firstName: firstName,
            lastName: lastName,
            company: company,
            address: address,
            city: city,
            state: state,
            postalCode: postalCode,
            phoneNumber: phoneNumber,
            country: country,
        }));
        navigate("/summary")
    }

    return (
        <>
        <section className={"bg-gray-100"}>
        <div className={"p-1"}>
            <div className={"mx-auto max-w-2xl px-4 pb-22 pt-16 sm:px-6 lg:max-w-7xl lg:px-8"}>
                <h1 className={"text-3xl font-semibold"}>Checkout Shopping</h1>
                <form
                    onSubmit={onSubmitHandler}
                    className={"lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"}>

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
                                        required={true}
                                        onChange={(e) => setFirstName(e.target.value)}
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
                                        required={true}
                                        onChange={(e) => setLastName(e.target.value)}
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
                                    required={false}
                                    onChange={(e) => setCompany(e.target.value)}
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
                                    required={true}
                                    onChange={(e) => setAddress(e.target.value)}
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
                                        required={true}
                                        onChange={(e) => setCity(e.target.value)}
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
                                            required={true}
                                            onChange={(e) => setCountry(e.target.value)}
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
                                        required={true}
                                        onChange={(e) => setState(e.target.value)}
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
                                        required={true}
                                        onChange={(e) => setPostalCode(e.target.value)}
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
                                    required={true}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
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

                    {/* Order Summary*/}
                    <div className={"mb-4 lg:mb-4"}>
                        <h2 className={"text-3xl font-semibold"}>Order Summary</h2>

                        <div className={"mt-10 border-t border-gray-300 pt-10"}></div>

                        <div className={"mt-3 rounded-lg border border-gray-300 bg-white shadow-sm"}>
                            <h3 className={"sr-only"}>Items in your cart</h3>
                            <ul className={"divide-y divide-gray-300"}>
                                {mockShopping.map((items) => {
                                    return (
                                        <li key={items._id}
                                        className={"flex px-4 py-5 sm:px-5"}>
                                            <div className={"shrink-0"}>
                                                <img alt={items.name} src={items.image}
                                                className={"size-20 rounded-lg shadow-sm opacity-90 border border-b border-gray-100"}/>
                                            </div>

                                            <div className={"flex flex-1 flex-col ml-4"}>
                                                <div className={"flex"}>
                                                    <div className={"min-w-0 flex-1"}>
                                                        <h4 className={"text-base font-medium text-gray-700"}>
                                                            {items.name}
                                                        </h4>

                                                        <p className={"text-sm text-gray-500 mt-2"}>{items.brand}</p>
                                                        <p className={"text-sm text-gray-800 mt-2 font-semibold"}>${items.price}</p>
                                                    </div>

                                                    <div className={"ml-5"}>
                                                        <div className={"grid grid-cols-1"}>
                                                            {/* Add Quantity Later */}
                                                            <h4>Quantity: {items.countInStock}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </li>
                                    )
                                })}
                            </ul>

                            {/* Shipping Summary - Subtotal, Shipping, Taxes, Total */}
                            <dl className={"space-y-6 border-t border-gray-300 px-4 py-6 sm:px-6"}>
                                <div className={"flex items-center justify-between"}>
                                    <dt className={"text-sm"}>Subtotal</dt>
                                    <dd className={"text-sm text-gray-800 font-medium"}>$120.00</dd>
                                </div>

                                <div className={"flex items-center justify-between"}>
                                    <dt className={"text-sm"}>Shipping</dt>
                                    <dd className={"text-sm text-gray-800 font-medium"}>$6.00</dd>
                                </div>

                                <div className={"flex items-center justify-between"}>
                                    <dt className={"text-sm"}>Taxes</dt>
                                    <dd className={"text-sm text-gray-800 font-medium"}>$20.00</dd>
                                </div>

                                <div className={" border-t border-gray-300 pb-2"}></div>

                                    <div className={"flex items-center justify-between"}>

                                        <dt className={"text-lg text-gray-800 font-bold"}>Total</dt>
                                        <dd className={"text-lg text-gray-800 font-bold"}>$146.00</dd>
                                    </div>
                            </dl>

                            <div className={"border-t border-gray-300 py-6 px-4 sm:px-6"}>
                                <button
                                    type="submit"
                                    className="w-full rounded-lg border border-transparent bg-blue-500 opacity-80 px-4 py-3
                                    text-base font-medium text-white shadow-sm hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-2
                                    focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 "
                                >
                                    Confirm Purchase
                                </button>
                            </div>

                        </div>


                    </div>
                </form>
            </div>

        </div>
        </section>

        </>
    )
}