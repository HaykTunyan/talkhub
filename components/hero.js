import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import { useTranslation  } from 'react-i18next';

const Hero = () => {

  /**
   * Hero Component Hooks.
   */

  const { t, i18n } = useTranslation();

  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h2 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
              {t('banner_title')}
            </h2>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-1xl dark:text-gray-300">
              {t('banner_subtitle')}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero;