
import React from 'react';
import {ShoppingBagIcon, CheckIcon} from "@heroicons/react/20/solid";
import {Popover, PopoverButton, PopoverPanel} from "@headlessui/react";
import {assets} from "../assets/assets";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";


// const mockShopping = [
//     {
//         _id: '1',
//         name: 'Wooden Designer Chair',
//         image: assets.chair1,
//         description:
//             'Contemporary wooden chair. Designed in Japan',
//         brand: 'DWR',
//         category: 'Furniture',
//         price: 489.99,
//         countInStock: 12,
//         rating: 4.5,
//         numReviews: 38,
//     },
//     {
//         _id: '2',
//         name: 'Grey Comfortable Arm Chair',
//         image: assets.grey_comportable_armchair,
//         description:
//             'The Emmy speaks to multiple generations,” says Beamer. “Youthful yet mature, it resonates with a sense of modernism' +
//             ' and tradition. It’s a place to feel at home.” Made in U.S.A.',
//         brand: 'Emma Chair',
//         category: 'Furniture',
//         price: 599.99,
//         countInStock: 7,
//         rating: 4.0,
//         numReviews: 40,
//     },
//     {
//         _id: '3',
//         name: 'Grey Lounge Sofa',
//         image: assets.grey_sofa_isolated,
//         description:
//             'Charles and Ray Eames had ideas about making a better world, one in which things were designed to ' +
//             'fulfill the practical needs of ordinary people and bring greater pleasure to our lives. Their Soft Pad ' +
//             'Collection (1969) of luxuriously padded chairs evolved from their Aluminum Group Collection. With the addition ' +
//             'of plush 2” thick cushions, the Soft Pad Collection retains the style of the earlier one but adds ' +
//             'significant comfort. Backed by a 12-year manufacturer’s warranty.',
//         brand: 'Emma Chair',
//         category: 'Furniture',
//         price: 3299.99,
//         countInStock: 3,
//         rating: 2.0,
//         numReviews: 50,
//     },
//     {
//         _id: '4',
//         name: 'Modern Bedrooms',
//         image: assets.modern_bedroom,
//         description:
//             'Modern bedroom developed for creature comfort. Designed in Japan',
//         brand: 'Herman Miller',
//         category: 'Furniture',
//         price: 1299.99,
//         countInStock:22,
//         rating: 4.0,
//         numReviews: 10,
//     },
//     ]


export default function CartPopOver() {
    const cart = useSelector((state) => state.cartSlice)
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const {cartItems} = cart;

    const checkoutHandler = () => {
        if (user) {
            navigate("/checkout");
        } else {
            navigate("/login");
        }
    }

    return (
        <>
            <Popover className="ml-4 flow-root text-sm lg:relative lg: ml-8">
                <PopoverButton className={"group -m-2 flex items-center p-2"}>
                    <CheckIcon
                        aria-hidden={true}
                        className={"size-6 shrink-0 text-gray-600 group-hover:text-gray-500"} />
                    {/*<span className={"ml-2 text-sm font-medium text-gray-600 group-hover:text-gray-800"}>*/}
                    {/*    {cartItems.reduce(((acc, item) => acc + item.qty ),0)}</span>*/}
                    <span className={"sr-only"}>Items in cart, view bag</span>
                </PopoverButton>
                <PopoverPanel transition={"true"}
                className={"absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg transition data-[closed]:opacity-0" +
                    "data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in sm:px-2 " +
                    "lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black/5"}>
                    <h2 className={"sr-only"}>Shopping Cart</h2>

                    <form className={"mx-auto max-w-2xl px-4"}>
                        <ul role={"list"} className={"divide-y divide-gray-300"}>
                            {cartItems.map((product) => {
                                return (
                                    <li key={product._id} className={"flex items-center py-6"}>
                                       <img
                                        alt={product.name}
                                        src={product.image}
                                        className={"size-16 flex-none rounded-md border border-gray-300"}
                                        />

                                        <div className={"ml-4 flex-auto"}>
                                            <h3 className={"font-medium text-gray-800"}>
                                                {product.name}
                                            </h3>
                                            <p className={"text-gray-600"}>{product.brand}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>

                        <Link to={"/checkout"}>
                            <button type={"submit"}
                            className={"w-full rounded-md border border-transparent bg-emerald-700 text-white px-4 py-2 text-md font-medium shadow-sm" +
                                "hover: bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-50"}
                            >
                            Checkout
                            </button>
                        </Link>

                        <p className={"mt-6 text-center"}>
                            <a href={"/cart"}
                            className={"text-sm font-medium text-indigo-700 hover:text-indigo-400"}>
                                View Shopping Bag
                            </a>
                        </p>

                    </form>
                </PopoverPanel>
            </Popover>
        </>
    )
}