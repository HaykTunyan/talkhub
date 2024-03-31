import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Container from "../../components/container";
import SectionTitle from "../../components/sectionTitle";
import Image from "next/image";
import SevenDay from "../../public/pdf/7-day.png";

import { useTheme } from "next-themes";

const Books = () => {
    /**
     *  Books Components Hooks.
     */

    const { theme, setTheme } = useTheme();

    return (
        <>
            <Head>
                <title>TalkHub</title>
                <meta name="description" content="TalkHub Website" />
                <link rel="icon" href="/icon/TalkhubLogoWithoutText.svg" />
            </Head>
            <Navbar />

            <Container>
                <div className="max-w-screen">
                    <SectionTitle
                        pretitle="Books"
                        title="Books for TalkHub"
                    >
                        "Books for creation by TalkHub, utilizing life stories of the owner."


                    </SectionTitle>

                    <div className="mt-10" />
                    <div className="flex  flex-col w-full ">

                        <div className=" mb-8">
                            <h2 className="text-2xl font-bold leading-snug tracking-tight text-gray-800  lg:leading-tight  xl:leading-tight dark:text-white mb-2">
                                This version maintains the original meaning while improving clarity and correctness. It specifies that TalkHub is involved in the creation of books and clarifies that the life stories being utilized belong to the owner
                            </h2>

                        </div>

                       


                    </div>
           
                </div>

                <div className="grid gap-10 lg:grid-cols-3 xl:grid-cols-3">
                            <div className="lg:col-span-2 xl:col-auto">
                                <div className="flex flex-col  w-full h-full ">
                                    <div className="w-auto  flex justify-center md:pr-2 transition-transform">
                                        <Image
                                            src={SevenDay}
                                            width="400"
                                            height="40"
                                            className={"object-cover"}
                                            alt="SevenDay"
                                            loading="eager"
                                            placeholder="blur"
                                        />
                                    </div>
                                    <div className="pt-5 md:pt-0  md:pl-2 flex flex-col items-center ">
                                        <p className="text-2xl leading-normal">
                                            Seven Day
                                        </p>
                                        <a
                                            href="./pdf/7day.pdf"
                                            rel="noopener"
                                            download
                                            className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                                            <span> Download Book  </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


            </Container>
            <Footer />
        </>
    );
};

export default Books;
