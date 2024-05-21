// Designe Page 
// =====================

import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectionTitle";
import Container from "../../components/container";

const  DesignPage = () => {

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
                        title="Designe"
                    >
                        At Generation Me TalkHub, we prioritize creating an engaging and user-centric platform that resonates with our target audience. 
                        Our design philosophy revolves around simplicity, accessibility, and modernity, ensuring a seamless user experience across all devices.
                    </SectionTitle>
                    <div className="mt-10" />
                </div>

            </Container>

            <Footer />

        </div>
    )

 };


 export default DesignPage