
import React from 'react';
import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {ChevronDownIcon, StarIcon} from "@heroicons/react/16/solid";
import {Field, Label, Textarea} from "@headlessui/react";
import {useCreateReviewMutation, useGetProductDetailsByIdQuery} from "../features/slices/productApiSlice";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export default function AddReviewScreen() {

    const {id: productId} = useParams();
    const {data: product} = useGetProductDetailsByIdQuery(productId);
    const [createReview] = useCreateReviewMutation();


    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const navigate = useNavigate();

    const onsubmitHandler = async (e) => {
        e.preventDefault();
        try {
            await createReview({
                productId: product._id,
                rating: rating,
                comment: comment,
            }).unwrap();
            toast.success("Product review was added successfully.");

            setRating(0);
            setComment("");
            navigate("/");

        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <>
            <form className={'min-h-[80vh] flex items-center'}
            onSubmit={onsubmitHandler}>

                <div
                    className={'flex flex-col gap-3 m-auto items-start p-8 min-w-[360px] sm: min-w-120 border rounded-xl text-zinc-700 text-sm shadow-lg '}>
                    <p className={'flex flex-1 text-3xl font-semibold mb-2'}> Write a review <StarIcon
                        className={"size-6 text-yellow-400 ml-4"}/></p>


                    <div className={"flex grid w-full max-w-16 grid-cols-1 mt-4"}>
                        <select
                            onChange={(e) => setRating(Number(e.target.value))}
                            className="col-start-1 row-start-1 appearance-none rounded-md bg-white py-2 px-4 w-72 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        >

                            <option value={""}>Select...</option>
                            <option value={"1"}>1 - Poor</option>
                            <option value={"2"}>2 - Fair</option>
                            <option value={"3"}>3 - Average</option>
                            <option value={"4"}>4 - Good</option>
                            <option value={"5"}>5 - Excellent</option>

                        </select>
                        <ChevronDownIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 -mr-52 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                    </div>

                    <Field onChange={(e) => setComment(e.target.value)}>
                        <Label className={"font-bold text-lg"}>Comments</Label>
                        <div className={"w-72 flex flex-col mx-auto mt-3 my-4 "}>
                            <Textarea
                                className={"p-2 text-lg border border-gray-500 focus:ring-2 ring-offset-blue-600 rounded-lg items-center h-32 justify-center"}
                                name={"comments"}/>

                        </div>

                    </Field>

                    <div className={"flex flex-row mx-auto gap-4 mt-1 "}>
                        <button
                            type="submit"
                            className="flex max-w-xs  mt-2 flex-1 items-center justify-center rounded-lg border border-transparent bg-indigo-600 px-8 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                        >
                            Submit
                        </button>

                        <Link to={"/products"}>
                            <button
                                type="cancel"
                                className="flex max-w-xs  mt-2 flex-1 items-center justify-center rounded-lg border border-transparent bg-red-300 px-8 py-2 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                            > Cancel
                            </button>
                        </Link>
                    </div>
                </div>

            </form>
        </>
    )
}