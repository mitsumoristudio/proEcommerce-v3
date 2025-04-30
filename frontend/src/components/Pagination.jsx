
import {Link} from "react-router-dom";

export default function Paginate({ pages, page, isAdmin = false, keyword = "" }) {
    return (
        pages > 1 && (
            <div className="flex space-x-2 mt-4 justify-center">
                {[...Array(pages).keys()].map((x) => {
                    const pageNumber = x + 1;
                    const to = !isAdmin
                        ? keyword
                            ? `/search/${keyword}/page/${pageNumber}`
                            : `/page/${pageNumber}`
                        : `/admin/productlist/${pageNumber}`;

                    const isActive = pageNumber === page;

                    return (
                        <Link
                            key={pageNumber}
                            to={to}
                            className={`px-3 py-1 border rounded-md text-sm font-medium ${
                                isActive
                                    ? 'bg-blue-800 text-white border-blue-800'
                                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
                            }`}
                        >
                            {pageNumber}
                        </Link>
                    );
                })}
            </div>
        )
    );
}

