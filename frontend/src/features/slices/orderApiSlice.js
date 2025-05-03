
import {apiSlice} from "./apiSlice";
import {ORDERS_URL, PAYPAL_URL} from "../../urlconstants";


export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (order) => ({
                url: ORDERS_URL,
                method: "POST",
                body: {...order},
            })
        }),
        getOrderDetails: builder.query({
            query: (orderId) => ({
                url: `${ORDERS_URL}/${orderId}`,
            }),
            keepUnusedDataFor: 5,
        }),
        payOrder: builder.mutation({
            query: ( {orderId, details }) => ({ // needs to be destructured
                url: `${ORDERS_URL}/${orderId}/pay`,
                method: "PUT",
                body:{...details},
            })
        }),
        getPayPalClientId: builder.query({
            query: () => ({
                url: PAYPAL_URL,
            }),
            keepUnusedDataFor: 5,
        }),
        getMyOrders: builder.query({
            query: () => ({
                url: `${ORDERS_URL}/myOrders`
            }),
            keepUnusedDataFor: 5,
        }),
        getAllOrders: builder.query({
            query: () => ({
                url: ORDERS_URL,
                method: "GET",
            }),
            keepUnusedDataFor: 5,
            providesTags: ["Orders"],
        }),
        deliverOrder: builder.mutation({
            query: (orderId) => ({
                url: `${ORDERS_URL}/${orderId}/deliver`,
                method: "PUT",
            }),
        })
    })
})

export const {useCreateOrderMutation,
    useGetOrderDetailsQuery,
    usePayOrderMutation,
    useGetPayPalClientIdQuery,
    useGetMyOrdersQuery,
    useDeliverOrderMutation,
    useGetAllOrdersQuery} = orderApiSlice;