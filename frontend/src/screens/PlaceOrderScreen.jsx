
import React, {useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useCreateOrderMutation} from "../features/slices/orderApiSlice";
import CustomLoader from "../components/CustomLoader";
import {Message} from "../components/Message";

import {toast} from "react-toastify";
import {clearCartItems} from "../features/slices/cartSlice";


export default function PlaceOrderScreen() {
    const cart = useSelector((state) => state.cartSlice);
    const {cartItems} = cart;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [createOrder, {isLoading, error}] = useCreateOrderMutation();

    const placeOrderHandler = async () => {
        try {
            const res = await createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemsPrice: cart.itemsPrice,
                shippingPrice: cart.shippingPrice,
                taxPrice: cart.taxPrice,
                totalPrice: cart.totalPrice,
            }).unwrap();
            dispatch(clearCartItems());
            toast.success("Order created successfully");

            navigate(`/orders/${res._id}`);
        } catch (error) {
            toast.error(error)
        }
    }
    return (
        <>
                <section className={"bg-gray-100"}>
                    <div className={"p-1"}>
                        <div className={"mx-auto max-w-2xl px-4 pb-22 pt-16 sm:px-6 lg:max-w-7xl lg: px-8"}>

                            <div
                                className={"items-center py-2 mb-8 max-w-96 bg-gray-200  border-t-4 shadow-md rounded-lg p-4"}>
                                <h1 className={"text-2xl mb-2 font-semibold"}>Shipping Information</h1>
                                <div className={"flex flex-row justify-start gap-x-2"}>
                                    <p className={" text-gray-800 items-center font-medium"}>{cart.shippingAddress.firstName}</p>
                                    <p className={" text-gray-800 items-center font-semibold"}>{cart.shippingAddress.lastName}</p>
                                </div>
                                <p className={"text-gray-500 items-center font-semibold"}>{cart.shippingAddress.company}</p>
                                <p className={"text-gray-500 items-center font-semibold"}>{cart.shippingAddress.address}</p>
                                <p className={"text-gray-500 items-center font-semibold"}>{cart.shippingAddress.city}</p>
                                <div className={"flex flex-row justify-start gap-x-2"}>
                                    <p className={"text-gray-500 items-center font-medium"}>{cart.shippingAddress.state},</p>
                                    <p className={"text-gray-500 items-center font-medium"}>{cart.shippingAddress.postalCode}</p>
                                </div>
                            </div>


                            {/* Order Summary*/}
                            <section className={"mb-4 lg:mb-4"}>
                                <h2 className={"text-3xl font-semibold"}>Order Summary</h2>

                                <div className={"mt-10 border-t border-gray-300 pt-10"}></div>

                                <div className={"mt-3 rounded-lg border border-gray-300 bg-white shadow-sm"}>
                                    <h3 className={"sr-only"}>Items in your cart</h3>
                                    <ul key={"cartItemID"} className={"divide-y divide-gray-300"}>
                                        {cartItems.map((items) => {
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
                                                                    <h4>Quantity: {items.qty}</h4>
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
                                            <dd className={"text-sm text-gray-800 font-medium"}>
                                                ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                                            </dd>
                                        </div>

                                        <div className={"flex items-center justify-between"}>
                                            <dt className={"text-sm"}>Shipping</dt>
                                            <dd className={"text-sm text-gray-800 font-medium"}>${cart.shippingPrice}</dd>
                                        </div>

                                        <div className={"flex items-center justify-between"}>
                                            <dt className={"text-sm"}>Taxes</dt>
                                            <dd className={"text-sm text-gray-800 font-medium"}>${cart.taxPrice}</dd>
                                        </div>

                                        <div className={" border-t border-gray-300 pb-2"}></div>

                                        <div className={"flex items-center justify-between"}>

                                            <dt className={"text-lg text-gray-800 font-bold"}>Total</dt>
                                            <dd className={"text-lg text-gray-800 font-bold"}>${cart.totalPrice}</dd>
                                        </div>
                                    </dl>

                                    <div className={"border-t border-gray-300 py-6 px-4 sm:px-6"}>
                                        <button
                                            type="submit"
                                            onClick={placeOrderHandler}
                                            className="w-9/12 rounded-lg border border-transparent ml-32 bg-blue-500 opacity-80 px-4 py-3
                                    text-base font-medium text-white shadow-sm hover:scale-110 transition-all duration-500 focus:outline-none focus:ring-2
                                    focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 "
                                        >
                                            Confirm Order
                                        </button>
                                    </div>

                                </div>

                            </section>
                        </div>
                    </div>
                </section>

        </>
    )
}