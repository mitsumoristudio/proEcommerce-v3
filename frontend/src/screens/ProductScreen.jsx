
import React from 'react';
// import mockProducts from "../assets/mockdata/mockProducts";
import {useParams, useNavigate, NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addToCart} from "../features/slices/cartSlice";
import ProductReview from "../components/ProductReview";
import {HeartIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import {ChevronDownIcon} from "@heroicons/react/16/solid";
import {useGetProductDetailsByIdQuery} from "../features/slices/productApiSlice";
import CustomLoader from "../components/CustomLoader";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const relatedProducts = [
    {
        id: 1,
        name: 'Premium Denim Jeans',
        color: 'Blue',
        href: '#',
        imageSrc: "../images/jeans.jpg",
        imageAlt: 'N/A',
        price: '$210',
    },
    {
        id: 2,
        name: 'Contemporary Fabric Sofa',
        color: 'Grey',
        href: '#',
        imageSrc: "../images/light_living_couch.jpg",
        imageAlt: 'N/A',
        price: '$2400',
    },
    {
        id: 3,
        name: 'Vintage Wooden Cabinet',
        color: 'Brown',
        href: '#',
        imageSrc: '../images/vintage_cabinet.jpg',
        imageAlt: 'N/A',
        price: '$1340',
    },
    {
        id: 4,
        name: 'Moodys Sofa',
        color: 'Grey',
        href: '#',
        imageSrc: '../images/gray_living_couch.jpg',
        imageAlt: 'N/A',
        price: '$2200',
    },

    // More products...
]

export default function ProductScreen() {
    const {id: productId} = useParams();
    const {data: product, isLoading, error, refetch} = useGetProductDetailsByIdQuery(productId);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [qty, setQty] = useState(1);

    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteHandler = () => {
        setIsFavorite(!isFavorite);
    }

    const addToCartHandler = () => {
        dispatch(addToCart({...product, qty}));
        navigate("/cart");
    }

    const dummyAddToCartHandler = () => {
        navigate("/");
    }

    // const product = products.find((product) => product._id === productId);

    return (
        <section>
            <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
                {isLoading ? (
                    <CustomLoader />
                ) : error ? (
                    <div>{error?.data?.message || error.error}</div>
                ) : (
                    <div className="mx-auto max-w-2xl lg:max-w-none">

                        {/* Product */}
                        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                            {/* Image gallery Had to create a seperate folder products in public Frontend for the images to appear */}
                            <div className="mx-auto mt-6 hidden w-96 max-w-2xl sm:block lg:max-w-none">
                                <img alt={product.name} src={product.image} key={product._id}
                                     className={"max-h-96 w-full mb-2 rounded-lg shadow-md border border-b"}/>
                            </div>

                            {/* Product info */}
                            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

                                <div className="mt-3">
                                    <h2 className="sr-only">Product information</h2>
                                    <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>
                                </div>

                                {/* Reviews */}
                                <div className="mt-3">
                                    <h3 className="sr-only">Reviews</h3>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        product.rating > rating ? 'text-yellow-500' : 'text-gray-300',
                                                        'size-5 shrink-0',
                                                    )}
                                                />
                                            ))}
                                        </div>
                                        <p className="px-2 text-lg font-medium">{product.numReviews} Reviews </p>
                                    </div>
                                </div>

                                <div className={"flex grid w-full max-w-16 grid-cols-1 mt-4"}>
                                    <select

                                        aria-label={`Quantity, ${product.name}`}
                                        onChange={(e) => setQty(e.target.value)}
                                        className="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </div>

                                <div className="mt-6">
                                    <h3 className="px-2 text-lg font-medium mb-1">
                                        Description</h3>

                                    <div
                                        dangerouslySetInnerHTML={{__html: product.description}}
                                        className="space-y-6 text-base text-gray-700"
                                    />
                                </div>

                                <form className="mt-1">
                                    {/* Colors */}
                                    <div>


                                    </div>

                                    <div className="mt-10 flex">
                                        <button
                                            onClick={addToCartHandler}
                                            type="submit"
                                            className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                        >
                                            Add to bag
                                        </button>

                                        <button
                                            type="button"
                                            onClick={handleFavoriteHandler}
                                            className="p-4 rounded-full transition-all duration-400 hover:bg-red-100"
                                        >
                                            <HeartIcon aria-hidden="true"
                                            className={`w-6 h-6 transition-colors duration-400 ${isFavorite ? "fill-red-600" : "stroke-gray-500"}`}/>
                                            <span className="sr-only">Add to favorites</span>
                                        </button>
                                    </div>
                                </form>

                                <section aria-labelledby="details-heading" className="mt-12">
                                    <h2 id="details-heading" className="sr-only">
                                        Additional details
                                    </h2>
                                </section>
                            </div>
                        </div>

                        <section aria-labelledby="related-heading"
                                 className="mt-10 border-t border-gray-200 px-4 py-16 sm:px-0">
                            <h2 id="related-heading" className="text-xl font-bold text-gray-900">
                                Customers also purchased
                            </h2>

                            <div
                                className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                                {relatedProducts.map((product) => (
                                    <div key={product.id}>
                                        <div className="relative">
                                            <div className="relative h-72 w-full overflow-hidden rounded-lg cursor-pointer">
                                                <img alt={product.imageAlt} src={product.imageSrc}
                                                     className="size-full object-cover"/>
                                            </div>
                                            <div className="relative mt-4">
                                                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                            </div>
                                            <div
                                                className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                                                <div
                                                    aria-hidden="true"
                                                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                                                />
                                                <p className="relative text-lg font-semibold text-white">{product.price}</p>
                                            </div>
                                        </div>
                                        <div className="mt-6 cursor-pointer ">
                                            <button
                                                onClick={dummyAddToCartHandler}
                                                className="relative w-full flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                                            >
                                                Add to bag<span className="sr-only">, {product.name}</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className={"border-t border-gray-200 px-1 py-2 sm:px-0"}>
                            <>
                                {/*<ProductReview product={product}*/}
                                {/*               key={product._id}/>*/}

                                    <ProductReview product={product}
                                                   key={product.id} />

                            </>
                        </section>
                    </div>
                )}

            </main>

        </section>
    )
}