import {
  AspectCard,
  FetureCard,
  PlanetHouse,
  ProfileDetailCard2,
} from "../../components/calculator/utils";
import {
  elements,
  hemisphere1,
  hemisphere2,
  modes,
  moonPhase,
} from "../../components/calculator/icons";

import {
  General_ascendant_report,
  House_cusps_report,
  NatalAspectReport,
  Natal_house_cusp_report,
  PlanetCard2,
  Planet_sign_report,
} from "../../components/calculator/planetCards";
import React, { useEffect, useState } from "react";
import { Loader2 } from "@/components/utils/loader";
import { FetchApi } from "@/components/utils/fetchapi";
import HoroscopeTab, { TabUI } from "@/components/tabui/horoscopeTab";

export default function BirthReport({ userdata, handleForm }) {
  const [detail, setdetail] = useState({
    planets: [
      {
        name: "Sun",
        full_degree: 280.7746,
        norm_degree: 10.7746,
        speed: 1.0195,
        is_retro: "false",
        sign_id: 10,
        sign: "Capricorn",
        house: 2,
      },
      {
        name: "Moon",
        full_degree: 228.0961,
        norm_degree: 18.0961,
        speed: 11.9671,
        is_retro: "false",
        sign_id: 8,
        sign: "Scorpio",
        house: 1,
      },
      {
        name: "Mars",
        full_degree: 328.272,
        norm_degree: 28.272,
        speed: 0.7757,
        is_retro: "false",
        sign_id: 11,
        sign: "Aquarius",
        house: 4,
      },
      {
        name: "Mercury",
        full_degree: 272.509,
        norm_degree: 2.509,
        speed: 1.5584,
        is_retro: "false",
        sign_id: 10,
        sign: "Capricorn",
        house: 2,
      },
      {
        name: "Jupiter",
        full_degree: 25.2696,
        norm_degree: 25.2696,
        speed: 0.0421,
        is_retro: "false",
        sign_id: 1,
        sign: "Aries",
        house: 6,
      },
      {
        name: "Venus",
        full_degree: 242.047,
        norm_degree: 2.047,
        speed: 1.2095,
        is_retro: "false",
        sign_id: 9,
        sign: "Sagittarius",
        house: 1,
      },
      {
        name: "Saturn",
        full_degree: 40.3879,
        norm_degree: 10.3879,
        speed: -0.0192,
        is_retro: "true",
        sign_id: 2,
        sign: "Taurus",
        house: 6,
      },
      {
        name: "Uranus",
        full_degree: 314.8293,
        norm_degree: 14.8293,
        speed: 0.0505,
        is_retro: "false",
        sign_id: 11,
        sign: "Aquarius",
        house: 4,
      },
      {
        name: "Neptune",
        full_degree: 303.2072,
        norm_degree: 3.2072,
        speed: 0.0357,
        is_retro: "false",
        sign_id: 11,
        sign: "Aquarius",
        house: 3,
      },
      {
        name: "Pluto",
        full_degree: 251.4687,
        norm_degree: 11.4687,
        speed: 0.0351,
        is_retro: "false",
        sign_id: 9,
        sign: "Sagittarius",
        house: 1,
      },
      {
        name: "Node",
        full_degree: 123.9314,
        norm_degree: 3.9314,
        speed: -0.0592,
        is_retro: "true",
        sign_id: 5,
        sign: "Leo",
        house: 9,
      },
      {
        name: "Chiron",
        full_degree: 251.6631,
        norm_degree: 11.6631,
        speed: 0.1141,
        is_retro: "false",
        sign_id: 9,
        sign: "Sagittarius",
        house: 1,
      },
      {
        name: "Part of Fortune",
        full_degree: 276.4341,
        norm_degree: 6.4341,
        speed: 0,
        is_retro: "false",
        sign_id: 10,
        sign: "Capricorn",
        house: 2,
      },
    ],
    houses: [
      { house: 1, sign: "Scorpio", degree: 223.75559 },
      { house: 2, sign: "Sagittarius", degree: 252.9594 },
      { house: 3, sign: "Capricorn", degree: 283.06223 },
      { house: 4, sign: "Aquarius", degree: 314.51166 },
      { house: 5, sign: "Pisces", degree: 346.51562 },
      { house: 6, sign: "Aries", degree: 16.76538 },
      { house: 7, sign: "Taurus", degree: 43.75559 },
      { house: 8, sign: "Gemini", degree: 72.9594 },
      { house: 9, sign: "Cancer", degree: 103.06223 },
      { house: 10, sign: "Leo", degree: 134.51166 },
      { house: 11, sign: "Virgo", degree: 166.51562 },
      { house: 12, sign: "Libra", degree: 196.76538 },
    ],
    ascendant: 223.75559085686803,
    midheaven: 134.51165958647857,
    vertex: 125.64121798264976,
    lilith: {
      name: "Lilith",
      full_degree: 263.5086,
      norm_degree: 23.5086,
      speed: 0.1113,
      is_retro: "false",
      sign_id: 9,
      sign: "Sagittarius",
      house: 2,
    },
    aspects: [
      {
        aspecting_planet: "Sun",
        aspected_planet: "Mercury",
        aspecting_planet_id: 0,
        aspected_planet_id: 3,
        type: "Conjunction",
        orb: 8.27,
        diff: 8.27,
      },
      {
        aspecting_planet: "Sun",
        aspected_planet: "Saturn",
        aspecting_planet_id: 0,
        aspected_planet_id: 6,
        type: "Trine",
        orb: 0.39,
        diff: 119.61,
      },
      {
        aspecting_planet: "Sun",
        aspected_planet: "Ascendant",
        aspecting_planet_id: 0,
        aspected_planet_id: 10,
        type: "Sextile",
        orb: 2.98,
        diff: 57.02,
      },
      {
        aspecting_planet: "Moon",
        aspected_planet: "Saturn",
        aspecting_planet_id: 1,
        aspected_planet_id: 6,
        type: "Opposition",
        orb: 7.71,
        diff: 172.29,
      },
      {
        aspecting_planet: "Moon",
        aspected_planet: "Uranus",
        aspecting_planet_id: 1,
        aspected_planet_id: 7,
        type: "Square",
        orb: 3.27,
        diff: 86.73,
      },
      {
        aspecting_planet: "Moon",
        aspected_planet: "Ascendant",
        aspecting_planet_id: 1,
        aspected_planet_id: 10,
        type: "Conjunction",
        orb: 4.34,
        diff: 4.34,
      },
      {
        aspecting_planet: "Moon",
        aspected_planet: "Midheaven",
        aspecting_planet_id: 1,
        aspected_planet_id: 11,
        type: "Square",
        orb: 3.58,
        diff: 93.58,
      },
      {
        aspecting_planet: "Mars",
        aspected_planet: "Mercury",
        aspecting_planet_id: 2,
        aspected_planet_id: 3,
        type: "Sextile",
        orb: 4.24,
        diff: 55.76,
      },
      {
        aspecting_planet: "Mars",
        aspected_planet: "Jupiter",
        aspecting_planet_id: 2,
        aspected_planet_id: 4,
        type: "Sextile",
        orb: 3,
        diff: 57,
      },
      {
        aspecting_planet: "Mars",
        aspected_planet: "Venus",
        aspecting_planet_id: 2,
        aspected_planet_id: 5,
        type: "Square",
        orb: 3.78,
        diff: 86.23,
      },
      {
        aspecting_planet: "Mercury",
        aspected_planet: "Jupiter",
        aspecting_planet_id: 3,
        aspected_planet_id: 4,
        type: "Trine",
        orb: 7.24,
        diff: 112.76,
      },
      {
        aspecting_planet: "Mercury",
        aspected_planet: "Saturn",
        aspecting_planet_id: 3,
        aspected_planet_id: 6,
        type: "Trine",
        orb: 7.88,
        diff: 127.88,
      },
      {
        aspecting_planet: "Jupiter",
        aspected_planet: "Neptune",
        aspecting_planet_id: 4,
        aspected_planet_id: 8,
        type: "Square",
        orb: 7.94,
        diff: 82.06,
      },
      {
        aspecting_planet: "Venus",
        aspected_planet: "Neptune",
        aspecting_planet_id: 5,
        aspected_planet_id: 8,
        type: "Sextile",
        orb: 1.16,
        diff: 61.16,
      },
      {
        aspecting_planet: "Venus",
        aspected_planet: "Pluto",
        aspecting_planet_id: 5,
        aspected_planet_id: 9,
        type: "Conjunction",
        orb: 9.42,
        diff: 9.42,
      },
      {
        aspecting_planet: "Saturn",
        aspected_planet: "Uranus",
        aspecting_planet_id: 6,
        aspected_planet_id: 7,
        type: "Square",
        orb: 4.44,
        diff: 85.56,
      },
      {
        aspecting_planet: "Saturn",
        aspected_planet: "Neptune",
        aspecting_planet_id: 6,
        aspected_planet_id: 8,
        type: "Square",
        orb: 7.18,
        diff: 97.18,
      },
      {
        aspecting_planet: "Saturn",
        aspected_planet: "Ascendant",
        aspecting_planet_id: 6,
        aspected_planet_id: 10,
        type: "Opposition",
        orb: 3.37,
        diff: 176.63,
      },
      {
        aspecting_planet: "Saturn",
        aspected_planet: "Midheaven",
        aspecting_planet_id: 6,
        aspected_planet_id: 11,
        type: "Square",
        orb: 4.12,
        diff: 94.12,
      },
      {
        aspecting_planet: "Uranus",
        aspected_planet: "Pluto",
        aspecting_planet_id: 7,
        aspected_planet_id: 9,
        type: "Sextile",
        orb: 3.36,
        diff: 63.36,
      },
      {
        aspecting_planet: "Uranus",
        aspected_planet: "Ascendant",
        aspecting_planet_id: 7,
        aspected_planet_id: 10,
        type: "Square",
        orb: 1.07,
        diff: 91.07,
      },
      {
        aspecting_planet: "Uranus",
        aspected_planet: "Midheaven",
        aspecting_planet_id: 7,
        aspected_planet_id: 11,
        type: "Opposition",
        orb: 0.32,
        diff: 179.68,
      },
      {
        aspecting_planet: "Pluto",
        aspected_planet: "Midheaven",
        aspecting_planet_id: 9,
        aspected_planet_id: 11,
        type: "Trine",
        orb: 3.04,
        diff: 116.96,
      },
      {
        aspecting_planet: "Ascendant",
        aspected_planet: "Midheaven",
        aspecting_planet_id: 10,
        aspected_planet_id: 11,
        type: "Square",
        orb: 0.76,
        diff: 89.24,
      },
    ],
    ascendant_ruler:
      "You are someone who is very motivated by a need for security and roots. You may invest a lot of energy into building your home. Some might call you a homebody. Even if you don’t have planets in Cancer, you display distinct traits of the sign.",
    moon_phase: {
      moon_phase_name: "Last Quarter Moon",
      moon_phase_id: 7,
      moon_phase_calc: "You were born under a Last Quarter Moon.",
      moon_phase_description:
        "You become a master of getting rid of what is no longer needed. Highly critical and discerning, it's helpful for you to find things to take apart in order to not be needlessly destructive. ",
    },
    hemisphere: {
      east_west: {
        description:
          "Eastern hemisphere is emphasised in your birth chart. You are self motivated, action oriented, and self-assertive. You tend to believe strongly in free will.",
        id: 1,
      },
      north_south: {
        description:
          "Northern hemisphere is emphasised in your birth chart which is the personal and subjective portion of the chart. Therefore, you tend to be private and more subjective.",
        id: 1,
      },
    },
    elements: {
      elements: [
        { name: "Fire", percentage: 25 },
        { name: "Earth", percentage: 33.333 },
        { name: "Air", percentage: 8.333 },
        { name: "Water", percentage: 33.333 },
      ],
      description:
        "You have preponderence of Earth element in your birth chart. It suggests that you are cautious, premeditative, conventional, and dependable. You are the type of person who lives by a practical and common sense code.",
      dominant_element_id: 2,
    },
    modes: {
      modes: [
        { name: "Cardinal", percentage: 33.333 },
        { name: "Fixed", percentage: 58.333 },
        { name: "Mutable", percentage: 8.333 },
      ],
      description:
        "You have preponderence of Fixed mode in your birth chart. You are extremely strong-willed and resistant to external influences. Your great strengths are loyalty, constancy and dependability.",
      dominant_mode_id: 2,
    },
    polarity: {
      positive: 46.153,
      negative: 61.538,
      report:
        "The negative polarity is more introverted and low-key, focused on interior experience. You tend to be a more introverted type; the inner world of physical sensation and emotional experience is more natural to you than the buzz and noise of the outside world.",
    },
    dominant_sign: { sign_id: 10, sign_name: "Capricorn", percentage: 22.22 },
  });

  const [active, setActive] = useState("Key Points");

  const [svg, setsvg] = useState(
    "https://s3.ap-south-1.amazonaws.com/western-chart/9b339b60-dfa2-11ed-9657-2de5fbfae10e.svg"
  );

  useEffect(() => {
    if (userdata) {
      //API();
    }
  }, [userdata]);

  const API = async () => {
    const ApiCall = await FetchApi({
      apiName: "natal_wheel_chart",
      userData: {
        ...userdata,
        theme_name: "WHEEL_CHART_THEME_UPASTROLOGY",
      },
    });
    const ApiDetail = await FetchApi({
      apiName: "natal_chart_interpretation",
      userData: userdata,
    });
    if (ApiCall.status) {
      setdetail(ApiDetail);
      setsvg(ApiCall.chart_url);
    }
  };

  const handleActive = (val) => {
    setActive(val);
  };

  return (
    <>
      <div className="min-h-screen w-full">
        <div>
          <div className="max-w-4xl mx-auto pb-10 pt-5 md:pb-14">
            <h1 className="md:text-5xl text-4xl text-center font-bold dark:text-white">
              Natal Chart Report
            </h1>
          </div>

          {/* profile data */}
          <div className="py-0 dark:border-zinc-500 border-zinc-500 rounded max-w-4xl mx-auto w-full border">
            <ProfileDetailCard2
              handleForm={handleForm}
              userDetail={userdata}
              link="/"
            />
          </div>

          {svg !== null ? (
            <div className="max-w-md mt-14 mx-auto w-full px-5">
              <img
                className="w-full bg-white rounded-full"
                src={svg}
                alt="Natal chart"
              />
            </div>
          ) : (
            <Loader2 />
          )}
        </div>

        <div className="max-w-4xl mx-auto mt-14">
          <TabUI active={active} handleTime={handleActive} tabs={tabs} />

          {Object.keys(detail).length !== 0 ? (
            <>
              <div className="pt-10  md:pt-14">
                {active === "Key Points" && (
                  <div className=" mx-auto  flex flex-col gap-16">
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 max-w-5xl w-full mx-auto">
                      <FetureCard
                        bg="bg-[#FDE68A]"
                        title={detail["moon_phase"].moon_phase_calc}
                        img={`/natal/${
                          moonPhase[detail["moon_phase"].moon_phase_id]
                        }.png`}
                        desc={detail["moon_phase"].moon_phase_description}
                      />
                      <FetureCard
                        bg="bg-[#fab1a0]"
                        img={`/natal/${
                          elements[detail["elements"].dominant_element_id]
                        }.png`}
                        desc={detail["elements"].description}
                      />
                      <FetureCard
                        bg="bg-[#55efc4]"
                        img={`/natal/${
                          modes[detail["modes"].dominant_mode_id]
                        }.png`}
                        desc={detail["modes"].description}
                      />
                      <FetureCard
                        bg="bg-sky-300"
                        img={`/natal/${
                          hemisphere1[detail["hemisphere"].east_west.id]
                        }.png`}
                        desc={detail["hemisphere"].east_west.description}
                      />
                      <FetureCard
                        bg="bg-[#a29bfe]"
                        img={`/natal/${
                          hemisphere2[detail["hemisphere"].north_south.id]
                        }.png`}
                        desc={detail["hemisphere"].north_south.description}
                      />
                    </div>
                  </div>
                )}
                <>
                  {active === "Planets" && (
                    <PlanetCard2 response={detail.planets} />
                  )}
                </>
                {active === "Houses" && <PlanetHouse detail={detail.houses} />}
                {active === "Aspects" && (
                  <div className="md:pb-20 pb-14">
                    <AspectCard
                      title="Natal Aspect"
                      desc=" The planets represent energies and cosmic forces that can manifest in
          different ways. They are like the actors in a play. The signs describe
          the ways in which these planetary energies are used. They show the
          motivation and the roles the different actors play. As with everything
          in the material world, these energies can and usually do operate in
          two directions, the positive and negative."
                      response={detail.aspects}
                    />
                  </div>
                )}
                {active == "Rising Sign" && <General_ascendant_report />}
                {active == "House Cusps Report" && <House_cusps_report />}
                {active == "Aspects Report" && <NatalAspectReport />}
                {active == "House Cusp Report" && <Natal_house_cusp_report />}
                {active == "Planet Sign" && <Planet_sign_report />}
              </div>
            </>
          ) : (
            <Loader2 />
          )}
        </div>
      </div>
    </>
  );
}

const tabs = [
  "Key Points",
  "Planets",
  "Houses",
  "Aspects",
  "Rising Sign",
  "Planet Sign",
  "House Cusps Report",
  "Aspects Report",
  // "Natal House Cusp Report",
];

const url = {
  "Planet Sign": "planet_sign_report/tropical",
  "Rising Sign": "general_ascendant_report/tropical",
  "House Cusps Report": "house_cusps_report/tropical",
  "Aspects Report": "natal_aspects_report",
  "House Cusp Report": "natal_house_cusp_report",
};
