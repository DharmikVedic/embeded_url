import { FetchApi } from "@/components/utils/fetchapi";
import { Sign, getDMS } from "@/components/utils/gtmSign";
import { Loader2 } from "@/components/utils/loader";
import React, { useEffect, useState } from "react";
import { ProfileCard22 } from "../utils";

export function Romantic_personality_report_response({ userdata, handleForm }) {
  const [response, setResponse] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (userdata) {
      API();
    }
  }, [userdata]);

  const API = async () => {
    const ApiCall = await FetchApi({
      apiName: "romantic_personality_report/tropical",
      userData: userdata,
    });
    setResponse(ApiCall);
    setLoader(false);
  };

  return (
    <>
      {loader ? (
        <Loader2 />
      ) : (
        <div className="w-full flex flex-col md:gap-10 gap-5">
          <h2 className="text-center md:text-5xl text-4xl font-semibold dark:text-white text-zinc-800">
            Romantic Personality Report
          </h2>
          <div className="mt-5 dark:border-zinc-500 border-zinc-500 mx-auto w-full border-b">
            <ProfileCard22
              handleForm={handleForm}
              userDetail={userdata}
              link="/"
            />
          </div>
          <div className="flex flex-col gap-5">
            {response?.report?.map((item, i) => (
              <p
                key={i}
                className="md:text-lg dark:text-zinc-300 text-zinc-700 text-base"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export function Karma_destiny_response({ data1 }) {
  const data = {
    karma_destiny_report: [
      "But trying to impose your own sense of logic onto someone else is not only futile, it's shortsighted. Just because you can't understand their sense of logic doesn't mean they don't have one; it's simply so different from yours that you'll have a hard time getting it. Your partner is actually quite a creative person, as you'll find if you can greet their ideas with respect rather than anxiety. Rather than trying to control the ways in which they perceive the world and interact with it, you should try to learn something from this unique perspective of theirs. If you do try to exert logic and control over them, you'll just find that they slip through your grasp anyway; but if you simply do the work of being yourself and allow them to be the person that they are as well, you'll find that you're both able to blend your styles and learn from each other. The best that can come from this connection will be an increased sense of creativity on your side, and a greater understanding of practical matters on your partner's.",
      "You tried to rely on this person in another lifetime, and they let you down in a big way. Whether they were your lover, your parent or your fellow warrior, when you needed them most, they weren't there for you, and that experience left a scar on your soul. In this life, your subconscious mind remembers that experience, and it will do anything to prevent the same thing from happening again.",
      "Especially if you've conducted your life in a somewhat haphazard way, this relationship could help you to focus on your path and become more settled within yourself. Your contribution to the relationship will be one of energy and spirit, which will help your partner stay lighthearted instead of getting bogged down in the minutiae of everyday life. Good communication between you will help you both to keep moving forward and stay on track in your lives, moving steadily toward your goals. This aspect will also help in terms of building an enduring relationship that is lastingly beneficial for both of you. With a bond like this one, in fact, you could just as easily go into business together as keep this a purely romantic relationship, because it helps you work harder and more efficiently, as a team, and stay focused on the task at hand.",
      "While your bond with this person will be strengthened by a powerful and enduring past-life connection that you share, it won't make for a fun, romantic affair. There's a good chance that if you become romantically involved, it will last long-term; after all, you're coming from a relationship in another lifetime that persevered through hard times as well as good ones, and has extended to the present life. A sense of mutual responsibility will pervade your connection now, as a result of this past-life relationship, and you'll both sense this from the start.",
    ],
  };
  return (
    <>
      <div className="max-w-2xl mx-auto flex flex-col md:gap-10 gap-5">
        <h2 className="text-center md:text-5xl text-4xl font-semibold dark:text-white text-zinc-800">
          Karma Destiny Report
        </h2>
        <div className="flex flex-col gap-5">
          {data?.karma_destiny_report?.map((item, i) => (
            <p
              key={i}
              className="md:text-lg dark:text-zinc-300 text-zinc-700 text-base"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export function Friendship_report_response({ data1 }) {
  const data = {
    friendship_report: [
      "At first this can manifest as criticism of their efforts. You feel that you're being helpful and offering practical advice, but to your buddy it feels as if you don't like their work at all, nor do you have faith that they will be successful in these endeavors. You'll send out disapproving signals which your buddy will pick up immediately. So stop trying to push the relationship in a direction it may or may not naturally take; lighten up, and concentrate on nothing more than enjoying your friend's company.",

      "You naturally take a practical view of life; you trust in the things that you can see, touch, feel and otherwise count on in a tangible way. You believe in hard work and responsibility, and anything more abstract than that seems out-and-out silly to you. But there's a whole other side of things  the intangible, the instinctive, even the psychic  and your pal will have a good grasp on these concepts.",

      "It's up to you which of those possibilities comes true.",

      "There is a very real and deep sense of support and understanding that will exist between you almost from the start. You'll instinctively respond to your friend in a positive way, and they'll feel as if they're completely accepted and well-liked by you. There will be an open flow of communication that runs between you  and it won't necessarily always be verbal.",

      "Your highly energetic interactions will be fast-paced and fun, and you'll both have a great time ribbing and challenging each other. Just try to be sensitive when you're pushing too hard, or giving advice that simply doesn't apply to the person your friend is or the ambitions they hold.",

      "You'll bring out each other's best qualities and support each other in being your kindest, most generous selves. You'll be able to talk openly with each other about anything that comes up in your lives and you'll understand each other well. Through this openness you share, you'll grow to understand yourselves better, which will aid in your careers, your personal relationships and all other areas of your lives.",

      "The two of you will be able to join forces and accomplish almost anything you'll put your minds to. Together you'll blast away whatever stands in your way and come through unscathed on the other side. This strength and determination could be put to good use in a variety of ways. You'll meet problems creatively and head-on, which will be a great influence for your friendship  but it could also be turned outward, for the good of the rest of the world. Any humanitarian urges that you two might share will find action through this aspect's influence. Your deepest spiritual beliefs could also find expression in this friendship. Basically, what you choose to do is up to the two of you. You'll work as a creative team, and together you could move mountains!",

      "There will be a serious mismatch in your energies that will sometimes create friction between you, but at other times things could be really exciting. Your friend will sometimes irritate you and sometimes attract you. In fact, you're likely to find them to be pretty offensive, but as much as you may not like it, they'll also turn you on.",
    ],
  };
  return (
    <>
      <div className="w-full flex flex-col md:gap-10 gap-5">
        <h2 className="text-center md:text-5xl text-4xl font-semibold dark:text-white text-zinc-800">
          Friendship Report
        </h2>
        <div className="flex flex-col gap-5">
          {data?.friendship_report?.map((item, i) => (
            <p
              key={i}
              className="md:text-lg dark:text-zinc-300 text-zinc-700 text-base"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export function Personality_report_response({ data1, userdata, handleForm }) {
  const [response, setResponse] = useState({});
  const [planets, setPlanets] = useState({});
  const [loader, setLoader] = useState(true);
  const data = {
    report: [
      "You may have had trouble communicating in early life. Perhaps you suffer from feelings of inadequacy. You overcome these feelings through sheer necessity, for you have determination in achieving your goals and purposes in life. ",

      "You will have strong likes and dislikes, and can be very reserved and dignified, though when vexed you are apt to be sharp and sarcastic if not actually cruel. Avoid pride, cultivate sympathy and endeavour to see things from others’ standpoints as well as your own. ",

      "The position of the Moon in your horoscope will much increase the emotional nature, making you extremely sensitive. You like to be appreciated, and feel things that are said of you very keenly. You need to associate only with pure-minded and cheerful persons, or you may find yourself liable to moods often undesirable ones. ",

      "In your heart of hearts you want a close intimate relationship with an equal. You make friends easily and give unwaveringly to them. You are capable of extreme self-sacrifice for those they love. Your greatest strengths is the ability to recover and recoup from loss. ",

      "You constantly work for accuracy, efficiency, and precision, and you become very irritable when things are not done 'right'. You are good at conserving your energy and pacing yourself so that you do not waste or diffuse your efforts. You can be a worry-wart and a fussbudget who gets lost in too many details. ",

      "Subjects like philosophy, religion, politics, or education interest you, and you are more concerned with theories, abstractions and concepts than with specific applications. You aim for breadth rather than depth, and often join together subjects and information that at first blush don't seem to belong together. You can become known for your innovative thinking and original theories. ",

      "You promote peace, not war. You believe in diplomacy over force. There may be more concern to demonstrate to the world that the marriage has been successful rather than happy. ",

      "You are probably not that demonstrative towards the ones you love. If you're artistic, you have a special ability to manifest the results of your creativity. When it comes to money, there is no sense in displaying a poverty consciousness. ",

      "You also expect nothing less than perfection, and that's a tall order for people around you. Detailed work does not bother you and you are able to focus and concentrate on the various minutiae of any project. You may be prone to periods of depression or be prone to hypochondriac tendencies. ",
    ],

    spiritual_lesson: "Spiritual lesson to learn: Sociability (lighten up)",

    key_quality: "We think",
  };
  const sign = [
    {
      name: "Sun",
      fullDegree: 41.96124908297322,
      normDegree: 11.961249082973218,
      speed: 0.9704792114991141,
      isRetro: "false",
      sign: "Taurus",
      house: 12,
    },
    {
      name: "Moon",
      fullDegree: 14.024999641065405,
      normDegree: 14.024999641065405,
      speed: 13.835769441873275,
      isRetro: "false",
      sign: "Aries",
      house: 11,
    },
    {
      name: "Mars",
      fullDegree: 58.77941413112473,
      normDegree: 28.77941413112473,
      speed: 0.7036007692048973,
      isRetro: "false",
      sign: "Taurus",
      house: 12,
    },
    {
      name: "Mercury",
      fullDegree: 33.837154942456316,
      normDegree: 3.8371549424563156,
      speed: 2.0381048852707897,
      isRetro: "false",
      sign: "Taurus",
      house: 12,
    },
    {
      name: "Jupiter",
      fullDegree: 46.42344455427866,
      normDegree: 16.42344455427866,
      speed: 0.23793074930098843,
      isRetro: "false",
      sign: "Taurus",
      house: 12,
    },
    {
      name: "Venus",
      fullDegree: 31.170559067446238,
      normDegree: 1.1705590674462378,
      speed: 1.2311580003706535,
      isRetro: "false",
      sign: "Taurus",
      house: 12,
    },
    {
      name: "Saturn",
      fullDegree: 49.3132983564821,
      normDegree: 19.3132983564821,
      speed: 0.1281349873062583,
      isRetro: "false",
      sign: "Taurus",
      house: 12,
    },
    {
      name: "Uranus",
      fullDegree: 320.60318217133516,
      normDegree: 20.603182171335163,
      speed: 0.01890924726916141,
      isRetro: "false",
      sign: "Aquarius",
      house: 10,
    },
    {
      name: "Neptune",
      fullDegree: 306.561892953931,
      normDegree: 6.561892953931022,
      speed: 0.0034949662974737266,
      isRetro: "false",
      sign: "Aquarius",
      house: 9,
    },
    {
      name: "Pluto",
      fullDegree: 252.3220859616631,
      normDegree: 12.322085961663106,
      speed: -0.02229865129236588,
      isRetro: "true",
      sign: "Sagittarius",
      house: 7,
    },
    {
      name: "Ascendant",
      fullDegree: 65.59868849480307,
      normDegree: 5.598688494803071,
      speed: 0,
      isRetro: false,
      sign: "Gemini",
      house: 1,
    },
  ];

  useEffect(() => {
    if (userdata) {
      API();
    }
  }, [userdata]);

  const API = async () => {
    const ApiCall = await FetchApi({
      apiName: "personality_report/tropical",
      userData: userdata,
    });
    const ApiDetail = await FetchApi({
      apiName: "planets/tropical",
      userData: userdata,
    });
    setResponse(ApiCall);
    setPlanets(ApiDetail);
    setLoader(false);
  };

  return (
    <>
      {loader ? (
        <Loader2 />
      ) : (
        <div className="w-full flex flex-col md:gap-10 gap-5">
          <h2 className="text-center md:text-5xl text-4xl font-semibold dark:text-white text-zinc-800">
            Personality Report
          </h2>
          <div className="mt-5 dark:border-zinc-500 border-zinc-500 mx-auto w-full border-b">
            <ProfileCard22
              handleForm={handleForm}
              userDetail={userdata}
              link="/"
            />
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 ">
              <SignCalculator
                data={planets[0]}
                bg="bg-gradient-to-tl from-yellow-300 to-amber-200"
              />
              <SignCalculator
                bg="bg-gradient-to-tl from-blue-300 to-violet-200"
                data={planets[1]}
              />
              <SignCalculator
                bg="bg-gradient-to-tl from-rose-300 to-pink-200 md:col-span-1 col-span-2"
                data={planets[10]}
              />
            </div>

            <div className="px-5 mt-5 shadow shadow-zinc-100/20 py-3 rounded-md dark:bg-c_light_dark dark:border-transparent border-2 border-lime-500">
              <p className="dark:text-c_yellow md:text-lg font-medium">
                {response?.spiritual_lesson}
              </p>
            </div>
            {response?.report?.map((item, i) => (
              <p
                key={i}
                className="md:text-lg dark:text-zinc-300 text-zinc-700 text-base"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function SignCalculator({ data, bg, color }) {
  return (
    <>
      <div className={`${bg} p-5 rounded-md w-full`}>
        <h6 className="font-medium">
          {data.name} in {data.sign}
        </h6>
        <div className="flex  items-center gap-5">
          <Sign color={color} name={data.name} size="text-[30px]" />
          <span className={color}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </span>
          <Sign color={color} name={data.sign} size="text-[30px]" />
        </div>
        <p className="text-right">{getDMS(data.normDegree)}</p>
      </div>
    </>
  );
}
