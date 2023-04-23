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
import React, { useCallback, useEffect, useState } from "react";
import { Loader2 } from "@/components/utils/loader";
import { FetchApi } from "@/components/utils/fetchapi";
import { TabUI } from "@/components/tabui/horoscopeTab";

export default function BirthReport({ userdata, handleForm }) {
  const [detail, setdetail] = useState({});
  const [tabResponse, setTabResponse] = useState({
    "Rising Sign": {},
    "Planet Sign": {},
    "House Cusps Report": {},
    "Aspects Report": {},
  });
  const [active, setActive] = useState("Key Points");
  const [loader, setLoader] = useState(false);
  const [svg, setsvg] = useState();

  useEffect(() => {
    if (userdata) {
      API();
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
    if (url[val]) {
      tabCallback(url[val], val);
    }
    setActive(val);
  };

  const tabCallback = useCallback(async (tab, key) => {
    setLoader(true);
    const ApiCall = await FetchApi({
      apiName: tab,
      userData: userdata,
    });
    setTabResponse((prev) => ({ ...prev, [key]: ApiCall }));
    setLoader(false);
  }, []);

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
                    <PlanetCard2
                      title="Natal Planets"
                      desc="The planets represent energies and cosmic forces that can manifest in
          different ways. They are like the actors in a play. The signs describe
          the ways in which these planetary energies are used. They show the
          motivation and the roles the different actors play. As with everything
          in the material world, these energies can and usually do operate in
          two directions, the positive and negative."
                      response={detail.planets}
                    />
                  )}
                </>
                {active === "Houses" && (
                  <PlanetHouse
                    title="Natal Houses"
                    desc=" The planets represent energies and cosmic forces that can be utilized
          in various ways. They are like the actors in a play. Houses represent
          the different spheres of life where these energies can be and are
          brought to bear, for better or for worse. If the planets are the
          actors in a play, then the houses represent the various settings in
          which the actors play out their roles (signs)."
                    detail={detail.houses}
                  />
                )}
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
                {active == "Rising Sign" && (
                  <General_ascendant_report data={tabResponse[active]} />
                )}
                {active == "House Cusps Report" && (
                  <House_cusps_report data={tabResponse[active]} />
                )}
                {active == "Aspects Report" && (
                  <NatalAspectReport data={tabResponse[active]} />
                )}
                {active == "House Cusp Report" && (
                  <Natal_house_cusp_report data={tabResponse[active]} />
                )}
                {active == "Planet Sign" && (
                  <Planet_sign_report data={tabResponse[active]} />
                )}
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
