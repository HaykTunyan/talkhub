import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useTheme } from "next-themes";
import Container from "../../components/container";

const Listener = () => {
    /**
     * Listener Component Hooks.
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
                <section
                    id="listener_page"
                    class="bg-gray-50 dark:bg-black h-screen w-full flex items-center justify-around"
                >
                    <div className="card ring-gray-50 ">
                        <p> Listener </p>
                    </div>
                </section>
            </Container>
            <Footer />
        </>
    );
};

export default Listener;
