import Head from "next/head";
import Navbar from "../../components/navbar";

import { useTheme } from "next-themes";

const Teacher = () => {
  /**
   *  Teacher Components Hooks.
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

      <div className="">
        <section id="teacher_page" class="bg-gray-50 dark:bg-black h-screen w-full flex items-center justify-around">
            <div className="card ring-gray-50 ">
                
                <p> Teacher </p>

            </div>
        </section>
      </div>
    </>
  );
};

export default Teacher;
