import CustomLoader from "../components/CustomLoader";
import {motion} from "framer-motion";
import {CiSearch} from "react-icons/ci";
import {FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {useGetMyOrdersQuery} from "../features/slices/orderApiSlice";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";

export default function MyOrdersScreen() {
    const [searchTerm, setSearchTerm] = useState("");
    const {data: orders, isLoading, isError} = useGetMyOrdersQuery();
    const [filteredOrders, setFilteredOrders] = useState(orders);
    const {userInfo} = useSelector((state) => state.auth);


    const handleSearchHandler = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

            const filtered = filteredOrders.filter((order) => order._id.toLowerCase().includes(term));
            setFilteredOrders(filtered);
    }

    useEffect(() => {
        if (userInfo) {
            setFilteredOrders(filteredOrders);
        } else {
            toast.error("Users order does not match")
        }
    }, [userInfo, filteredOrders, orders]);

    return (
        <>
            {isLoading ? (
                <CustomLoader />
            ) : isError ? (
                <div>{isError?.data?.message || isError.error}</div>
            ) : (
                <motion.div
                    className='mx-4 bg-gray-800 bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-600 mt-6 px-4 py-2'
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.2}}
                >
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className='text-xl font-semibold text-gray-100'>My Orders</h2>
                        <div className='relative'>
                            <input
                                type='text'
                                placeholder='Search Orders by user..'
                                className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-16 pr-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                value={searchTerm}
                                onChange={handleSearchHandler}
                            />
                            <CiSearch className='absolute left-3 top-2.5 text-gray-400' size={18}/>
                        </div>

                    </div>

                    <div className='overflow-x-auto scroll-auto'>
                        <table className='min-w-full divide-y divide-gray-700'>
                            <thead>
                            <tr>
                                <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                                    Order ID
                                </th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                                    Date
                                </th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                                    Total
                                </th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                                    Paid
                                </th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider'>
                                    Delivered
                                </th>

                            </tr>
                            </thead>

                            <tbody className='divide-y divide-gray-700'>
                            {filteredOrders?.map((order) => (
                                <motion.tr
                                    key={order._id}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.5}}
                                >


                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-300'>{order._id}</div>
                                    </td>

                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-300'>{order.createdAt.substring(0, 10)}</div>
                                    </td>

                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm font-semibold text-gray-300'>${order.totalPrice}</div>
                                    </td>

                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-300'>
                                            {order.isPaid ? (
                                                order.paidAt.substring(0, 10)
                                            ) : (
                                                <FaTimes style={{ color: 'red' }} />
                                            )}
                                        </div>
                                    </td>

                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-300'>
                                            {order.isDelivered ? (
                                                order.isDelivered.substring(0, 10)
                                            ) : (
                                                <FaTimes style={{ color: 'red' }} />
                                            )}
                                        </div>
                                    </td>


                                    <td className=' py-4 whitespace-nowrap'>
									<span
                                        className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100'>
										{order.category}
									</span>
                                    </td>


                                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                        <Link to={`/orders/${order._id}/summary`}>
                                            <button className='text-indigo-400 hover:text-indigo-300 mr-2'>Details</button>
                                        </Link>


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