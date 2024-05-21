import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import SectionTitle from "../components/sectionTitle";
import { Disclosure } from "@headlessui/react"

import { useTheme } from "next-themes";
import LangagesChanger from "./LangagesSwitch";

const Navbar = () => {
  /**
   *   Navabr Component Hooks.
   */

  const navigation = [
    {
      id: 1,
      title: "Employer",
      path: "/coming-soon",  // employer
      description: "Create and Manage courses",
    },
    {
      id: 2,
      title: "Listener",
      path: "/coming-soon", // listener
      description: "Learning and Updating Skills",
    },
    {
      id: 3,
      title: "Books",
      path: "/books", // Books
      description: "Learning and Updating Skills",
    },
    {
      id: 4,
      title: "More Info",
      path: "/more-info", // more-info
      description: "Learning and Updating Skills",
    },
  ];

  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full fixed">
      <nav className="container  flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    {theme === "dark" ? (
                      <span>
                        <Image
                          src="/icon/TalkhubLogo_vertical_light.svg"
                          alt="N"
                          width="40"
                          height="40"
                          className="w-10"
                        />
                      </span>
                    ) : (
                      <span>
                        <Image
                          src="/icon/TalkhubLogo_vertical_light.svg"
                          alt="N"
                          width="40"
                          height="40"
                          className="w-10"
                        />
                      </span>
                    )}
                    <h1 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
                      TalkHub
                    </h1>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={item.path}
                        className="w-full px-4 py-2 -ml-4 font-semibold  rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </>
                </Disclosure.Panel>

              </div>
            </>
          )}
        </Disclosure>

        {/* Menu Bar Link  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="mr-3 nav__item"
                data-tooltip-target="tooltip-default"
                key={index}>
                <Link
                  href={item.path}
                  className="inline-block px-4 py-2 text-lg font-semibold text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {item.title}
                </Link>

                <div
                  id="tooltip-default"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Tooltip content
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>

              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <ThemeChanger />

          <LangagesChanger />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
