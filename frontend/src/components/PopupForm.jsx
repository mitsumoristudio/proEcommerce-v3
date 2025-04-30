import React from "react";

export default function PopupForm({headline, form1, form2, placeholder1, placeholder2, setOpenEdit}) {


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">{headline}</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            {form1}
                        </label>
                        <input
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder={placeholder1}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            {form2}
                        </label>
                        <input
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder={placeholder2}
                        />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={() => setOpenEdit(false)}
                            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}