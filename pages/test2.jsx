import React from "react";

export default function Test2() {
  return (
    <>
      <style jsx>
        {`
          .shadow {
            position: relative;
          }

          .shadow:before,
          .shadow:after {
            content: "";
            position: absolute;
            top: -1px;
            left: -1px;
            background-image: linear-gradient(
              45deg,
              #fb0094,
              #0000ff,
              #00ff00,
              #ffff00,
              #ff0000,
              #fb0094,
              #0000ff,
              #00ff00,
              #ffff00,
              #ff0000
            );
            background-size: 400%;
            width: calc(100% + 2px);
            border-radius: 20px;
            height: calc(100% + 2px);
            z-index: -1;
            animation: animate 20s linear infinite;
          }

          .shadow:after {
            filter: blur(10px);
          }

          @keyframes animate {
            0% {
              background-position: 0 0;
            }
            50% {
              background-position: 300% 0;
            }
            100% {
              background-position: 0 0;
            }
          }
        `}
      </style>

      <div className="max-w-3xl shadow mx-auto bg-white dark:bg-c_light_dark rounded-[20px]">
        <div className="md:p-14 p-10 rounded-[20px]">
          <div className="flex flex-col gap-5 items-center">
            <h2 className="md:text-4xl font-semibold text-3xl dark:text-white text-zinc-800">
              What is Lorem Ipsum?
            </h2>
            <p className="dark:text-zinc-300  text-zinc-700 text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <form className="flex mt-7 w-full max-w-md flex-col gap-5 items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-3 dark:text-white w-full px-5 rounded-full  bg-transparent border-2 border-yellow-400 dark:border-c_yellow/60 outline-none focus:border-c_yellow"
              />
              <button
                style={{
                  backgroundImage:
                    "linear-gradient(75deg,#e8dd8e,#f5f8cd 20%,#b57d26 85%)",
                }}
                className="py-3 hover:scale-[1.05] ease-in duration-100 max-w-sm rounded-full px-10 w-full font-bold"
              >
                Download Your PDF
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
