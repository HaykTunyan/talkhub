import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Container from "../../components/container";

const Blog = () => {

    /**
     * Blog Hooks.
     */

    return (
        <>
            <Head>
                <title>TalkHub</title>
                <meta name="description" content="TalkHub Website" />
                <link rel="icon" href="/icon/TalkhubLogoWithoutText.svg" />
            </Head>
            <Navbar />
            <Container>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-3xl font-bold mb-2">Blog post Talk Hub</h1>
                        <div className="py-8">
                            <p className="text-gray-500 text-sm">Published on <time datetime="2024"> 2024</time></p>
                        </div>
                        <img src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c" alt="Featured image" class="w-full h-auto mb-8" />
                        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                            <p className="font-normal">
                                Welcome to Talkhub, your premier destination for a seamless and comprehensive learning experience, blending the best of online and offline worlds. At Talkhub, we're passionate about making learning accessible to everyone, regardless of location or schedule constraints.
                            </p>
                            <div className="pt-4" />
                            <p className="font-normal">
                                We understand that each individual has unique preferences when it comes to learning. Some thrive in the flexibility of online courses, while others prefer the engagement of face-to-face interactions. That's why Talkhub offers a diverse range of courses and resources to cater to your educational needs, whether you're logging in from the comfort of your home or joining us in person.
                            </p>
                            <div className="pt-4" />
                            <p className="font-normal">
                                Our online platform provides a user-friendly interface where you can access courses, interact with instructors, and collaborate with fellow learners from around the globe. With a variety of multimedia tools and interactive features, our online courses are designed to keep you engaged and motivated as you pursue your educational goals.
                            </p>
                            <div className="pt-4" />
                            <p className="font-normal">
                                For those who crave the energy of in-person learning, Talkhub offers offline classes at select locations. Our expert instructors deliver dynamic lectures and hands-on activities to enhance your learning experience and foster meaningful connections with your peers.
                            </p>
                            <div className="pt-4" />
                            <p className="font-normal">
                                At Talkhub, we're committed to empowering individuals through education. Whether you're looking to expand your skill set, advance your career, or simply explore new interests, we have the resources and support you need to succeed. Join us at Talkhub and unlock your full potential today.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pt-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="py-8">
                            <p className="text-gray-500 text-sm">Published on <time datetime="2024"> 2024</time></p>
                        </div>
                        <div className="pb-8">
                            <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>
                                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
                            </a>
                        </div>
                        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                            <p className="font-normal">
                                Online learners can enjoy the convenience of accessing course materials from anywhere with an internet connection.
                                Our user-friendly platform provides interactive lessons, multimedia resources, and opportunities for collaboration with instructors and fellow learners.
                            </p>
                            <div className="pt-4" />
                            <p className="font-normal">
                                But Talk Hub is more than just a learning platform – it's a community. Join us and become part of a network of like-minded individuals who share your passion for knowledge and growth. Connect with fellow learners, exchange ideas, and inspire each other to reach new heights.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pb-20" />
            </Container>
        </>
    )
};

export default Blog;