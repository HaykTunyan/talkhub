import Image from "next/image";
import React from "react";
import Container from "./container";


import CeoFunder from  "../public/img/ceo-founder.jpg";
import JSLogo from  "../public/img/languages/JavaScript.png";
import WEBLogo from "../public/img/languages/WEB.png";
import NextLogo from "../public/img/languages/Nextjs-logo.jpg";
import NodeLogo from "../public/img/languages/Node_logo.png";
import PythonLogo from  "../public/img/languages/Python_logo.png";
import ReactLogo from "../public/img/languages/React_Logo.png";
import TypeScriptLogo from "../public/img/languages/Typescript.png";


const CardLanguages  = () => {

    
  return (
    <Container>
      <div className="grid  gap-10 align-content:center  lg:grid-cols-2 xl:grid-cols-3">

        {/* JavaScript */}
         <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Make start the  <Mark>JavaScript</Mark> course, you'll want to follow these steps.
            </p>

            <LogoPrograming
              image={JSLogo}
              name="JavaScript"
              title="Join in the Middle Group"
            />
          </div>
        </div>

        {/* HTML and CSS */}
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Make start the  <Mark>Website</Mark> course, you'll want to follow these steps.
            </p>

            <LogoPrograming
              image={WEBLogo}
              name="WebSite"
              title="Join in the Middle Group"
            />
          </div>
        </div>

        {/* TypeScript */}
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Make start the  <Mark>TypeScript</Mark> course, you'll want to follow these steps.
            </p>

            <LogoPrograming
              image={TypeScriptLogo}
              name="WebSite"
              title="Join in the Middle Group"
            />
          </div>
        </div>
     
        {/* Node JS */}
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Make start the  <Mark>Node  JS</Mark> course, you'll want to follow these steps.
            </p>

            <LogoPrograming
              image={NodeLogo}
              alt={"Node"}
              name="Node JS"
              title="Join in the Junior Group"
            />
          </div>
        </div>

        {/* React JS */}
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Make start the  <Mark>React JS</Mark> course, you'll want to follow these steps.
            </p>

            <LogoPrograming
              image={ReactLogo}
              alt={"React"}
              name="React JS"
              title="Join in the Junior Group"
            />
          </div>
        </div>

        {/* Next JS */}
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Make start the  <Mark>Next JS</Mark> course, you'll want to follow these steps:
            </p>

            <LogoPrograming
              image={NextLogo}
              alt={"Next"}
              name="Next JS"
              title="Join in the Junior Group"
            />
          </div>
        </div>

      </div>

    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

function LogoPrograming(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt={props.alt}
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

export default CardLanguages;