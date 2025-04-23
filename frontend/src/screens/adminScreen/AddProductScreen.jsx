
import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {Link, useNavigate,} from "react-router-dom";
import {Field, Label, Textarea} from "@headlessui/react";
import CustomLoader from "../../components/CustomLoader";
import {useDispatch, useSelector} from "react-redux";
import {useCreateProductMutation,useUploadProductImageMutation} from "../../features/slices/productApiSlice";

export default function AddProductScreen() {

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [brand, setBrand] = useState("")
    const [image, setImage] = useState("")
    const [countInStock, setCountInStock] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")

    const [createProduct, isLoading] =useCreateProductMutation();
    const [uploadProductImage, {isLoading: loadingUploadImage }] = useUploadProductImageMutation();

    const {userInfo} = useSelector((state) => state.auth);
    const usersID =userInfo.user;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const uploadImageHandler = async (e) => {
        const formData = new FormData();
        formData.append("image", e.target.files[0]);
        try {
            const res = await uploadProductImage(formData).unwrap()
            toast.success("Image uploaded successfully.");

            setImage(res.image)
        } catch (error) {
            toast.error(error?.data?.message || error.error)
        }
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
           await createProduct( {
                user: usersID,
                name: name,
                price: price,
                brand: brand,
                image: image,
                category: category,
                description: description,
                countInStock: countInStock,
                numReviews: Number(0),
            }).unwrap();

            toast.success("Product Added Successfully.");

            navigate("/")
        } catch (error) {
            toast.error(error?.data?.message || error.error)
        }
    }

    return (
        <>
            <form className={'min-h-[80vh] flex items-center p-2 '}
                  onSubmit={onSubmitHandler}
            >
                <div
                    className={"flex flex-col gap-2 m-auto items-start rounded-lg p-5 min-w-[460px] sm: min-w-280 border rounded-xl" +
                        "text-zinc-700 text-sm shadow-lg "}
                >
                    <h1 className={"text-2xl font-semibold text-center text-gray-800"}>
                        Add new product
                    </h1>

                    <div className={'w-full '}>
                        <p className={"mb-1 text-lg font-semibold"}>Product Name</p>
                        <input className={'border border-zinc-700 rounded-lg w-full p-2 pt-1'}
                               placeholder={"Enter product name"} type={name} value={name}
                               required={true}
                               onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className={'w-full '}>
                        <p className={"mb-1 text-lg font-semibold"}>Price $</p>
                        <input className={'border border-zinc-700 rounded-lg w-full p-2 pt-1'}
                               placeholder={"Enter price"} type={"price"} value={price}
                               required={true}
                               onChange={(e) => setPrice(e.target.value)}/>
                    </div>

                    <div className={'w-full '}>
                        <p className={"mb-1 text-lg font-semibold"}>Brand Name</p>
                        <input className={'border border-zinc-700 rounded-lg w-full p-2 pt-1'}
                               placeholder={"Enter brand name"} type={brand} value={brand}
                               required={true}
                               onChange={(e) => setBrand(e.target.value)}/>
                    </div>

                    <div className={'w-full '}>
                        <p className={"mb-1 text-lg font-semibold"}>Count In Stock</p>
                        <input className={'border border-zinc-700 rounded-lg w-full p-2 pt-1'}
                               placeholder={"Enter Count In Stock"} type={'countInStock'} value={countInStock}
                               required={true}
                               onChange={(e) => setCountInStock(e.target.value)}/>
                    </div>

                    <div className={'w-full '}>
                        <p className={"mb-1 text-lg font-semibold"}>Category</p>
                        <input className={'border border-zinc-700 rounded-lg w-full p-2 pt-1'}
                               placeholder={"Enter Category"} type={category} value={category}
                               required={true}
                               onChange={(e) => setCategory(e.target.value)}/>
                    </div>

                    <div className="col-span-full h-80 border-b-gray-700">
                        <label htmlFor="cover-photo" className="block text-md font-medium text-gray-900">
                            Add photo
                        </label>
                 
                        <label className={"cursor-pointer flex items-center justify-center w-full h-32  border-dashed border-gray-400 rounded-lg" +
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

                        <Field onChange={(e) => setDescription(e.target.value)}>
                            <Label className={"font-semibold text-md "}>Description</Label>
                            <div className={"max-w-full flex flex-col mx-auto mt-3 my-2 "}>
                                <Textarea
                                    onChange={(e) => setDescription(e.target.value)}
                                    className={"p-2 text-lg border border-gray-500 focus:ring-2 ring-offset-blue-600 rounded-lg items-center h-20 w-96 justify-center"}
                                    name={"Description"}/>
                            </div>
                        </Field>

                    </div>
                    <div className={"flex flex-row mx-auto gap-6 "}>
                        <button
                            type="submit"
                            className="flex max-w-xs  flex-1 items-center justify-center rounded-lg border border-transparent bg-indigo-600 px-8 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                        >
                            Submit
                        </button>

                        <Link to={"/admin/producttable"}>
                            <button
                                type="cancel"
                                className="flex max-w-xs   flex-1 items-center justify-center rounded-lg border border-transparent bg-red-300 px-8 py-2 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                            > Cancel
                            </button>
                        </Link>

                    </div>

                </div>


            </form>
        </>
    )
}
