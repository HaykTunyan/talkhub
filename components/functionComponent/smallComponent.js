import Image from "next/image";
import React from "react";

export default function Avatar(props) {
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
};

export default function Mark(props) {
    return (
        <>
            {" "}
            <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                {props.children}
            </mark>{" "}
        </>
    );
};

export default function BenefitComponent(props) {
    return (
      <>
        <div className="flex items-start mt-8 space-x-3">
          <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
            {React.cloneElement(props.icon, {
              className: "w-7 h-7 text-indigo-50",
            })}
          </div>
          <div>
            <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
              {props.title}
            </h4>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              {props.children}
            </p>
          </div>
        </div>
      </>
    );
  }
