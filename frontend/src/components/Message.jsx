
export const Message = ({text, sender, isOwnMessage}) => {
    return (
        <>
            <div className={`flex items-start mb-2 ${isOwnMessage ? "justify-end" : "justify-start"}`}>
                <div
                    className={`max-w-sm px-4 py-2 rounded-xl shadow-md text-sm ${isOwnMessage ? "bg-blue-600 text-white rounded-br-none" :
                        "bg-gray-300 text-gray-800 rounded-bl-none"}`}>
                    <p className={"font-medium text-gray-800"}>{sender}</p>
                    <p className={"font-medium text-gray-800"}>{text}</p>
                </div>
            </div>
        </>
    )
}