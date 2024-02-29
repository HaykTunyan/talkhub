import React from "react";

const Planing = () => {

    /**
     * Planing Hooks.
     */


    return (
        <>
            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
                <div className="max-w-4xl bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Choose a Plan</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">Starter</h3>
                            <p className="text-gray-600 mb-4">Perfect for small teams or individuals</p>
                            <p className="text-3xl font-bold mb-4">$19</p>
                            <p className="text-gray-600">per month</p>
                            <ul className="mt-4">
                                <li className="flex items-center text-gray-600 mb-2">
                                    <svg className="w-4 h-4 mr-2 fill-current text-green-500" viewBox="0 0 20 20">
                                        <path d="M3.293 8.293a1 1 0 0 1 1.414-1.414L10 12.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7z" />
                                    </svg>
                                    Unlimited Projects
                                </li>
                                <li className="flex items-center text-gray-600 mb-2">
                                    <svg className="w-4 h-4 mr-2 fill-current text-green-500" viewBox="0 0 20 20">
                                        <path d="M3.293 8.293a1 1 0 0 1 1.414-1.414L10 12.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7z" />
                                    </svg>
                                    10 GB Storage
                                </li>

                            </ul>
                            <button className="bg-blue-500 text-white font-semibold px-4 py-2 mt-6 rounded hover:bg-blue-600">Select Plan</button>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">

                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}


export default Planing;