
import {PRODUCTS_URL, UPLOADS_URL} from "../../urlconstants";
import {apiSlice} from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
                method: "GET"
            }),
            keepUnusedDataFor: 5,
            providesTags: ["Products"],
        }),
        getProductDetailsById: builder.query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
            }),
            method: "GET",
            keepUnusedDataFor: 5,
        })
    })
})

export const { useGetAllProductsQuery, useGetProductsDetailsByIdQuery } = productApiSlice;



