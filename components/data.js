import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Why Choose TalkHub",
  desc: "Our platform is designed to be a dynamic hub where technology enthusiasts, learners, and experts converge to explore, discuss, and share knowledge in the ever-evolving world of technology.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Inclusive Learning:",
      desc: "We believe that technology is for everyone. Our platform is designed to be inclusive, catering to learners of all levels and backgrounds.",
     icon: <FaceSmileIcon />,
    },
    {
      title: "Continuous Innovation:",
      desc: "Stay ahead in the fast-paced world of technology by accessing the latest resources and participating in discussions that explore cutting-edge trends and innovations.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Community-Driven:",
      desc: "TalkHub thrives on community engagement. Join a vibrant community where knowledge is shared, questions are welcomed, and learning is a collaborative journey.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
