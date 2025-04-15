import React from "react";
import {useGetAllProductsQuery} from "../features/slices/productApiSlice";
import CustomLoader from "./CustomLoader";

// import {assets} from "../assets/assets";

export default function HomeScreenProductList() {

    // const mockProduct = [
    //     {
    //         id: 1,
    //         name: 'Leather Long Wallet',
    //         color: 'Natural',
    //         price: '$75',
    //         href: '#',
    //         imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-trending-product-02.jpg',
    //         imageAlt: 'Hand stitched, orange leather long wallet.',
    //     },
    //     {
    //         id: 2,
    //         name: 'Wooden cabinet',
    //         color: 'Natural',
    //         price: '$205',
    //         href: '#',
    //         imageSrc: assets.cabinet1,
    //         imageAlt: 'Custom made cabinet',
    //     },
    //     {
    //         id: 3,
    //         name: 'Chair',
    //         color: 'Natural',
    //         price: '$185',
    //         href: '#',
    //         imageSrc: assets.chair1,
    //         imageAlt: 'Hermon Miller Chair',
    //     },
    //     {
    //         id: 4,
    //         name: 'Grey leather armchair',
    //         color: 'Natural',
    //         price: '$385',
    //         href: '#',
    //         imageSrc: assets.grey_comportable_armchair,
    //         imageAlt: 'Grey leather armchair',
    //     },
    // ]
    const {data: products, isLoading, isError } = useGetAllProductsQuery();

    return (
        <>
            {isLoading ? (
                <CustomLoader />
            ) : isError ? (
                <div>{isError?.data?.message || isError.error}</div>
            ) : (
                <>
                    <div
                        className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id}
                                 className="group relative cursor-pointer hover:translate-y-[-12px] transition-all duration-500">
                                <div
                                    className="h-56 w-full overflow-hidden rounded-md cursor-pointer bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                                    <img alt={product.name} src={product.image}
                                         className="size-full object-cover"/>
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">
                                    <a href={"/product"}>
                                        <span className="absolute inset-0"/>
                                        {product.name}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                <p className="mt-1 text-sm font-medium text-gray-900">${product.price}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}


        </>
    )
}