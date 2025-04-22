import React, {useState, useEffect} from 'react'
import {toast} from 'react-toastify'
import {Link, useNavigate, useParams} from "react-router-dom";
import {useUpdateProductMutation, useGetProductDetailsByIdQuery, useUploadProductImageMutation} from "../../features/slices/productApiSlice";
import {Field, Label, Textarea} from "@headlessui/react";

export default function ProductEditScreen() {
    const {id: productId} = useParams();

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [countInStock, setCountInStock] = useState(0);
    const [description, setDescription] = useState("");

    const { data: product, isLoading, refetch, error } = useGetProductDetailsByIdQuery(productId);
    const [updateProduct, {isLoading: loadingUpdate}] = useUpdateProductMutation();
    const [ updateProductImage, {isLoading: loadingUpdateImage}] = useUploadProductImageMutation();

    const navigate = useNavigate();

    const uploadImageHandler = async (e) => {
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        try {
            const res = await updateProductImage(formData).unwrap();
            toast.success("Image uploaded successfully.");

            setImage(res.image)
        } catch (error) {
            toast.error(error?.data?.message || error.error)
        }
        //  console.log(e.target.files[0]);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            await updateProduct({
                productId: productId,
                name: name,
                price: price,
                image: image,
                brand: brand,
                category: category,
                description: description,
                countInStock: countInStock,
            }).unwrap();
            toast.success("Product updated successfully.");
            refetch();
            navigate("/");
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }

    useEffect(() => {
        if (product) {
            setName(product.name);
            setPrice(product.price);
            setImage(product.image);
            setBrand(product.brand);
            setCategory(product.category);
            setCountInStock(product.countInStock);
            setDescription(product.description);
        }
    }, [product]);

    return (
        <>
            <form className={'min-h-[80vh] flex items-center p-1'}
                  onSubmit={onSubmitHandler}
            >
                <div
                    className={"flex flex-col gap-3 m-auto items-start p-8 min-w-[460px] sm: min-w-280 border rounded-xl\ " +
                        "text-zinc-700 text-sm shadow-lg "}
                >
                    <h1 className={"text-2xl font-semibold text-center text-gray-800"}>
                        Edit product
                    </h1>

                    <div className={'w-full '}>
                        <p className={"mb-2 text-lg font-semibold"}>Product Name</p>
                        <input className={'border border-zinc-700 rounded-lg w-full p-2 pt-1'}
                               placeholder={"Enter product name"} type={'productname'} value={name}
                               required={true}
                               onChange={(e) => setName(e.target.value)}/>
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

                        <label className={"cursor-pointer flex items-center justify-center w-full h-48 border-dashed border-gray-400 rounded-lg" +
                            "hover:border-blue-600 transition"}
                               htmlFor={"image-upload"}
                        >
                            {image ? (
                                <img src={image} alt={"Preview"} className={"h-full object-contain"} />
                            ) : (
                                <span className={"text-gray-800"}>Click to upload an image</span>
                            )}
                        </label>
                        <input
                            id={"image-upload"}
                            type="file"
                            accept={"image/*"}
                            className={"hidden"}
                            onChange={uploadImageHandler}

                        />

                        <Field onChange={(e) => setDescription(e.target.value)}
                        value={description}>
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

                        <Link to={"/admin/producttable"}>
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