import React, { useRef, useState } from "react";
import { a, useTransition } from "@react-spring/web";
import Link from "next/link";
import { socialIcon } from "../jsonData/menu";
import { Trail3 } from "../animation/trail";

export default function MobileMenu1({ data, passclose, Mactive }) {
  const [active, setactive] = useState("");
  const ref = useRef(null);

  const transitions = useTransition(Mactive, {
    from: { opacity: 0, x: "50px" },
    enter: { opacity: 1, x: "0" },
    leave: { opacity: 0.2, x: "50" },
    config: { duration: 70 },
  });

  const handleDropDown = (e) => {
    const { title } = e.currentTarget;
    if (active == title) {
      setactive("");
    } else {
      setactive(title);
    }
  };

  return (
    <>
      {transitions((style, i) => (
        <a.div
          key={i}
          style={style}
          ref={ref}
          className={`fixed  z-40 top-0 w-full max-w-lg right-0 bg-[#222236] overflow-y-scroll h-full transition-all ease-in duration-[300ms]`}
        >
          <div className="flex justify-between  py-5 px-5">
            <Link legacyBehavior href="/">
              <a onClick={passclose}>
                <img src="/imgs/logo-white.svg" alt="logo" className="w-44" />
              </a>
            </Link>
            <button onClick={passclose} className="text-zinc-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between flex-col h-[90%] pb-10">
            <ul className="flex flex-col divide-y divide-zinc-500 w-full">
              <Trail3 open={Mactive} delay={300}>
                {data.main_links.map((item, i) => (
                  <li
                    title={item.name}
                    onClick={handleDropDown}
                    key={i}
                    className="relative py-3 px-5  capitalize"
                  >
                    <Link href={item.link}>
                      <p
                        onClick={() => (!item.sub_menu ? passclose() : "")}
                        className="flex justify-between items-center gap-2  text-white hover:text-c_yellow pb-1 duration-100 ease-linear"
                      >
                        {item.name}
                        {item.sub_menu ? (
                          <span
                            className={`${
                              active == item.name ? "rotate-180" : ""
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        ) : (
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        )}
                      </p>
                    </Link>
                    {item.sub_menu && (
                      <ul
                        className={`${
                          active == item.name ? "flex" : "hidden"
                        }   gap-2 flex-col bg-c_light_dark w-full shadow-md px-5 py-3`}
                      >
                        {item.sub_menu.map((item, i) => (
                          <li key={i}>
                            <Link href={item.link}>
                              <p
                                onClick={passclose}
                                className="flex items-center gap-2 pt-2 pb-1 text-white hover:translate-x-2 hover:border-light_bg hover:text-c_yellow duration-100 ease-in max-w-max"
                              >
                                {item.name}
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </Trail3>
            </ul>

            {/* social links */}
            <div className="flex gap-5 justify-center items-center px-5">
              {data.social_links.map((item, i) => (
                <a
                  onClick={passclose}
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer text-white hover:text-c_yellow"
                  dangerouslySetInnerHTML={{ __html: socialIcon[item.name] }}
                ></a>
              ))}
            </div>
          </div>
        </a.div>
      ))}
    </>
  );
}
