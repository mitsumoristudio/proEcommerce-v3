
import React from "react";
import {NavLink} from "react-router-dom";
import HomeScreenProductList from "./HomeScreenProductList";
import ShippingFooter from "./ShippingFooter";
import Footer from "./Footer";

export default function PromoProduct() {
    return (
        <>
            <section>
                <div className={"container mx-auto"}>
                    <div className={"flex flex-col items-center justify-center mx-auto text-center mb-5 "}>
                        <h1 className={"uppercase text-gray-600 font-semibold text-4xl py-2"}>
                            Spring Collection
                        </h1>
                        <p className={"lead text-center text-xl"}>
                            Check out our newest collection sourced from our fine suppliers.</p>
                    </div>
                </div>
                <div className={"bg-white"}>
                    <div className={"mx-auto max-w-3xl px-2 py-6 sm: px-6 sm: py-24 lg: max-w-6xl lg: px-8"}>
                        <div className={"md: flex md: items-center md: justify-between"}>
                            <h2 className={"text-2xl font-bold tracking-tight text-gray-800"}>Trending Products</h2>
                            <NavLink to={"/shopping"}
                                     className={"hidden text-lg font-medium text-indigo-700 hover:text-blue-600 md:block"}>Shop
                                the Collections
                                <span aria-hidden={"true"}>&rarr;</span></NavLink>
                        </div>
                    </div>

                </div>
            </section>
            <section className={"mx-auto gap-2"}>
                <HomeScreenProductList/>
            </section>

            <section className={"mx-auto gap-1"}>
                <ShippingFooter/>
            </section>

            <section className={"mx-auto gap-3"}>
                <Footer/>
            </section>
        </>

    )
}