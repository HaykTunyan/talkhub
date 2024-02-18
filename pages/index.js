import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import CardLanguages from "../components/cardLanguages";
import ContactCard from "../components/contactCard";
import { useTheme } from "next-themes";

const Home = () => {
  /**
   *  Home Components Hooks.
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
      <Hero />
      <SectionTitle
        pretitle=""
        title="Empowering Aspirants in the World of Technology"
      >
        At TalkHub, we are driven by a simple yet powerful mission. to empower
        new aspirants to learn, contribute, and seize exciting opportunities in
        the ever-evolving world of technology. In an era where technology is at
        the forefront of innovation and progress, we believe that everyone
        should have the chance to embark on a journey of discovery and growth.
      </SectionTitle>
      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <SectionTitle
        pretitle="Meet Our Team:"
        title="How To Start in TalkHub"
      >
        🚀 Dive into a world where technology meets community at TalkHub – your go-to platform for all things tech
      </SectionTitle>
      {/*  */}
      <CardLanguages />
      {/* <Video /> */}
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle> */}
      {/* <Testimonials /> */}
      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}
      {/* <Faq /> */}
      {/* <Cta /> */}
      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
};

export default Home;
