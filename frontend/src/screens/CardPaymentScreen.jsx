import React, {useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import CustomLoader from "../components/CustomLoader";
import {Message} from "../components/Message";
import {useGetOrderDetailsQuery,
        usePayOrderMutation,
        useDeliverOrderMutation,
        useGetPayPalClientIdQuery} from "../features/slices/orderApiSlice";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";


export default function CardPaymentScreen() {
    const { id: orderId} = useParams();

    const { data: order, isLoading, error, refetch } = useGetOrderDetailsQuery(orderId);

    const [payOrder, {isLoading: loadingPay }] = usePayOrderMutation();

    const [{ isPending }, paypalDispatch ] = usePayPalScriptReducer()

    const { data: paypal, isLoading: loadingPaypal, error: errorPaypal} = useGetPayPalClientIdQuery();

    const [deliverOrder, {isLoading: loadingDeliver }] = useDeliverOrderMutation();

    const {userInfo} = useSelector((state) => state.auth);

    const deliveredOrderHandler = async () => {
        try {
            await deliverOrder(orderId);
            refetch();
            toast.success("Order delivered successfully.");

        } catch (error) {
            toast.error(error?.data?.message || error.message);
        }
    }

    useEffect(() => {
        if (!errorPaypal && !loadingPaypal && paypal.clientId) {
            const loadPayPalScript = async () => {
                paypalDispatch({
                    type: "resetOptions",
                    value: {
                        "client-id": paypal.clientId,
                        currency: "USD",
                    }
                });
                paypalDispatch({
                    type: "setPayPalScript",
                    value: "pending"
                });
            }
            if (order && !order.isPaid) {
                if (!window.paypal) {
                    loadPayPalScript();
                }
            }
        }
    }, [order, paypal, paypalDispatch, loadingPaypal, errorPaypal]);

    function onApprove(data, actions) {
        return actions.order.capture().then(async function (details) {
            try {
                await payOrder({orderId, details});
                refetch();
                toast.success("Payment was successfully approved.");
            } catch (err) {
                toast.error(err?.data?.message || err.message);
            }
        });
    }
    async function onApproveTest() {
        await payOrder({orderId, details: {payer: { } }});
        refetch();
        toast.success("Payment was successfully approved.");
    }
    function onError(err) {
        toast.error(err.message);
    }
    function createOrder(data, actions) {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: order.totalPrice,
                    }
                }
            ]
        }).then((orderId) => {
            return orderId;
        });
    }

    return (
        isLoading ? <CustomLoader /> : error ? <Message error={error} />
            : (<>
                    <section className={"bg-gray-100"}>
                        <div className={"p-1"}>
                            <div className={"mx-auto max-w-2xl px-4 pb-22 pt-16 sm:px-6 lg:max-w-7xl lg: px-8"}>

                                <div
                                    className={"items-center py-2 mb-8 max-w-96 bg-gray-200  border-t-4 shadow-md rounded-lg p-4"}>
                                    <h1 className={"text-2xl mb-2 font-semibold"}>Order: {order._id}</h1>
                                    <div className={"flex flex-row justify-start gap-x-2"}>
                                        <p className={" text-gray-800 items-center font-medium"}>{order.shippingAddress.firstName}</p>
                                        <p className={" text-gray-800 items-center font-semibold"}>{order.shippingAddress.lastName}</p>
                                    </div>
                                    <p className={"text-gray-500 items-center font-semibold"}>{order.shippingAddress.company}</p>
                                    <p className={"text-gray-500 items-center font-semibold"}>{order.shippingAddress.address}</p>
                                    <p className={"text-gray-500 items-center font-semibold"}>{order.shippingAddress.city}</p>

                                    <div className={"flex flex-row justify-start gap-x-2"}>
                                        <p className={"text-gray-500 items-center font-medium"}>{order.shippingAddress.state},</p>
                                        <p className={"text-gray-500 items-center font-medium"}>{order.shippingAddress.postalCode}</p>
                                    </div>
                                </div>

                                {/* PAY ORDER PLACEHOLDER Add onClickHandler here*/}
                                <div className={"py-2 my-4 mb-2"}>
                                    <button
                                        onClick={deliveredOrderHandler}
                                        className={"w-60 h-12 ml-4 bg-blue-600 rounded-lg text-white items-center shadow-md cursor-pointer hover:transition-all scale-105 duration-500"}>
                                        Test Pay Order
                                    </button>

                                    <PayPalButtons className={"mt-6 rounded-xl shadow-md"}>
                                        createOrder={createOrder}
                                        onApprove={onApprove}
                                        onApproveTest={onApproveTest}
                                    </PayPalButtons>
                                </div>

                                {/* Order Summary*/}
                                <section className={"mb-4 lg:mb-4"}>
                                    <h2 className={"text-3xl font-semibold"}>Order Summary</h2>

                                    <div className={"mt-10 border-t border-gray-300 pt-10"}></div>

                                    <div className={"mt-3 rounded-lg border border-gray-300 bg-white shadow-sm"}>
                                        <h3 className={"sr-only"}>Items in your cart</h3>
                                        <ul key={"cartItemID"} className={"divide-y divide-gray-300"}>
                                            {order.orderItems.map((items) => {
                                                return (
                                                    <li key={items._id}
                                                        className={"flex px-4 py-5 sm:px-5"}>
                                                        <div className={"shrink-0"}>
                                                            <img alt={items.name} src={items.image}
                                                                 className={"w-36 h-36 rounded-lg shadow-sm opacity-90 border border-b border-gray-100"}/>
                                                        </div>

                                                        <div className={"flex flex-1 flex-col ml-4"}>
                                                            <div className={"flex"}>
                                                                <div className={"min-w-0 flex-1"}>
                                                                    <h4 className={"text-base font-medium text-gray-700"}>
                                                                        {items.name}
                                                                    </h4>

                                                                    <p className={"text-md text-gray-500 mt-2"}>{items.brand}</p>
                                                                    <p className={"text-md text-gray-800 mt-2 font-semibold"}>${items.price}</p>
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
                                                <dt className={"text-md"}>Subtotal</dt>
                                                <dd className={"text-md text-gray-800 font-medium"}>
                                                    ${order.orderItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                                                </dd>
                                            </div>

                                            <div className={"flex items-center justify-between"}>
                                                <dt className={"text-md"}>Shipping</dt>
                                                <dd className={"text-md text-gray-800 font-medium"}>${order.shippingPrice}</dd>
                                            </div>

                                            <div className={"flex items-center justify-between"}>
                                                <dt className={"text-md"}>Taxes</dt>
                                                <dd className={"text-md text-gray-800 font-medium"}>${order.taxPrice}</dd>
                                            </div>

                                            <div className={" border-t border-gray-300 pb-2"}></div>

                                            <div className={"flex items-center justify-between"}>

                                                <dt className={"text-lg text-gray-800 font-bold"}>Total</dt>
                                                <dd className={"text-lg text-gray-800 font-bold"}>${order.totalPrice}</dd>
                                            </div>
                                        </dl>
                                        <div className={"border-t border-gray-300 py-6 px-4 sm:px-6"}>
                                            <Link to={`/orders/${order._id}/summary`}>
                                            <button
                                                type="submit"
                                                className="w-9/12 rounded-lg border border-transparent ml-32 bg-blue-500 opacity-80 px-4 py-3
                                    text-base font-medium text-white shadow-sm hover:scale-110 transition-all duration-500 focus:outline-none focus:ring-2
                                    focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 "
                                            >
                                                Next
                                            </button>
                                            </Link>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        </div>
                    </section>


                </>

            )

    )
}