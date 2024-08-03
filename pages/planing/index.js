import React, { useState } from "react";
import Container from "../../components/container";

const Planing = () => {

    /**
     * Planing Hooks.
     */

    return (
        <>
            <Container>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
                        Course Planning
                    </h1>
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
                        <div className="px-4 py-5 sm:px-6">
                            <h2 className="text-lg font-medium text-gray-900">Upcoming Courses</h2>
                        </div>
                        <div className="border-t border-gray-200">
                            <ul className="divide-y divide-gray-200">
                                <li className="flex items-center justify-between px-4 py-4 sm:px-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M4 10h16M6 13h12m-4 3h4" />
                                        </svg>
                                        <div className="ml-4 w-0 flex-1">
                                            <p className="text-sm font-medium text-gray-900">Front End Courses</p>
                                            <p className="text-sm text-gray-500">Start Date: September 1, 2024</p>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">View Details</a>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between px-4 py-4 sm:px-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M4 10h16M6 13h12m-4 3h4" />
                                        </svg>
                                        <div className="ml-4 w-0 flex-1">
                                            <p className="text-sm font-medium text-gray-900">Python Courses</p>
                                            <p className="text-sm text-gray-500">Start Date: September 15, 2024</p>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">View Details</a>
                                    </div>
                                </li>
                                {/* Add more courses here */}
                            </ul>
                        </div>
                    </div>

                    {/* <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <h2 className="text-lg font-medium text-gray-900">Course Planning Calendar</h2>
                        </div>
                        <div className="border-t border-gray-200">
                            <div className="p-6">
                              
                                <p className="text-gray-500">[Calendar Component Here]</p>
                            </div>
                        </div>
                    </div> */}
                </div>


            </Container>
        </>
    )
}


export default Planing;