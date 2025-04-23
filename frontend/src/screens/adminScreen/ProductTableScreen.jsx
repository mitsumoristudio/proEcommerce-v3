
import {useState} from "react";
import {motion} from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
// import mockProducts from "../../assets/mockdata/mockProducts";
import {Link} from "react-router-dom";
import {useGetAllProductsQuery} from "../../features/slices/productApiSlice";
import CustomLoader from "../../components/CustomLoader";


export default function ProductTableScreen() {
    const [searchTerm, setSearchTerm] = useState("");
  //  const [filterProducts, setFilterProducts] = useState(mockProducts);
    const {data: products, isLoading, isError} = useGetAllProductsQuery();
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = products.filter((product) => product.name.toLowerCase().includes(term));
               // const filtered = mockProducts.filter((product) => product.name.toLowerCase().includes(term));

        setFilteredProducts(filtered);
    }

    return (
        <>
            {isLoading ? (
                <CustomLoader />
            ) : isError ? (
                <div>{isError?.data?.message || isError.error }</div>
            ) : (
                <motion.div
                    className='mx-4 bg-gray-800 bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-600 mt-6 px-4 py-2'
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.2}}
                >
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className='text-xl font-semibold text-gray-100'>Products</h2>
                        <div className='relative'>
                            <input
                                type='text'
                                placeholder='Search Products...'
                                className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-16 pr-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <CiSearch className='absolute left-3 top-2.5 text-gray-400' size={18}/>
                        </div>

                        <div className={"flex flex-row "}>
                            <Link to="/admin/addProduct">
                                <button
                                    className={" right-2 mt-1 bg-blue-800 text-white text-md px-4 py-3 rounded-3xl shadow-md cursor-pointer " +
                                        "hover:scale-110 transition-all duration-500"}>
                                    <FaPlus size={16} aria-placeholder={"Create Product"}/>

                                </button>
                            </Link>
                        </div>

                    </div>

                    <div className='overflow-x-auto'>
                        <table className='min-w-full divide-y divide-gray-700'>
                            <thead>
                            <tr>
                                <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                                    Name
                                </th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                                    Product id
                                </th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                                    Price
                                </th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                                    Brand
                                </th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                                    Category
                                </th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                                    Configure
                                </th>
                            </tr>
                            </thead>

                            <tbody className='divide-y divide-gray-700'>
                            {filteredProducts?.map((product) => (
                                <motion.tr
                                    key={product._id}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.3}}
                                >

                                    <td className='px-6 py-4 whitespace-nowrap' key={product._id}>
                                        <div className='flex items-center'>
                                            <div className='flex-shrink-0 h-10 w-10'>
                                                <div
                                                    className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
                                                    {product.name.charAt(0)}
                                                </div>
                                            </div>
                                            <div className='ml-4'>
                                                <div className='text-sm font-medium text-gray-100'>{product.name}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-300'>{product._id}</div>
                                    </td>

                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-300'>${product.price}</div>
                                    </td>

                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-300'>{product.brand}</div>
                                    </td>


                                    <td className='px-6 py-4 whitespace-nowrap'>
									<span
                                        className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100'>
										{product.category}
									</span>
                                    </td>


                                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                        <Link to={`/admin/products/${product._id}/edit`}>
                                            <button className='text-indigo-400 hover:text-indigo-300 mr-2'>Edit</button>
                                        </Link>

                                        <button className='text-red-400 hover:text-red-300'>Delete</button>
                                    </td>
                                </motion.tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            )}

        </>
    )
}