import Head from "next/head";
import Navbar from "../../components/navbar";
import Container from "../../components/container";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectionTitle";
import { benefitThree } from "../../components/data";
import Benefits from "../../components/benefits";

const MoreInfo = () => {
    /**
     *  More Info Components Hooks.
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
                <div className="mt-36" />

                <div className="max-w-screen">
                    <SectionTitle
                        pretitle="More Info"
                        title="Info for TalkHub"
                    >
                        "TalkHub  Online Platform, where we specialize in delivering an exceptional and enjoyable learning experience focused on essential business concepts.
                        No matter where you are in your career journey or geographical location, our educational platform is designed to empower you in achieving both your personal and professional aspirations"
                    </SectionTitle>
                    <div className="mt-10" />
                    <div className="flex flex-col w-full">
                        <div className="mb-8">
                            <p className="text-xl font-bold leading-snug tracking-tight text-gray-800  lg:leading-tight  xl:leading-tight dark:text-white mb-2">
                                At TalkHub, we believe that learning should be engaging and effective.
                                That's why we offer a unique approach to education, combining interactive content with comprehensive resources to ensure a thorough understanding of critical business principles.
                            </p>
                            <p className="text-xl font-bold leading-snug tracking-tight text-gray-800  lg:leading-tight  xl:leading-tight dark:text-white mb-2">
                                Whether you're a seasoned professional looking to expand your skill set or a newcomer eager to embark on your entrepreneurial journey, TalkHub provides the tools and knowledge necessary for success.
                                Our diverse range of courses caters to various skill levels and interests, ensuring that there's something valuable for everyone.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-28" />

                <div className="max-w-screen">
                    <div className="mt-10">
                        <p className="text-xl font-bold leading-snug tracking-tight text-gray-800  lg:leading-tight  xl:leading-tight dark:text-white mb-2">
                            At TalkHub, our commitment to excellence extends beyond just delivering quality educational content.
                            We understand that learning is a dynamic process that requires continuous engagement and support.
                            That's why our platform offers personalized learning pathways, allowing users to tailor their educational journey according to their specific goals and preferences.
                            Whether you prefer self-paced learning or interactive group sessions, TalkHub provides a flexible and adaptable learning environment that accommodates diverse learning styles.
                            Additionally, our team of experienced instructors and industry experts is dedicated to providing ongoing guidance and mentorship, ensuring that every learner receives the support they need to thrive.
                            With TalkHub, you're not just acquiring knowledge; you're embarking on a transformative learning experience that empowers you to excel in today's competitive business landscape.
                        </p>
                    </div>
                </div>
            </Container>
            <Benefits data={benefitThree} />
            <Footer />

        </>
    );
};

export default MoreInfo;
