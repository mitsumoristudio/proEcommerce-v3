
import {StarIcon} from "@heroicons/react/20/solid";
import React, {useState} from "react";
import {assets} from "../assets/assets";
import {Link, useParams} from "react-router-dom";
import {useCreateReviewMutation, useGetProductDetailsByIdQuery} from "../features/slices/productApiSlice";
import {toast} from "react-toastify";

const reviews = {
    average: 4,
    totalCount: 6,
    counts: [
        { rating: 5, count: 1019 },
        { rating: 4, count: 162 },
        { rating: 3, count: 97 },
        { rating: 2, count: 199 },
        { rating: 1, count: 147 },
    ],
    featured: [
        {
            id: 1,
            rating: 5,
            content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
            author: 'Mia Mitsumori',
            avatarSrc: assets.miaphoto,
        },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductReview({product}) {
    const [createReviews] = useCreateReviewMutation();

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const {id: productId} = useParams();
    const {data: products} = useGetProductDetailsByIdQuery(productId);

    const onsubmitHandler = async (e) => {
        e.preventDefault();
        try {
            await createReviews({
                productId: product.product_id,
                rating: rating,
                comment: comment,
            }).unwrap();
            toast.success("Product Added Successfully.");

            setRating(0);
            setComment("");
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className="bg-white">

                <div
                    className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
                    <div className="lg:col-span-4">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customer Reviews</h2>

                        <div className="mt-3 flex items-center">
                            <div>
                                <div className="flex items-center">
                                    {product.review.map((rate) => (
                                        <StarIcon
                                            key={"rate_ID"}
                                            aria-hidden="true"
                                            className={classNames(
                                                rate.rating > 0 ? 'text-yellow-400' : 'text-gray-300',
                                                'size-5 shrink-0',
                                            )}
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{product.rating} out of 5 stars</p>
                            </div>
                            <p className="ml-2 text-sm text-gray-900">Based on {products.numReviews} reviews</p>
                        </div>

                        <div className="mt-6">
                            <h3 className="sr-only">Review data</h3>

                            <dl className="space-y-3" key={product._id}>
                                {product.review.map((count) => (
                                    <div key={"countID"} className="flex items-center text-sm">
                                        <dt className="flex flex-1 items-center">
                                            <p className="w-3 font-medium text-gray-900">
                                                {count.rating}
                                                <span className="sr-only"> star reviews</span>
                                            </p>
                                            <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                                                <StarIcon
                                                    aria-hidden="true"
                                                    className={classNames(count.rating > 0 ? 'text-yellow-400' : 'text-gray-300', 'size-5 shrink-0')}
                                                />

                                                <div className="relative ml-3 flex-1">
                                                    <div
                                                        className="h-3 rounded-full border border-gray-200 bg-gray-100"/>
                                                    {count.rating > 0 ? (
                                                        <div
                                                            style={{width: `calc(${count.rating} / ${product.review.count} * 100%)`}}
                                                            className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                                                        />
                                                    ) : null}
                                                </div>
                                            </div>
                                        </dt>
                                        <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                                            {Math.round((product.numReviews/ count.rating) * 100)}%
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                If you would like to share your thoughts on this product
                            </p>

                            <div className={"px-2 py-6 items-center"}>
                                <button
                                    type="submit"
                                    className="w-80 rounded-lg border border-transparent bg-blue-500 opacity-80 px-4 py-3
                                    text-base font-medium text-white shadow-sm hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-2
                                    focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 "
                                >
                                    <Link to={`/products/${product._id}/reviews`}> Write a review </Link>

                                </button>

                                {/* - Product Review */}

                            </div>
                        </div>
                    </div>

                    <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
                        <h3 className="sr-only">Recent reviews</h3>

                        <div className="flow-root">
                            <div className="-my-12 divide-y divide-gray-200">
                                {product.review.map((review) => (
                                    <ul key={review._id} className="py-12">
                                        <div className="flex items-center">
                                            <div className='flex-shrink-0 h-10 w-10'>
                                                <div
                                                    className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
                                                    {review.name.charAt(0)}
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-sm font-bold text-gray-900">{review.name}</h4>
                                                <div className="mt-1 flex items-center">
                                                    {[0, 1, 2, 3, 4].map((rating) => (
                                                        <StarIcon
                                                            key={rating}
                                                            aria-hidden="true"
                                                            className={classNames(
                                                                review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                                                'size-5 shrink-0',
                                                            )}
                                                        />
                                                    ))}
                                                </div>
                                                <p className="sr-only">{review.rating} out of 5 stars</p>
                                                <p className={" mt-2 text-gray-500 font-light items-center"}>
                                                    {review.comment}
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            dangerouslySetInnerHTML={{__html: review.content}}
                                            className="mt-4 space-y-6 text-base italic text-gray-600"
                                        />
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}