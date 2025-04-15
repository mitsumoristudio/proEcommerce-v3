
import React from 'react';
//import mockProducts from "../assets/mockdata/mockProducts";
import CustomLoader from "../components/CustomLoader";
import {useGetAllProductsQuery} from "../features/slices/productApiSlice";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function ShoppingScreen() {
    const {data: products, isLoading, isError} = useGetAllProductsQuery();
    return (
        <>
            <section>
                <div className={"bg-white"}>
                    <div className={"mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8"}>
                        <h2 className={"sr-only"}>Products</h2>
                        {isLoading ? (
                            <div className={"py-6 mb-2"}>
                                <CustomLoader />
                            </div>

                        ) : isError ? (
                            <div className="text-red-600">
                                {isError?.data?.message || isError.error}
                            </div>
                        ) : (
                            <>
                                <ProductCard products={products}
                                key={products.id}/>
                            </>
                        )}

                    </div>
                </div>
                <div className={"mt-1"}>
                    <Footer />
                </div>
            </section>
        </>
    )
}