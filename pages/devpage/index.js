// Development Page.
// ----------------

import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectionTitle";
import Container from "../../components/container";

const DevPage = () => {

    /**
     *  Hooks.
     */

    return (
        <div className="">

            <Head>
                <title>TalkHub</title>
                <meta name="description" content="TalkHub Website" />
                <link rel="icon" href="/icon/TalkhubLogoWithoutText.svg" />
            </Head>

            <Navbar />

            <Container>

                <div className="max-w-screen">
                    <SectionTitle
                        pretitle="More Info"
                        title="Development"
                    >
                        TalkHub is an innovative platform designed to cater to the needs of young individuals by providing a space for open discussion, peer support, and educational resources. 
                        The platform will feature forums, live chat options, and integration of multimedia resources to enhance user engagement
                    </SectionTitle>
                    <div className="mt-10" />
           
                </div>

                <div className="max-w-screen">

                </div>

                <section className="bg-gray-2 dark:bg-dark pt-20 pb-10 lg:pt-[120px] lg:pb-20">

                    <div className="container mx-auto">

                        <div className="flex flex-wrap -mx-4">

                            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                                <div
                                    className="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3"
                                >
                                    <img
                                        src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg"
                                        alt="image"
                                        className="w-full"
                                    />
                                    <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                        <h3>
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-800  hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                            >
                                                50+ Best creative website themes & templates
                                            </a>
                                        </h3>
                                        <p
                                            className="text-base text-gray-800 leading-relaxed text-body-color dark:text-dark-6 mb-7"
                                        >
                                            Lorem ipsum dolor sit amet pretium consectetur adipiscing
                                            elit. Lorem consectetur adipiscing elit.
                                        </p>
                                        <a
                                            href="javascript:void(0)"
                                            className="inline-block text-gray-800 py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7  dark:border-dark-3 dark:text-dark-6"
                                        >
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                                <div
                                    className="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3"
                                >
                                    <img
                                        src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-02.jpg"
                                        alt="image"
                                        className="w-full"
                                    />
                                    <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                        <h3>
                                            <a
                                                href="javascript:void(0)"
                                                className="text-gray-800  hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                            >
                                                The ultimate UX and UI guide to card design
                                            </a>
                                        </h3>
                                        <p className="text-base text-gray-800  leading-relaxed text-body-color mb-7">
                                            Lorem ipsum dolor sit amet pretium consectetur adipiscing
                                            elit. Lorem consectetur adipiscing elit.
                                        </p>
                                        <a
                                            href="javascript:void(0)"
                                            className="inline-block text-gray-800 py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7  dark:border-dark-3 dark:text-dark-6"
                                        >
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                                <div
                                    className="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3"
                                >
                                    <img
                                        src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-03.jpg"
                                        alt="image"
                                        className="w-full"
                                    />
                                    <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                        <h3>
                                            <a
                                                href="javascript:void(0)"
                                                className="  text-gray-800  hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                            >
                                                Creative Card Component designs graphic elements
                                            </a>
                                        </h3>
                                        <p className="text-gray-800  text-base leading-relaxed text-body-color mb-7">
                                            Lorem ipsum dolor sit amet pretium consectetur adipiscing
                                            elit. Lorem consectetur adipiscing elit.
                                        </p>
                                        <a
                                            href="javascript:void(0)"
                                            className="inline-block text-gray-800 py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7  dark:border-dark-3 dark:text-dark-6"
                                        >
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>

            </Container>

            {/* <Footer /> */}

        </div>
    )
};

export default DevPage;
