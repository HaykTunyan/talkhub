import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from 'react-i18next';

const LangagesChanger = () => {

    /**
     * Change Langages Hooks.
     */

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const { t, i18n } = useTranslation();

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center space-x-3">
            {/* <button
                onClick={() => changeLanguage('am')}
                className="text-gray-300 rounded-full outline-none focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <defs>
                        <clipPath id="circle-clip">
                            <circle cx="12" cy="12" r="12" />
                        </clipPath>
                    </defs>
                    <g clipPath="url(#circle-clip)">
                        <path fill="#D90012" d="M0 0h24v8H0z" />
                        <path fill="#0033A0" d="M0 8h24v8H0z" />
                        <path fill="#F2A800" d="M0 16h24v8H0z" />
                    </g>
                </svg>
            </button> */}
            <button
                // onClick={() => changeLanguage('en')}
                className="rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20">
          
               <img src="https://img.icons8.com/?size=512&id=t3NE3BsOAQwq&format=png" alt="format" className="w-7 h-7" />
            </button>
        </div>
    );
};

export default LangagesChanger;
