import Ratings from "./Ratings";

export default function ProductCard({products}) {
    return (
        <div className="-mx-px grid grid-cols-2 border-spacing-1 border-gray-200 sm: mx-0 md: grid-cols-3 lg: grid-cols-4">
            {products.map((product)=> (
                <div key={product._id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
                    <img
                        alt={product.name}
                        src={product.image}
                        className={"aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-80"}
                    />

                    <div className={"pb-4 pt-10 text-center"}>
                        <h3 className={"text-sm font-medium text-gray-800"}>
                            <a href={`/product/${product._id}`}>
                                <span aria-hidden={"true"} className="absolute inset-0"/>
                                {product.name}
                            </a>
                        </h3>
                        <h2 className={"font-medium text-gray-600"}>
                            {product.brand}
                        </h2>
                        <div className={"flex flex-col mt-3 items-center"}>
                            <p className={"sr-only"}>{product.rating} out of 5 starts</p>
                            <div className={"flex items-center"}>
                                <Ratings value={product.rating} text={`${product.numReviews} reviews`} />
                            </div>
                        </div>
                        <p className={"mt-4 text-base font-medium text-gray-800"}>{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )

}