import { IconCard, Numerology2, TarotCard } from "@/components/calculatorCard";
import HoroscopeCards from "@/components/horoscope/horoscopeCards";
import { svgIcon } from "@/components/svgicons";
import React from "react";
// import App from "./test";

export default function HomePage() {
  return (
    <>
      <style jsx>
        {`
          .star,
          .star2 {
            position: relative;
          }
          .star:after {
            // background-image: url("/imgs/star.svg");
          }
          .star2:after {
            background-image: url("/imgs/star2.svg");
          }
          .star:after,
          .star2:after {
            position: absolute;
            content: "";
            top: 0;
            z-index: -1;
            background-repeat: no-repeat;
            left: 0;
            background-size: cover;
            width: 100%;
            height: 100%;
          }
          @keyframes gradient {
            0% {
              background: linear-gradient(45deg, #add8e6, #90ee90);
            }
            50% {
              background: linear-gradient(45deg, #90ee90, #add8e6);
            }
            100% {
              background: linear-gradient(45deg, #add8e6, #90ee90);
            }
          }

          .App {
            animation: gradient 20s linear infinite;
          }
        `}
      </style>
      {/* <App /> */}
      {/* #2C2B46 */}
      <div className="md:py-24 App star px-5 py-20 flex flex-col gap-14 md:gap-20">
        <div className="flex flex-col gap-5 max-w-4xl mx-auto text-center">
          <h1
            style={{ lineHeight: 1.1 }}
            className="text-zinc-800 dark:text-white md:text-[3.3rem] font-bold text-4xl"
          >
            Ready to Transform with{" "}
            <span className="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
              Astrology
            </span>
          </h1>
          <p className="dark:text-zinc-300 md:text-lg">
            Explore the alchemy of astrology and how it can help you cultivate
            inner transformation that manifests as tangible changes in your
            outer world. With Astro Pages as your guide, discover the secrets to
            creating lasting change and manifesting the life you desire.
          </p>
        </div>

        <div className="mx-auto md:gap-6 gap-5 grid grid-cols-1 max-w-7xl sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 w-full">
          <IconCard
            bg="bg-gradient-to-br from-indigo-200 to-blue-300"
            text="Natal Chart"
            link="/natal-chart"
            desc="Your birth chart is like a cosmic snapshot of the sky at the exact moment you took your first breath! It's a treasure trove of insight into your personality, passions, and potential."
            img={svgIcon.birth_chart}
          />
          <IconCard
            bg="bg-gradient-to-br from-lime-100 to-green-300"
            text="Personalised Transit"
            link="/personalised-transit"
            desc="Navigate the cosmic currents and gain valuable insight into the current astrological climate and its impact on your life's journey. Make the most of opportunities and know the best timing for important events with confidence and clarity today"
            img={svgIcon.transit}
          />
          <IconCard
            bg="bg-gradient-to-br from-orange-100 to-yellow-200"
            text="Solar Return"
            link="/solar-return"
            desc="Get valuable insight into the astrological climate for your upcoming year and use this knowledge to navigate your life's journey with confidence and clarity. "
            img={svgIcon.solar_return}
          />
          <IconCard
            bg="bg-gradient-to-br from-pink-100 to-rose-200"
            text="Synastry Chart"
            link="/synastry-chart"
            desc="Explore the unique astrological aspects that define your bond and gain valuable insights into how to navigate your relationship with ease. Don't leave your cosmic compatibility to chance - try the Synastry Calculator today! "
            img={svgIcon.synastry}
          />
        </div>
      </div>
      <HoroscopeCards />
      <div className="px-5 star2 max-w-6xl mx-auto md:pb-24 py-14">
        <h2 className="font-semibold md:text-5xl text-center dark:text-white text-4xl">
          Divinity Astrology
        </h2>
        <div className="max-w-6xl md:gap-14 gap-10 mx-auto grid grid-cols-1 sm:grid-cols-3 md:py-24 py-14">
          <TarotCard extra="sm:col-span-2" />
          <Numerology2 />
        </div>
      </div>

      {/* <div className="max-w-6xl grid grid-cols-2 gap-10 mx-auto px-5">
          <CalculatorCard />
          <CalculatorCard />
        </div> */}
    </>
  );
}
