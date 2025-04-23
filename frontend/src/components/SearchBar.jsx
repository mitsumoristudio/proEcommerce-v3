
import {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {useGetAllProductsQuery} from "../features/slices/productApiSlice";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const {data: products} = useGetAllProductsQuery();
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearchHandler = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = products.filter((product) => product.name.toLowerCase().includes(term));
        setFilteredProducts(filtered);
    }
    return (
        <div className={"flex justify-center items-center p-4"}>
            <div className={"relative w-full max-w-md"}>
                <input
                type="text"
                value={searchTerm}
                onChange={handleSearchHandler}
                placeholder={"Search..."}
                className={"w-full px-4 py-2 pr-20 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"}/>
                <button
                className={"absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 "}>
                    <FaSearch />
                </button>
            </div>
        </div>
    )
}