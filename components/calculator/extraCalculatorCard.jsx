import { Loader2 } from "../utils/loader";
import { SignColor } from "./color";
import { PlanetColor, colorPlanet, typeTextColor, typebgColor } from "./color";
import { divideParagrahIntoSubPara } from "./planetCards";

const { Sign } = require("../utils/gtmSign");

export function SolarReturnAspectReport({ data1 }) {
  return (
    <>
      {Object.keys(data1).length === 0 ? (
        <Loader2 />
      ) : (
        <div className="flex flex-col gap-5">
          {data1?.map((item, i) => (
            <div
              className={`${
                typebgColor[item.type.toLocaleLowerCase()]
              } gap-5 md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
            >
              <span
                style={{ lineHeight: 1.2 }}
                className="bg-white flex-wrap shadow-lg px-3 py-2 md:py-1 gap-y-1 rounded-[15px] gap-x-2 font-semibold flex items-center"
              >
                <Sign
                  name={item.solar_return_planet}
                  size="text-[25px]"
                  color={PlanetColor[item.solar_return_planet.toLowerCase()]}
                />
                SR {item.solar_return_planet}
                <Sign
                  name={item.type}
                  size="text-[25px]"
                  color={typeTextColor[item.type.toLowerCase()]}
                />
                {item.type}
                <Sign
                  name={item.natal_planet}
                  size="text-[25px]"
                  color={PlanetColor[item.solar_return_planet.toLowerCase()]}
                />
                N {item.natal_planet}
                <span className="text-xs py-[1px] text-sky-400 border border-current rounded-full px-2">
                  Orb {item.orb}
                </span>
              </span>
              {divideParagrahIntoSubPara(item.forecast, 60).map((item, i) => (
                <p key={i} className="text-zinc-700 sm:text-base text-sm">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export function SolarReturnPlanetReport({ data }) {
  const data1 = [
    {
      name: "Mars",
      isRetro: "false",
      sign: "Cancer",
      forecast: [
        "It is more about how you express yourself than the specifics of what you are saying that helps sway others to your position. ",
        "",
        "The void within you can only be filled with a deep emotional connection, But that will occur when you are in touch with your own instincts. Even sexually, you'll really only be aroused by someone with whom you feel an especially close connection. You'll have an abundance of sensitive and caring energy building up inside of you, but if you don't know what to do with it, you may be frightened by it and try to deflect attention onto others. The result could be a passive-aggressive attack on someone, and you'll intuitively know just how to hurt them. Avoid allowing the ego to attempt to dominate others. ",
        "The work will make you feel both relaxed and revived at the same time. You are likely to socialize more.  You will be more inclined to work in a comfortable environment. Consider working from home whenever possible, as you'll feel safe there, and therefore, more likely to work more successfully on your projects. Success may come through your good managerial qualities or some form of artistic talent. ",
      ],
    },
    {
      name: "Mercury",
      isRetro: "true",
      sign: "Taurus",
      forecast: [
        "You may tend to devote a lot of time and thought before taking any decision this year, and once you make up your mind you will stick to it. Your focus will be on improving execution of your ideas and decisions thereafter. Your approach will be more methodical. ",
        "You may get involved in a rigorous fitness program and will have the ability to stick to it, your discipline will help you to be consistent. ",
        "You don't like being forced into a quick decision, you will avoid confrontations as you want peace and harmony in all dealings. You may be more protective about your close relations. You will prefer taking your own time before forming any conclusions or before changing  your mind. This may give an impression that you are too stubborn to be convinced. Others may find it hard to deal with this stubbornness of your's this may cause resentment from the ones you love. ",
        "You may take your own sweet time to take any financial decisions, and will be more careful before making any investment. You may be more focused in establishing yourself in your career so that you will have a definite income, you will experience high level of concentration, that may lead you to success. ",
      ],
    },
    {
      name: "Jupiter",
      isRetro: "false",
      sign: "Aries",
      forecast: [
        "Your confidence levels will be high, you will have a forceful first impact on everyone you meet. you'll be on a direct path to knowing exactly what and when things need to get done, as well as knowing how to do them. You will attract many good things in life this year. Your enthusiasm and courage will guide you to extreme success in all walks of life. Your honesty makes you the most trustworthy person, people around you will confide in you. Your struggle for self improvement will carry on and you will be the best version of yourself. ",
        "Your high energy levels make it possible for you to remain fit. . You are likely to play a sport and even participate in competitions. You may be eager to start with new physical training. Your dedication will transform your body the way you always wanted it to be. ",
        "Since you are so confident about yourself there are chances you may come across as arrogant person to some. Be careful while dealing with your close people. People will be attracted towards you and you will be getting all the attention. Your loved ones will help you focus on your goal. ",
        "This is a great year for students and practitioners of philosophy, spirituality and education. You may be able to make new innovations. Your faith in your abilities gives you strength to jump towards your goal. You will see everything as a open door of opportunity. This is a year of good fortune and success. You will be more dynamic and vigorous in your approach. You will have an incredibly fresh and innovative way of viewing the world, which will help motivate you to kick off new projects this year. ",
      ],
    },
    {
      name: "Venus",
      isRetro: "false",
      sign: "Cancer",
      forecast: [
        "Since you have a good memory it may be difficult for you to forget the past, and overcome the emotional hurt. Your fear of rejection makes you test your partner's loyalty now and then. This can be a bit frustrating for your companion. You tend to be more patient, loving and dependable once you get sure of your partner's intentions. ",
        "You are dedicated and this quality will help you to follow your strict exercise routine, you may be even more considered about your appearance and will take efforts to work out on your flaws. You tend to be more diet conscious than ever. ",
        "You are one of the most sensitive and romantic soul, this year you are more in touch with your deep emotional side. You crave for security, comfort and love in any relationship. Your ability to understand the feelings of your partner, may help you to resolve all the conflicts in your relationship. You are closely attached to your family and home. Since you have a big heart, you attract many people around you. Your intuitive power helps you to read character of people and you care for them accordingly. You may take some time to trust people, but if u trust someone you tend to be very affectionate towards that person.  You are attracted to those who need you.  Imagining the romantic world you'd like to live in will be the first step toward turning it into a reality. This will be a very sensual time for you, so live it up and let the emotions just run over you like water. ",
        "Your creative abilities may help you succeed in field of arts and music. you can be quite frugal with your money. You will spend most on your family and close friends. You may be interested in building your own home. You are attracted to art and tradition and will readily spend on decorating your home. You tend to be cautious before taking any decision. And will think twice before getting into any new business partnership. You may even consider counseling as a profession. Your empathetic nature will cut to the core of any issues others may be having, and you'll be able to help them come to a resolution over problems that may arise. ",
      ],
    },
    {
      name: "Saturn",
      isRetro: "false",
      sign: "Pisces",
      forecast: [
        "Your faith will lead you to happy and successful life, don't doubt your instincts. You tend to feel vulnerable and defenceless. You may feel like a victim, believe in your intuitions.  Irrational thoughts will rule your world, and you'll feel like you don't have enough control over the chaotic circumstances that take hold of your life. Sometimes you need to take a leap of faith and trust that things will work themselves out in the end. ",
        "Yoga and meditation will help you calm down and stabilize your mind. Have proper diet and good amount of sleep. ",
        "You may be tempted to get involved in romantic relationship, with unsuitable and unworthy partners. Don't get carried away. Try to be more patient. Don't underestimate yourself and don't doubt your abilities. You may get emotional support from your family and friends. At that point you will begin to build up faith again, and you'll be more likely to be able to develop a compassionate and unconditional love, as well as a more matured trust in the intangibles of life, such as the mystical and spiritual aspects. ",
        "If you channelize your imagination and creative energy in right direction you will achieve tremendous success. ",
      ],
    },
    {
      name: "Uranus",
      isRetro: "false",
      sign: "Taurus",
      forecast: [
        "You are not in favor of change. Your mental powers will be strong and stabling this year, so don't forget to use them on your own psyche as well. ",
        "Follow healthy and nutritious diet. You may start with meditation to increase your concentration and focus. ",
        "Your relationship with your spouse will be fulfilling and happy. Your charming personality may attract many people this may cause your partner to get jealous. You like the emotional security and stability which you get from your partner. ",
        "You are practical and constructive. You may need an initial push to start, but once you get started nothing really can stop you. You may come up with innovative business ideas. You may get success in real estate. You tend to prefer partners and organizations that promote innovation and imagination. ",
      ],
    },
    {
      name: "Neptune",
      isRetro: "false",
      sign: "Pisces",
      forecast: [
        "Let your dream world and your imagination guide you along the path to enlightenment. Just be sure you don't fall astray into the world of escapism. Though you might enjoy yourself there, you will not fully complete yourself until you leave the physical realm behind your entirely. ",
        "Don’t ignore your health. Be consistent in whatever you do. Follow a healthy lifestyle. ",
        "You are an exceptionally compassionate and caring soul. You tend to be selfless and want to serve  others. In a relationship you tend to be forgiving and self sacrificing, these qualities make you attractive. People may also take advantage of your soft heart and take you for granted. Be careful before making any new connections. ",
        "The most real feelings of brotherhood and sisterhood will come to you this year when you are able to develop a genuine empathy for all creatures on earth. You will feel something of a craving to get out and help those in need as much as possible, and that's one craving you should certainly give in to. Volunteer at homeless shelters, children's organizations, hospitals, etc. -- anything that will leave you satisfied with the work you've done. You may become a successful philanthropist. You like to express yourself with art and drama. Good year for artists, writers , poets and actors. ",
      ],
    },
  ];
  return (
    <>
      {Object.keys(data1).length === 0 ? (
        <Loader2 />
      ) : (
        <div className="flex flex-col gap-5">
          {data1?.map((item, i) => (
            <div
              className={`${colorPlanet[i]} gap-5 md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
            >
              <span className="bg-white shadow-lg px-3 py-1 rounded-[15px] gap-2 font-semibold flex items-center">
                <Sign
                  name={item.name}
                  size="text-[25px]"
                  color={PlanetColor[item.name.toLowerCase()]}
                />
                {item.name} in
                <Sign
                  name={item.sign}
                  size="text-[25px]"
                  color={SignColor[item.sign.toLowerCase()]}
                />
                {item.sign}
                {item.isRetro && (
                  <span className="text-sm text-zinc-500">(R)</span>
                )}
              </span>
              <div className="flex flex-col gap-3">
                {item.forecast.map((item, i) => (
                  <p key={i} className="text-zinc-700 sm:text-base text-sm">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
