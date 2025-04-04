
import {useState} from "react";
import {FaSearch} from "react-icons/fa";

export default function SearchBar() {
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }
    const handleSearch = () => {
        console.log("Searching for", query);
    }
    return (
        <div className={"flex justify-center items-center p-4"}>
            <div className={"relative w-full max-w-md"}>
                <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder={"Search..."}
                className={"w-full px-4 py-2 pr-20 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"}/>
                <button
                onClick={handleSearch}
                className={"absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 "}>
                    <FaSearch />
                </button>
            </div>
        </div>
    )
}