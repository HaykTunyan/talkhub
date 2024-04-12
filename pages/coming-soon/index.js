import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import { useTheme } from "next-themes";

const CommingSoon = () => {
  /**
   *  Comming Soon Hooks.
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
      <div class="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
        <h1 class="text-5xl text-purple-600 after:text-purple-400 font-bold mb-8 animate-pulse">
          Coming Soon
        </h1>
        <p class="text-purple-600 text-lg mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </>
  );
};

export default CommingSoon;
