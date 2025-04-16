import React from "react";
import {assets} from "../assets/assets";
import PromoProduct from "./PromoProduct";

export default function HeroHeader() {

    return (
        <>
            {/* Featured section absolute for offsetting the hero section */}
            <section
                aria-labelledby="social-impact-heading"
                className="mx-auto max-w-8xl absolute inset-x-0 min-h-full px-4 pt-24 sm:px-4 sm:pt-32 lg:px-6 "
            >
                <div className="relative overflow-hidden rounded-xl h-full bottom-20  ">
                    <div className="absolute inset-0 ">
                        <img
                            alt=""
                            src={assets.luggage_with_hat}
                            className="size-full object-cover place-items-center"
                        />
                    </div>
                    <div className="relative bg-gray-700/65 px-6 py-20 sm:px-12 sm:py-40 lg:px-16">
                        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
                            <h2 id="social-impact-heading"
                                className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                <span className="block sm:inline">Find your home decoration essentials</span>
                            </h2>

                            <p className="mt-3 text-xl text-white">
                                Find it in one place today. Explore contemporary crafted stationary, life style products
                                with simplicity, quality and design.
                            </p>
                            <a
                                href="/products"
                                className="mt-8 block w-full rounded-md border border-transparent hover:scale-110 transition-all duration-500 bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
                <section>
                    <PromoProduct />
                </section>

            </section>

        </>
    )
}