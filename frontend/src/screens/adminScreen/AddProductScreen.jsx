
import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import {PhotoIcon} from "@heroicons/react/20/solid";
import {Field, Label, Textarea} from "@headlessui/react";

export default function AddProductScreen() {

    const [productName, setProductName] = useState("")
    const [price, setPrice] = useState(0)
    const [brand, setBrand] = useState("")
    const [image, setImage] = useState("")
    const [countInStock, setCountInStock] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }


    return (
        <>
            <form className={'min-h-[80vh] flex items-center p-1'}>
                <div
                    className={"flex flex-col gap-3 m-auto items-start p-8 min-w-[460px] sm: min-w-280 border rounded-xl\ " +
                        "text-zinc-700 text-sm shadow-lg "}
                >
                    <h1 className={"text-2xl font-semibold text-center text-gray-800"}>
                        Add new product
                    </h1>

                    <div className={'w-full '}>
                        <p className={"mb-2 text-lg font-semibold"}>Product Name</p>
                        <input className={'border border-zinc-700 rounded-lg w-full p-2 pt-1'}
                               placeholder={"Enter product name"} type={'productname'} value={productName}
                               required={true}
                               onChange={(e) => setProductName(e.target.value)}/>
                    </div>

                    <div className={'w-full '}>
                        <p className={"mb-2 text-lg font-semibold"}>Price $</p>
                        <input className={'border border-zinc-700 rounded-lg w-full p-2 pt-1'}
                               placeholder={"Enter price"} type={'price'} value={price}
                               required={true}
                               onChange={(e) => setPrice(e.target.value)}/>
                    </div>

                    <div className={'w-full '}>
                        <p className={"mb-2 text-lg font-semibold"}>Brand Name</p>
                        <input className={'border border-zinc-700 rounded-lg w-full p-2 pt-1'}
                               placeholder={"Enter brand name"} type={'brand'} value={brand}
                               required={true}
                               onChange={(e) => setBrand(e.target.value)}/>
                    </div>

                    <div className={'w-full '}>
                        <p className={"mb-2 text-lg font-semibold"}>Count In Stock</p>
                        <input className={'border border-zinc-700 rounded-lg w-full p-2 pt-1'}
                               placeholder={"Enter Count In Stock"} type={'countInStock'} value={countInStock}
                               required={true}
                               onChange={(e) => setCountInStock(e.target.value)}/>
                    </div>

                    <div className={'w-full '}>
                        <p className={"mb-2 text-lg font-semibold"}>Category</p>
                        <input className={'border border-zinc-700 rounded-lg w-full p-2 pt-1'}
                               placeholder={"Enter Category"} type={'category'} value={category}
                               required={true}
                               onChange={(e) => setCategory(e.target.value)}/>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="cover-photo" className="block text-md font-medium text-gray-900">
                            Add photo
                        </label>
                        <div
                            className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-20 py-2 ml-8">
                            <div className="text-center">
                                <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300"/>
                                <div className="mt-4 flex text-sm/6 text-gray-600 p-1">
                                    <label
                                        htmlFor="image"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span>Upload a file</span>
                                        <input id="image" name="image" type="file" className="sr-only"
                                               onChange={(e) => setImage(e.target.value)}/>
                                    </label>
                                </div>
                                <p className="text-xs/5 text-gray-600">PNG, JPG, up to 5MB</p>
                            </div>
                        </div>

                        <Field onChange={(e) => setDescription(e.target.value)}>
                            <Label className={"font-semibold text-md "}>Description</Label>
                            <div className={"max-w-full flex flex-col mx-auto mt-3 my-4 "}>
                                <Textarea
                                    className={"p-2 text-lg border border-gray-500 focus:ring-2 ring-offset-blue-600 rounded-lg items-center h-32 justify-center"}
                                    name={"Description"}/>
                            </div>
                        </Field>

                    </div>
                    <div className={"flex flex-row mx-auto gap-6 "}>
                        <button
                            type="submit"
                            className="flex max-w-xs  mt-2 flex-1 items-center justify-center rounded-lg border border-transparent bg-indigo-600 px-8 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                        >
                            Submit
                        </button>

                        <Link to={"/"}>
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
