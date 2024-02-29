import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useTheme } from "next-themes";
import Container from "../../components/container";
import SectionTitle from "../../components/sectionTitle";

const Privacy = () => {
    /**
     * Privacy Component Hooks.
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
                        pretitle="Privacy Policy"
                        title="Privacy Policy for TalkHub"
                    >
                        This privacy policy sets out how our website uses and protects
                        any information that you give us when you use this website.
                    </SectionTitle>

                    <div className="mt-10" />
                    <div className="flex  flex-col w-full ">

                        <div className=" mb-8">
                            <h2 className="text-2xl font-bold leading-snug tracking-tight text-gray-800  lg:leading-tight  xl:leading-tight dark:text-white mb-2">
                                Information We Collect
                            </h2>
                            <p className="mb-4">We may collect the following information:</p>
                            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-1xl dark:text-gray-300">


                                <ul className="list-disc list-inside mb-4">
                                    <li>
                                        Your name and contact information</li>
                                    <li>Demographic information</li>
                                    <li>
                                        Other information relevant to customer surveys and/or offers
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div className=" mb-8">
                            <h2 className="text-2xl font-bold mb-2">
                                How We Use the Information
                            </h2>
                            <p className="mb-4">
                                We require this information to understand your needs and provide
                                you with a better service, and in particular for the following
                                reasons:
                            </p>
                            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-1xl dark:text-gray-300">
                                <ul className="list-disc list-inside mb-4">
                                    <li>Internal record keeping</li>
                                    <li>Improving our products and services</li>
                                    <li>
                                        Sending promotional emails about new products, special offers,
                                        or other information which we think you may find interesting
                                    </li>
                                    <li>
                                        From time to time, we may also use your information to contact
                                        you for market research purposes. We may contact you by email,
                                        phone, or mail. We may use the information to customize the
                                        website according to your interests.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div className=" mb-8">
                            <h2 className="text-2xl font-bold mb-2">
                                Security
                            </h2>
                            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-1xl dark:text-gray-300">
                                We are committed to ensuring that your information is secure. In
                                order to prevent unauthorized access or disclosure, we have put
                                in place suitable physical, electronic, and managerial
                                procedures to safeguard and secure the information we collect
                                online.
                            </p>
                        </div>

                        <div className=" mb-8">
                            <h2 className="text-2xl font-bold mb-2">
                                Cookies
                            </h2>
                            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-1xl dark:text-gray-300">
                                We are committed to ensuring that your information is secure. In
                                order to prevent unauthorized access or disclosure, we have put
                                in place suitable physical, electronic, and managerial
                                procedures to safeguard and secure the information we collect
                                online.
                            </p>
                            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-1xl dark:text-gray-300">
                                Overall, cookies help us provide you with a better website by
                                enabling us to monitor which pages you find useful and which you
                                do not. A cookie in no way gives us access to your computer or
                                any information about you, other than the data you choose to
                                share with us.
                            </p>
                        </div>

                        <div className=" mb-8">
                            <h2 className="text-2xl font-bold mb-2">
                                Links to Other Websites
                            </h2>
                            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-1xl dark:text-gray-300">
                                Our website may contain links to other websites of interest.
                                However, once you have used these links to leave our site, you
                                should note that we do not have any control over that other
                                website. Therefore, we cannot be responsible for the protection
                                and privacy of any information which you provide whilst visiting
                                such sites and such sites are not governed by this privacy
                                statement. You should exercise caution and look at the privacy
                                statement applicable to the website in question.
                            </p>

                        </div>

                        <div className=" mb-8">
                            <h2 className="text-2xl font-bold mb-2">
                                Controlling Your Personal Information
                            </h2>

                            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-1xl dark:text-gray-300">
                                You may choose to restrict the collection or use of your
                                personal information in the following ways:
                            </p>




                            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-1xl dark:text-gray-300">
                                <ul className="list-disc list-inside mb-4">
                                    <li>
                                        If you have previously agreed to us using your personal
                                        information for direct marketing purposes, you may change your
                                        mind at any time by writing to or emailing us at <strong>talkhubplatform@gmail.com</strong>.
                                    </li>
                                    <li>
                                        We will not sell, distribute, or lease your personal
                                        information to third parties unless we have your permission or
                                        are required by law to do so. We may use your personal
                                        information to send you promotional information about third
                                        parties which we think you may find interesting if you tell us
                                        that you wish this to happen.
                                    </li>
                                    <li>
                                        You may request details of personal information which we hold
                                        about you. If you would like a copy of the information held on
                                        you, please write to <strong> TalkHub </strong>  or email <strong> talkhubplatform@gmail.com </strong>
                                    </li>
                                    <li>
                                        If you believe that any information we are holding on you is
                                        incorrect or incomplete, please write to or email us as soon
                                        as possible at the above address. We will promptly correct any
                                        information found to be incorrect.
                                    </li>
                                </ul>
                            </p>

                        </div>

                        <p class="normal-case mb-4">
                            <strong>
                                This Privacy Policy is subject to change without notice.
                            </strong>
                        </p>

                    </div>
                </div>


            </Container>

            <Footer />
        </>
    );
};

export default Privacy;
