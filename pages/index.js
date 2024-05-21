import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import VideoComponent from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
// import Testimonials from "../components/testimonials";
// import Cta from "../components/cta";
// import Faq from "../components/faq";
// import PopupWidget from "../components/popupWidget";
import CardLanguages from "../components/cardLanguages";
// import ContactCard from "../components/contactCard";
import { useTheme } from "next-themes";
import { changeLanguage } from "i18next";
import Container from "../components/container";
import { useTranslation, Translation  } from 'react-i18next';
// import Video from 'next-video';
// import useVideo from "../videos/TalkHub.mp4";

// import { useTranslations } from "next-intl";

const lang = {
  en: { nativeName: "English" },
  am: { nativeName: 'Հայերեն' },
}

const Home = () => {
  /**
   *  Home Components Hooks.
   */

  const { t, i18n } = useTranslation();

  // const { theme, setTheme } = useTheme();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
        title={t('banner_title')}
      >
        {t('empowering_aspirants_descriptions')}
      </SectionTitle>
      
      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <SectionTitle
        pretitle=""
        title={t('why_choose_talkhub')} 
      >
        🚀 {t('drive_into_a_world')}
      </SectionTitle>
      {/*  */}
      <CardLanguages />
      {/* <VideoComponent /> */}


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
