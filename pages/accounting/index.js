// Accounting Page 
// =============================================================

import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectionTitle";
import Container from "../../components/container";

const Accounting = () => {

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
                        title="Accounting"
                    >
                        The Accounting Department of Generation Me TalkHub is responsible for managing all financial aspects of the project.
                        This includes budgeting, financial reporting, compliance with financial regulations, and ensuring the efficient allocation and tracking of resources.
                    </SectionTitle>
                    <div className="mt-10" />

                </div>

            </Container>

            {/* <Footer /> */}

        </div>
    )
};

export default Accounting;