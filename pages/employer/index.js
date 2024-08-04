import Head from "next/head";
import Navbar from "../../components/navbar";
import { useTheme } from "next-themes";
import Container from "../../components/container";
import Footer from "../../components/footer";

const Employer = () => {
    /**
     *  Employer Components Hooks.
     */

    const { theme, setTheme } = useTheme();

    return (
        <>

            <Container>
                <div className="">
                    <section id="employer_page" className=" h-screen w-full flex items-center justify-around">
                        <div className="card ring-gray-50 ">
                            <p> Employer </p>
                        </div>
                    </section>
                </div>
            </Container>

        </>
    );
};

export default Employer;
