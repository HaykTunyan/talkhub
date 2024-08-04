import React, { useState } from "react";
import Container from "../../components/container";
import SectionTitle from "../../components/sectionTitle";

const Planing = () => {

    /**
     * Planing Hooks.
     */

    return (
        <>
            <Container>
                <div className="max-w-7xl mx-auto md:py-12 md:px-4 lg:px-8">
                    <SectionTitle
                        pretitle="Pricing"
                        title={'TalkHub Pricing Plans'}
                    >
                        At TalkHub, we offer flexible and affordable pricing plans designed to help you embark on your journey of discovery and growth in the world of technology. Choose the plan that best suits your needs and start learning today!
                    </SectionTitle>
                    <section class="px-0 md:px-8  md:py-24">
                        <div class="mt-24">
                            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {/* PLan One */}
                                <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100">
                                    <div class="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
                                        <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 capitalize">Free Plan</h5>
                                        <p class="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500">Embark on your learning journey at no cost </p>
                                        <h3 class="antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 flex gap-1 mt-4">Price: $0/month<span class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 -translate-y-0.5 self-end opacity-70"></span></h3>
                                    </div>
                                    <div class="p-6 border-t border-blue-gray-50">
                                        <ul class="flex flex-col gap-3">
                                            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-gray-900">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                                <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Access to a limited selection of courses</p>
                                            </li>
                                            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-gray-900">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                                <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Community forum participation</p>
                                            </li>
                                            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-gray-900">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                                <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Weekly newsletters with industry updates</p>
                                            </li>
                                            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-gray-900">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                                <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Basic support</p>
                                            </li>
                                        </ul><button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-purple-600 text-purple-600 hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full mt-6" type="button">buy now</button>
                                    </div>
                                </div>
                                {/* Plan Two */}
                                <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100">
                                    <div class="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
                                        <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 capitalize">Starter Plan</h5>
                                        <p class="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500">Start tech career with comprehensive courses</p>
                                        <h3 class="antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 flex gap-1 mt-4">Price: $99.99/month<span class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 -translate-y-0.5 self-end opacity-70"></span></h3>
                                    </div>
                                    <div class="p-6 border-t border-blue-gray-50">
                                        <ul class="flex flex-col gap-3">
                                            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-gray-900">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                                <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Access to all courses</p>
                                            </li>
                                            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-gray-900">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                                <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Interactive quizzes and assignments</p>
                                            </li>
                                            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-gray-900">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                                <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Participation in live webinars</p>
                                            </li>
                                            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-gray-900">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                                <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Community forum participation</p>
                                            </li>
                                            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-gray-900">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                                <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Weekly newsletters with industry updates</p>
                                            </li>
                                            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-gray-900">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                                <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Standard support</p>
                                            </li>
                                        </ul><button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-purple-600 text-purple-600 hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full mt-6" type="button">buy now</button>
                                    </div>
                                </div>
                                {/* Plan Three */}
                                <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100">
                                    <div class="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
                                        <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 capitalize">Pro Plan</h5>
                                        <p class="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500">Advance skills with personalized mentorship</p>
                                        <h3 class="antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 flex gap-1 mt-4">Price: 299.99/month<span class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 -translate-y-0.5 self-end opacity-70"></span></h3>
                                    </div>
                                    <div class="p-6 border-t border-blue-gray-50">
                                        <ul class="flex flex-col gap-3">
                                            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-gray-900">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                                <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Tailored training programs for teams</p>
                                            </li>
                                            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-gray-900">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                                <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Dedicated account manager</p>
                                            </li>
                                            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-gray-900">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                                <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Advanced analytics and reporting</p>
                                            </li>
                                            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-gray-900">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                                <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Customizable learning portal</p>
                                            </li>
                                            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-gray-900">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                                <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">On-site workshops and training sessions</p>
                                            </li>
                                            <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-gray-900">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                            </svg>
                                                <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">24/7 premium support</p>
                                            </li>
                                        </ul><button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-purple-600 text-purple-600 hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full mt-6" type="button">buy now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Container>
        </>
    )
}


export default Planing;