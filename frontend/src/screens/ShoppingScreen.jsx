
import React from 'react';
import mockProducts from "../assets/mockdata/mockProducts";
import {Swiper} from "swiper/react";

import SwipeBrandLogos from "../components/SwipeBrandLogos";

import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function ShoppingScreen() {
    return (
        <>
            <section>
                <div className={"bg-white"}>
                    <div className={"mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8"}>
                        <h2 className={"sr-only"}>Products</h2>
                        <ProductCard products={mockProducts} />
                    </div>
                </div>
                <div className={"mt-1"}>
                    <Footer />
                </div>
            </section>
        </>
    )
}