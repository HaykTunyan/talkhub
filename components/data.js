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


const benefitThree = {
  title: 'Additional information about TalkHub',
  desc: "Overall, TalkHub is not just a learning platform; it's a catalyst for personal and professional growth, empowering individuals and organizations to thrive in today's rapidly evolving business landscape.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Cutting-edge Technology:",
      desc: " TalkHub harnesses the power of cutting-edge technology to deliver a seamless and immersive learning experience. Our platform utilizes state-of-the-art features such as interactive simulations, virtual classrooms, and gamified learning modules to enhance engagement and retention.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Global Reach:",
      desc: "With TalkHub, geographical barriers no longer limit access to quality education. Our platform is accessible worldwide, enabling learners from diverse backgrounds and locations to connect and collaborate in a global learning community.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Industry-Relevant Content: ",
      desc: "Our course offerings are meticulously curated to align with the latest industry trends and demands. Whether it's digital marketing, finance, project management, or leadership development, TalkHub's courses are designed to equip learners with practical skills and knowledge that are directly applicable in today's competitive business landscape.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: " Community Engagement:",
      desc: "TalkHub fosters a vibrant learning community where learners can connect, collaborate, and exchange ideas. Through discussion forums, peer-to-peer networking opportunities, and collaborative projects, users have the chance to learn from each other and build valuable professional relationships.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Continuous Improvement:",
      desc: " At TalkHub, we are committed to continuous improvement and innovation. We regularly update our course offerings, incorporate user feedback, and leverage data analytics to ensure that our platform remains at the forefront of online education.",
      icon: <SunIcon />,
    },
    {
      title: "Affordable Pricing:",
      desc: "We believe that education should be accessible to all, which is why TalkHub offers competitive pricing plans and flexible payment options. Whether you're an individual learner or an organization seeking corporate training solutions, TalkHub provides affordable options to suit your budget and needs.",
      icon: <FaceSmileIcon />,
    },
  ],
}


export {benefitOne, benefitTwo , benefitThree };
