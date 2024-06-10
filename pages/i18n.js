import i18n from "i18next";
import { initReactI18next } from "react-i18next";


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "banner_title": "Your Premier Online and Offline Learning Platform",
      "banner_subtitle": "Welcome to Talkhub, your go-to destination for a seamless and comprehensive learning experience, both online and offline. At Talkhub, we believe that learning should be accessible to all, anytime, anywhere. Whether you prefer the convenience of online learning or the engagement of in-person classes, Talkhub offers a diverse range of courses and resources to meet your educational needs.",
      "empowering_aspirants": "Empowering Aspirants in the World of Technology",
      "empowering_aspirants_descriptions": "At TalkHub, we are driven by a simple yet powerful mission. to empower new aspirants to learn, contribute, and seize exciting opportunities in the ever-evolving world of technology. In an era where technology is at the forefront of innovation and progress, we believe that everyone should have the chance to embark on a journey of discovery and growth",
      "why_choose_talkhub": "Why Choose TalkHub",
      "our_platform_description": "Our platform is designed to be a dynamic hub where technology enthusiasts, learners, and experts converge to explore, discuss, and share knowledge in the ever-evolving world of technology.",
      "drive_into_a_world": "Dive into a world where technology meets community at TalkHub – your go-to platform for all things tech",
    }
  },
  ru: {
    translation: {
      "banner_title": "Ваша ведущая платформа онлайн- и офлайн-обучения",
      "banner_subtitle": "Добро пожаловать в Talkhub, идеальное место для беспрепятственного и всестороннего обучения как онлайн, так и оффлайн. В Talkhub мы считаем, что обучение должно быть доступно всем, в любое время и в любом месте. Независимо от того, предпочитаете ли вы удобство онлайн-обучения или участие в очных занятиях, Talkhub предлагает широкий спектр курсов и ресурсов для удовлетворения ваших образовательных потребностей.",
      "empowering_aspirants": "Расширение прав и возможностей претендентов в мире технологий",
      "empowering_aspirants_descriptions": "В TalkHub мы руководствуемся простой, но важной миссией. дать возможность новым претендентам учиться, вносить свой вклад и использовать захватывающие возможности в постоянно развивающемся мире технологий. В эпоху, когда технологии находятся на переднем крае инноваций и прогресса, мы считаем, что каждый должен иметь возможность отправиться в путь открытий и роста.",
      "why_choose_talkhub": "Почему выбирают TalkHub",
      "our_platform_description": "Наша платформа создана как динамичный центр, где энтузиасты технологий, учащиеся и эксперты собираются вместе, чтобы исследовать, обсуждать и делиться знаниями в постоянно развивающемся мире технологий.",
      "drive_into_a_world": "Погрузитесь в мир, где технологии встречаются с сообществом, с помощью TalkHub — вашей удобной платформы для всего, что связано с технологиями.",
    }
  },
  am: {
    translation: {
      "banner_title": "Ձեր Պրեմիեր առցանց և անցանց ուսուցման հարթակը",
      "banner_subtitle": "Բարի գալուստ Talkhub՝ ձեր նպատակակետը անխափան և համապարփակ ուսուցման փորձի համար, ինչպես առցանց, այնպես էլ անցանց: Talkhub-ում մենք հավատում ենք, որ ուսուցումը պետք է հասանելի լինի բոլորին, ցանկացած ժամանակ, ցանկացած վայրում: Անկախ նրանից, թե դուք նախընտրում եք առցանց ուսուցման հարմարավետությունը, թե անհատական դասընթացների ներգրավումը, Talkhub-ն առաջարկում է դասընթացների և ռեսուրսների բազմազան տեսականի՝ ձեր կրթական կարիքները բավարարելու համար:",
      "empowering_aspirants": "Ասպիրանտների հզորացում տեխնոլոգիաների աշխարհում",
      "empowering_aspirants_descriptions": "TalkHub-ում մենք առաջնորդվում ենք պարզ, բայց հզոր առաքելությամբ: հզորացնել նոր հավակնորդներին սովորելու, նպաստելու և գրավելու հետաքրքիր հնարավորությունները անընդհատ զարգացող տեխնոլոգիաների աշխարհում: Մի դարաշրջանում, որտեղ տեխնոլոգիաները գտնվում են նորարարության և առաջընթացի առաջնագծում, մենք հավատում ենք, որ յուրաքանչյուր ոք պետք է հնարավորություն ունենա սկսելու բացահայտումների և աճի ճանապարհորդություն:",
      "why_choose_talkhub": "Ինչու ընտրել TalkHub-ը",
      "our_platform_description": "Մեր հարթակը նախագծված է որպես դինամիկ հանգույց, որտեղ տեխնոլոգիայի էնտուզիաստները, սովորողները և փորձագետները համախմբվում են՝ ուսումնասիրելու, քննարկելու և կիսելու գիտելիքները անընդհատ զարգացող տեխնոլոգիաների աշխարհում:",
      "drive_into_a_world": "Սուզվեք մի աշխարհ, որտեղ տեխնոլոգիաները հանդիպում են համայնքին TalkHub-ում՝ ձեր բոլոր տեխնոլոգիական հարթակում",
    }
  }
};


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });


  export default i18n;