import React from "react";
import {
  PlanetColor,
  SignBgColor,
  SignColor,
  colorPlanet,
  typeTextColor,
  typebgColor,
} from "./color";
import { Sign, getDMS } from "../utils/gtmSign";
import { Time, ampmconvertor, convert24hoursto12hours } from "../utils/date";

export function TransitProfileCard({ userDetail, handleForm }) {
  return (
    <div className="flex flex-col w-full md:max-w-xs gap-4">
      <h5 className="md:text-lg text-white uppercase border-b border-zinc-400 dark:border-zinc-500 pb-2  ">
        Your birth details
      </h5>
      <div className=" w-full relative  md:max-w-sm flex flex-col gap-4">
        {userDetail !== null && (
          <>
            <p className="font-cera_medium  text-zinc-700 dark:text-zinc-300">
              {userDetail?.name}
            </p>
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <svg
                  className="w-5 h-5 mt-[6px]  fill-current"
                  version="1.0"
                  viewBox="0 0 64 64"
                >
                  <g transform="translate(0 64) scale(.1 -.1)">
                    <path d="m100 615c0-20-5-25-25-25-14 0-37-11-50-25l-25-24v-246-246l25-24 24-25h271 271l24 25 25 24v246 246l-25 24c-13 14-36 25-50 25-20 0-25 5-25 25 0 21-5 25-30 25s-30-4-30-25v-25h-160-160v25c0 21-5 25-30 25s-30-4-30-25zm0-100c0-21 5-25 30-25s30 4 30 25v25h160 160v-25c0-21 5-25 30-25 26 0 30 4 30 26 0 21 4 25 22 22 19-2 24-10 26-40l3-38h-270-271v33c0 38 6 47 32 47 13 0 18-7 18-25zm488-287-3-173h-265-265l-3 173-2 172h270 270l-2-172z" />
                    <path d="m92 328c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m192 328c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m292 328c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m392 328c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m492 328c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m92 228c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m192 228c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m292 228c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m392 228c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m492 228c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m92 128c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m192 128c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m292 128c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m392 128c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                  </g>
                </svg>
                {date(userDetail?.month, userDetail?.day)}, {userDetail?.year}{" "}
                at{" "}
                {Time(
                  convert24hoursto12hours(userDetail?.hour),
                  userDetail?.min
                )}{" "}
                {ampmconvertor(userDetail?.hour)}
                {/*March 03, 2000 at 07:45 AM*/}
              </p>
              <p className=" flex gap-3  items-start text-zinc-700 dark:text-zinc-300">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 64.000000 64.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                  >
                    <path
                      d="M223 622 c-109 -39 -178 -112 -210 -221 -29 -102 4 -228 82 -306 122
-121 328 -121 450 0 91 92 118 241 64 356 -69 146 -241 223 -386 171z m77 -86
l0 -64 -42 5 c-24 3 -45 7 -47 9 -7 6 31 103 42 108 40 16 47 8 47 -58z m84
58 c13 -5 53 -101 45 -108 -2 -2 -23 -6 -46 -9 l-43 -5 0 64 c0 66 5 73 44 58z
m-200 -62 c-7 -32 -25 -40 -52 -23 -10 6 -6 15 19 35 17 15 33 25 35 23 2 -2
1 -18 -2 -35z m320 -1 c18 -20 18 -20 -8 -27 -32 -8 -32 -8 -41 34 -6 31 -5
33 12 24 10 -6 27 -19 37 -31z m-369 -63 c20 -9 25 -18 25 -47 0 -74 -6 -81
-67 -81 l-55 0 7 36 c9 49 36 104 51 104 7 0 25 -5 39 -12z m438 -22 c8 -19
19 -50 22 -70 l7 -36 -55 0 c-61 0 -67 7 -67 81 0 27 5 38 23 47 37 18 53 13
70 -22z m-307 -6 l34 0 0 -50 0 -50 -55 0 c-61 0 -61 0 -48 73 4 28 10 37 20
33 8 -4 30 -6 49 -6z m178 -27 c12 -73 12 -73 -49 -73 l-55 0 0 49 0 50 43 4
c23 2 45 4 48 5 4 1 9 -15 13 -35z m-290 -135 c3 -13 6 -39 6 -59 0 -29 -5
-38 -25 -47 -14 -7 -32 -12 -39 -12 -15 0 -42 55 -51 104 l-7 36 55 0 c48 0
55 -3 61 -22z m146 -27 l0 -49 -47 -4 c-27 -3 -49 -4 -50 -4 -1 1 -5 25 -9 54
l-7 52 57 0 56 0 0 -49z m146 -3 c-4 -29 -8 -53 -9 -54 -1 0 -23 1 -49 4 l-48
4 0 49 0 49 56 0 57 0 -7 -52z m149 16 c-9 -49 -36 -104 -51 -104 -7 0 -25 5
-39 12 -20 9 -25 18 -25 47 0 74 6 81 67 81 l55 0 -7 -36z m-295 -159 c0 -55
-3 -65 -17 -65 -29 0 -42 13 -58 59 -20 59 -20 59 23 64 20 2 40 4 45 5 4 1 7
-27 7 -63z m129 49 c8 -7 -32 -103 -45 -108 -39 -15 -44 -8 -44 58 l0 64 43
-5 c23 -3 44 -7 46 -9z m-245 -46 c3 -17 4 -33 2 -35 -2 -2 -18 8 -35 23 -25
20 -29 29 -19 35 27 17 45 9 52 -23z m324 23 c10 -6 6 -15 -19 -35 -17 -15
-33 -25 -35 -23 -2 2 -1 18 2 35 7 32 25 40 52 23z"
                    />
                  </g>
                </svg>

                {userDetail?.place}
              </p>
              <button
                onClick={() => handleForm("transit")}
                className="hover:bg-zinc-800 absolute top-0 right-0 hover:text-white  text-zinc-200  p-1 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function PlanetCards({ response }) {
  return (
    <div className="max-w-sm w-full">
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="bg-purple-500 font-semibold md:text-xl text-lg text-white py-3 px-5">
              Natal Planet
            </th>
          </tr>
        </thead>
        <tbody>
          {response.planets.map((item, i) => (
            <tr key={i}>
              <td className="border px-5 py-1">
                <div className="flex  items-center gap-3">
                  <Sign
                    name={item.name}
                    color={PlanetColor[item.name.toLowerCase()]}
                  />
                  {item.name} in {getDMS(item.norm_degree)}
                  <Sign
                    name={item.sign}
                    color={SignColor[item.sign.toLowerCase()]}
                  />
                  {item.sign}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PlanetCard2({ title, desc, response }) {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="w-full">
        <h2 className="font-semibold mb-5 md:text-4xl text-3xl  text-zinc-800 dark:text-white">
          {title}
        </h2>
        <p className="dark:text-zinc-300 leading-6 rounded-md ">{desc}</p>
      </div>
      <div className="w-full  grid grid-cols-1 md:grid-cols-2  gap-y-4 gap-x-10 max-w-3xl mx-auto">
        {response.map((item, i) => (
          <div
            key={i}
            className={`flex px-5 rounded py-3 ${colorPlanet[i]} gap-3 text-para rounded items-center text-lg`}
          >
            <Sign name={item.name} color="text-light_bg/70" />
            {item.name} in {getDMS(item.norm_degree)} {item.sign}
          </div>
        ))}
      </div>
    </div>
  );
}

export function General_ascendant_report({ data1 }) {
  const data = {
    ascendant: "Gemini",
    report:
      "People with Gemini rising tend to be friendly, communicative, flexible, indecisive, unsure, liking to do two or more things at once, witty, clever, very active mentally, high-strung, temperamental, nervous or anxious, talkative, superficial, and always ready for something different. There may be two distinct sides to you as Gemini represents the Twins. You have a strong need to communicate what you already know and to learn more. You enjoy reading and traveling as they both give plenty of scope for picking up new knowledge. You need variety and can be the jack of all trades and the master of none. You tend to go wide   for breadth, not depth. You may appear confident, but you can lack self-confidence and inner sureness. You love to talk, both with your mouth as well as your hands. Spiritual lesson to learn: Control (learn to control and not scatter energies and to prioritize). Mercury rules Gemini so Mercury will be important in your chart.",
  };

  return (
    <div
      className={`bg-pink-300 gap-5 md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
    >
      <span
        style={{ lineHeight: 1.2 }}
        className="bg-white shadow-lg px-3 py-1 rounded-[15px] gap-2 font-semibold flex items-center"
      >
        <Sign name={data.ascendant} color="text-zinc-800" />
        {data.ascendant} Rising
      </span>
      <p className="text-zinc-700 sm:text-base text-sm">{data.report}</p>
    </div>
  );
}

export function House_cusps_report({ data1 }) {
  const data = [
    {
      planet_name: "Sun",
      house: 12,
      report:
        "There is the desire or the need to serve others in this lifetime. At times this is in direct conflict with a desire to seek seclusion from the world and/or wallow in self-pity seeking sympathy and service from others. This life may be a contemplative life due to the need to reshape negative character traits from past lives. You have an awareness of the oneness of life. You may lack confidence in your abilities. You have an empathy with sick or mentally disturbed people. You may develop or have clairvoyant powers and an interest in occult subjects and psychic phenomena. You may enjoy playing the martyr.",
    },
    {
      planet_name: "Moon",
      house: 11,
      report:
        "Popularity with women often comes with this position. Many of your friends will be female. The feeling of belonging to a group increases your feelings of security. If you feel you do not belong, then negative emotions surface that all basically have to do with your own needs for security. Humanitarian projects may be important to you as you can develop your nurturing instincts with or for the group. You enjoy working for the good of the group instead of just your own good. You are responsive to the feelings of others. Concerning vocation: The network of friendships within the work situation is emphasized. Friends may help get the job, make the job rewarding and will probably endure after the job is done. A friend's advice about work opportunity or direction is perhaps more important than that of a professional counselor.",
    },
    {
      planet_name: "Mars",
      house: 12,
      report:
        "You may have intense emotional reactions and perhaps repressed desires and paranoia. People may sense this and cause problems for you. There can be trouble through slander or with secret enemies. You may have need to overcome deep, hidden, inner resentments. You may be subject to false accusations by hidden enemies. You feel an aloneness. Your energy should be directed toward gaining an understanding of the meaning of life and for the development of harmony and oneness with humanity. A love of working in secret or behind the scenes can make you effective in getting the job done.",
    },
    {
      planet_name: "Mercury",
      house: 12,
      report:
        "You have a perceptive, intuitive and subtle mind with an interest in the metaphysical world. You can absorb knowledge intuitively and you understand more than you wish to divulge. You are secretive and have the ability to understand the deeper meanings of tones of voice and hand gestures. Secret enemies may try to undo you or speak evil of you. You may lack confidence in yourself. You may find yourself limited or incapacitated if you allow your nerves to become too frayed. Be careful of your ears and your hearing, which may be weak.",
    },
    {
      planet_name: "Jupiter",
      house: 12,
      report:
        "You tend to be philanthropic and have great faith in the future. You may have an angel to watch over you and assist you through any reversals. There is a love of humanity and a great desire to help others, especially those who cannot fend for themselves. Work in a hospital or jail is possible. Success comes in a quiet, unassuming manner in middle life. You can be unrealistic, though. It is important to think all ideas carefully through before carrying them out.",
    },
    {
      planet_name: "Venus",
      house: 12,
      report:
        "Your love of solitude and being your own best company may cause you to want to retreat from society. Pleasures are enjoyed in secret or behind the scenes. Clandestine relationships are possible. Self-indulgence through drink, drugs or sex can bring on self-undoing. There is a strong sense of compassion and a willingness to help and serve others. You may be a sucker for a good sob story. Success by social standards is unimportant to you. You want an understanding of the meaning of life. There is a tendency to keep relationships with the opposite sex a secret. You seldom reveal your innermost feelings. This position usually gives an interest in psychic or occult subjects. ",
    },
    {
      planet_name: "Saturn",
      house: 12,
      report:
        "You have the potential to develop strong inner discipline and sensitivity. There can be feelings of fear, doubt and a lack of confidence in yourself. There may be an unconscious desire to make restitution for wrongs committed in previous lives. Thus, you may feel fated and desire to retreat from society. A strong inner discipline gives you the ability to repay your past life debts, though. Your present path may involve serving mankind in some manner. Chronic health problems can be experienced if subconscious fears are not brought out into the open. There is a love of solitude. Work may be behind the scenes or it may involve an occupation where you do not come into contact with the general public.",
    },
    {
      planet_name: "Uranus",
      house: 9,
      report:
        "Your thinking, ideas and philosophies are original, offbeat, independent and unorthodox. There may be a desire to study metaphysics or a fringe religion or foreign culture. Sudden and unexpected long journeys are possible. Mental journeys in the form of dreams, visions, intuition and prophecies are possible. Your mind ever seeks to expand, gain knowledge and journey where it has never gone before. Too much mental activity, though, can cause nervousness and perhaps lead to a mental breakdown.",
    },
    {
      planet_name: "Neptune",
      house: 9,
      report:
        "You tend to be idealistic, reverent, mystical and philosophical. You are drawn to ideas that espouse the oneness of all life and the idea of the immortal life of the Spirit. Dreams can be very vivid and possibly prophetic. If carried too far, your religious or metaphysical beliefs could border on fanaticism. Good judgment in these areas can be clouded and confused. Exaggeration can be present. Trouble with in-laws may surface due to lack of compassion and understanding. Be careful who you choose to follow as you may encounter wolves in sheep's clothing. In your travels you prefer to wander around on your own without too much planning or forethought. Strange, unforeseen things can occur while traveling long distances.",
    },
    {
      planet_name: "Pluto",
      house: 7,
      report:
        "Control and power issues along with feelings of ownership are present with the partner or spouse. Cooperation with the mate will need to be learned. A partner may be selected based on that person's ability to stand their ground and not give in. A partner such as this could make the relationship very combative and competitive rather than harmonious and equal-sided. You are inclined to seek a partner who will provide a challenge to discover new resources within yourself that will give you the power to transcend previous performances and to transform certain aspects of your being. A partner who makes you feel growth and intensity is one you seek. There is a tendency to admire well developed will power in others, with the result that you may attract those who tend to dominate you, possibly feeling that if you have to cope with a somewhat overpowering personality you may discover more effectively the full extent of your own resources. There are intense feelings and reactions in your relationships. You have a need to cooperate with others and expect total commitment in your partnerships. Trouble can occur when this same sense of commitment is not felt by the other person in the relationship.",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {data.map((item, i) => (
        <div
          className={`${
            SignBgColor[item.planet_name.toLowerCase()]
          } gap-5  md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
        >
          <span className="bg-white shadow-lg px-3 py-1 rounded-[15px] gap-2 font-semibold flex items-center">
            <Sign
              size="text-[25px]"
              name={item.planet_name}
              color="text-zinc-800"
            />
            {item.planet_name} in {item.house}
            {date(item.house)} House
          </span>
          <p className="text-zinc-700 sm:text-base text-sm">{item.report}</p>
        </div>
      ))}
    </div>
  );
}

export function NatalAspectReport({ data1 }) {
  const data = [
    {
      aspecting_planet: "Sun",
      aspected_planet: "Jupiter",
      type: "Conjunction",
      report:
        "A conjunction of the Sun and Jupiter shows that you rarely do anything in moderation. You have an undying faith in yourself and believe that you can do anything to which you set your mind. Your enthusiasm and confidence level runs high, and sometimes you promise more than you can deliver. Even when major setbacks occur, you hang in there. You're never one to let anything get you down or keep you from charging off on another venture. You have confidence that affairs will eventually work out. Character is all important to you. An extremely high sense of justice and concern for others is apparent in your makeup, even if this doesn't show up in other parts of your chart.",
    },
    {
      aspecting_planet: "Sun",
      aspected_planet: "Neptune",
      type: "Square",
      report:
        "A square formed between the Sun and Neptune shows suffering from an inferiority complex. You feel that you must constantly defend your ideals and objectives. You may find yourself being undermined, or perceive this is the case. You are imaginative, but you may reject reality. It can be difficult for you to find an avenue of self-expression. It's hard for you to create a vision of exactly where you are going, because you underestimate your ability to succeed. You become involved when others lean on you and depend on you. You are sensitive to suffering, fond of animals, and more emotional than you let on. You are vulnerable emotionally. This aspect sometimes produces a lax in morality, bohemian tendencies, and many impractical and unrealistic ideas.",
    },
    {
      aspecting_planet: "Moon",
      aspected_planet: "Pluto",
      type: "Trine",
      report:
        "The favorable aspect formed between the Moon and Pluto strengthens your will to handle emotional problems in your life. This aspect provides you the talent to improve domestic and business matters by uncluttering your life. You're able to relinquish old emotional habits. You know your capabilities and you know your limits. You can neither be forced into doing what you don't wish to do, nor deterred from gaining your intended objectives. You are well respected because of your character and your ability to hold important issues in confidence when this is required of you. You have much energy which is well regulated and controlled.",
    },
    {
      aspecting_planet: "Mercury",
      aspected_planet: "Venus",
      type: "Conjunction",
      report:
        "The conjunction of Mercury and Venus shows an affable manner and social grace. You can get along with most people because you understand the art of compromise. This doesn't mean that you always give in, but just that you try to be fair and don't offend people without a good reason. You know how to express your opinions with skill and color, and without being argumentative. You are refined in your presentations and you usually see to it that your position is well documented.",
    },
    {
      aspecting_planet: "Mercury",
      aspected_planet: "Neptune",
      type: "Square",
      report:
        "The square formed between Mercury and Neptune suggests that your imagination often gets in the way of logical thinking. You are somewhat absentminded. Reluctant to accept responsibility, you have tendencies toward escapism. There is a need to focus mental energies and prepare yourself to face competition. Be cautious or conservative in your romantic alliances, for your imagination can play tricks on you.",
    },
    {
      aspecting_planet: "Jupiter",
      aspected_planet: "Saturn",
      type: "Conjunction",
      report:
        "The conjunction of Jupiter and Saturn shows a serious outlook on life and an involvement in heavy responsibilities. This aspect makes you much more conservative and practical than may otherwise be shown in the chart. You have some significant hurdles to get over before you can achieve the financial security you desire. Optimism can be drained by a series of disappointments and delays. Larger social issues may play an important part in your life. The conjunction doesn't deny success, but shows the necessity to work hard and be patient.",
    },
    {
      aspecting_planet: "Jupiter",
      aspected_planet: "Uranus",
      type: "Square",
      report:
        "The square formed between Jupiter and Uranus shows inhibiting conflicts which limit your goals and achievements. You may be expansive in your imagination and plans. There is a tendency to be impractical and too idealistic in your thinking. In some cases, eccentric religious beliefs and practices are shown by this aspect. Speculation, if allowed to get out of hand, can produce unexpected and unsatisfactory results, and you may have a tendency to go off the deep end in handling financial matters. Long-shot gambles that may tempt you, rarely work out.",
    },
    {
      aspecting_planet: "Venus",
      aspected_planet: "Neptune",
      type: "Square",
      report:
        "Venus is square Neptune in your horoscope. This aspect may show subconscious difficulties in close interpersonal relationships. It's hard for you to maintain close relationships because of defense mechanisms that go up when you sense that you are being challenged. Rose-colored glasses or blinders may affect your judgment in matters of the heart, and perhaps also to your financial affairs, as well. You are likely to be shy and retiring with the opposite sex, at least more so than shown by other indicators in your chart. Often this aspect shows a lack of direct or a degree of dishonesty or subterfuge associated in marital affairs.",
    },
    {
      aspecting_planet: "Saturn",
      aspected_planet: "Uranus",
      type: "Square",
      report:
        "The square between Saturn and Uranus denotes some sense of conflict between the urge to be independent, and the conservative restaints that appear to prevent self-expression. Maintaining a consistent sense of purpose is often difficult to achieve, and thus problems arise through alternating periods of seeking to preserve the status quo, and willingness to risk everything by radical and disruptive actions. Those born subject to this aspect are often very sensitive to perceived limitations and can react violently against them. Great personal control is needed to bring the best that this aspect offers - when usefully employed it can provide the means to stabalise explosive environments as well as conquer and destroy destructive and inhibitive situations.",
    },
    {
      aspecting_planet: "Neptune",
      aspected_planet: "Pluto",
      type: "Sextile",
      report:
        "This is a 'generational' influence that is most noticeable in charts where it contacts the angles or Sun or Moon. Neptune relates to mass consciousness. Pluto relates to political power, global organisations, focussed energy or 'underground' institutions. When these planets are in contact with each other there is often widespread onflict or focus upon political issues and collective ideals.",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      {data.map((item, i) => (
        <div
          className={`${
            typebgColor[item.type.toLowerCase()]
          } gap-5 md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
        >
          <span className="bg-white shadow-lg px-3 py-1 rounded-[15px] gap-2 font-semibold flex items-center">
            <Sign
              size="text-[25px]"
              name={item.aspecting_planet}
              color={PlanetColor[item.aspecting_planet.toLowerCase()]}
            />
            {item.aspecting_planet}{" "}
            <Sign
              size="text-[25px]"
              name={item.type}
              color={typeTextColor[item.type.toLowerCase()]}
            />{" "}
            {item.type}
            <Sign
              size="text-[25px]"
              name={item.aspected_planet}
              color={PlanetColor[item.aspected_planet.toLowerCase()]}
            />{" "}
            {item.aspected_planet}
          </span>
          <p className="text-zinc-700 sm:text-base text-sm">{item.report}</p>
        </div>
      ))}
    </div>
  );
}

export function Natal_house_cusp_report({ data1 }) {
  const data = [
    {
      house: 1,
      sign: "Gemini",
      degree: 65.59869,
      report:
        "For you, the world is a place to travel, see, and experience in all its variety. Your manner of personal expression through thought, writing, and oratory could bring recognition in any of those fields. Others are apt to perceive you in a physical sense as alert, aware, quick on your feet, and on the move most of the time. You have an intellectual appeal to many people that would have them seeking you out for information or advice. Because of your quick wit, and active schedule, you have a tendency to take on projects before completing those already started. You may be fortunate in a business involving short journeys, or establishing several business locations not located too far apart, yet connected by highway, and accessible to the public at large.",
    },
    {
      house: 2,
      sign: "Cancer",
      degree: 90.51466,
      report:
        "The indication regarding your financial affairs shows that they could be bound to obligations regarding the family, or that relatives might have an influence over how money is handled or controlled. You can be very imaginative in ways that will attract money to you, and in maintaining a tenacious grip in preventing it from flowing away for unimportant reasons. Although you tend to be conservative about finances, your sensitive nature may allow for contributions to charity, or for the welfare of others. You may also be prone to spend for things that make you comfortable, or bring pleasure, or enhance your safety or security. Investments in agriculture, property, insurance, and commodities based on liquids such as water-rights or drilling, and soft drinks would be beneficial to your financial base.",
    },
    {
      house: 3,
      sign: "Cancer",
      degree: 113.66691,
      report:
        'There is an indication that you could be drawn to study in areas that your imagination might be put to good use. Writing plays or novels in which you could spin tales would undoubtedly be pleasing to you. Along more mundane lines, you would be inclined to learn or study in those areas that are the most interesting to you, and even this is subject to a degree of changeability. You tend to enjoy traveling whether for business or pleasure, and short or medium trips are most likely, although you would grab any opportunity to visit faraway places. See that you make arrangements for your comfort, as you are not usually interested in "roughing it," unless for special occasions. Home and neighborhood have an important place in your life, and harmony and peace with family and friends is always considered. You should handle your own correspondence as it tends to be personal and private.',
    },
    {
      house: 4,
      sign: "Leo",
      degree: 138.98844,
      report:
        "You take great pride in your home and tend to make it a showcase for your work and talent. You prefer a permanent abode with a place to grow. You usually expect a great deal of your family, and enjoy their success at work and school. Your home tends to be full of light and life, and a center for health and fitness. You often take the lead in planning future family activities, and enjoy developing home improvement projects. Once a new project is started you are determined to see it finished. You have a natural store of energy and family members may have trouble keeping up with your zest for work and fun. The indication is for a long and active life right to the end.",
    },
    {
      house: 5,
      sign: "Virgo",
      degree: 169.85886,
      report:
        "There is an inclination to be somewhat analytical about how you approach others, and to apply your own values as to how a relationship should develop. While you have a wide range of friends, you're not inclined to follow the party crowd. You can have a good time without letting go, and proper conduct is expected from everyone. Courtship is something you probably have a preconceived idea about, and you desire an orderly, sequence of events to unravel in their due time. There may be few children from marriage, but many factors will determine the exact number. Although you may not be artistically inclined, you possess a shrewd eye for form and design. Your opinion is of great value to those who appreciate your fine tastes. You are more inclined to invest rather than speculate, and investments in food, catering, or in the health fields would benefit most.",
    },
    {
      house: 6,
      sign: "Libra",
      degree: 207.24882,
      report:
        "Your sunny and happy disposition rarely finds you suffering any major health problems. When you do come `under the weather' your recuperative powers are strong, and you're back on your feet in no time. You do tend to become emotional at times, and this can have an affect on the physical body. Sleep is a good tonic for this type of malady, and napping can improve your spirits dramatically. Try to avoid any kind of discord, whether around you or even at a distance, as this will have an effect on your emotions, and this is not good for you. Your on-the-job attitude is generally upbeat and happy, and you have many friends that like your easy going manner. You would do well in a partnership whether in business or any other enterprise. You have a unique ability to share and take responsibility at the same time. Your partner will appreciate your efforts and abilities.",
    },
    {
      house: 7,
      sign: "Sagittarius",
      degree: 245.59869,
      report:
        "The indication is for a long and fortunate marriage to someone that is prosperous and respected. The problem is that there could be other marriages that are not successful due to the tendency to make hasty decisions. Marriage is possible to someone with a love for the outdoors, or an interest in sporting activities. There is a good likelihood of meeting the right person through travel, or in foreign lands. Relationships that are not nurtured or continually worked on have a possibility of drifting and eventually falling apart. General partnerships could bring a degree of success, and productive contacts maintained throughout the land as well as overseas. A marriage partner that is also a business partner is not usually considered favorable.",
    },
    {
      house: 8,
      sign: "Capricorn",
      degree: 270.51466,
      report:
        "There may be delays in the execution of a will, or hindrance in the final disbursing of an inheritance. You should receive what is rightfully yours, even though it may come later in life, or not prove as beneficial as expected. Land or real estate, and stocks and bonds are assets likely passed on to you as a rightful heir. Under certain circumstances the possibility exists that a debt might be inherited rather than someone's assets. Attempts to ascertain the exact manner of death is usually not too fruitful an undertaking, although certain characteristics do prevail. Bone disease or problems with the joints, particularly the knees, may be significant. Lethargy or lack of vitality might sap the strength needed to maintain resistance against viral attacks or disease, notably in old age. In general the sign indicates longevity, and a strong grip on life to the very end.",
    },
    {
      house: 9,
      sign: "Capricorn",
      degree: 293.66691,
      report:
        "The emphasis on long distance travel is in carrying out the affairs of a business, or in meeting the obligations imposed by a business or in other related matters. The same can be said for affairs conducted in foreign lands, or with foreign governments, especially where publicity or prestige are involved. Long journeys taken for personal reasons, such as a vacation, are apt to be met with some delay, or scheduling problems. It is important that arrangements be made to secure personal comfort prior to departure. All forms of travel can be utilized; air, sea, rail, and road, although the most satisfying will be by that which carries one over the land. Religious matters may not take on great importance, and in some cases skepticism may predominate. Where religion is a major factor, then it is apt to be with the orthodox belief systems.",
    },
    {
      house: 10,
      sign: "Aquarius",
      degree: 318.98844,
      report:
        "You tend to be a visionary at times, and this leads you to seek occupations or professions that are at the cutting edge of technology, or breaking new ground for doing old things in new ways. Your interests encompass a wide range of potential career choices that would include aero-space, computer technology, electronics, and many areas that would challenge your intellectual capabilities. Ironically, this would also include the arcane sciences such as astrology, and various psychic fields that would utilize your innate and powerful intuition. You might find satisfying experiences in the writing field, or with architectural drawing, or operating a new age book store. Whatever you finally end up doing with a career choice, it will undoubtedly tend toward the slightly eccentric and unpredictable.",
    },
    {
      house: 11,
      sign: "Pisces",
      degree: 349.85886,
      report:
        "There is a natural inclination to form friendships that are warm and personal, and you enjoy establishing a rapport with those that would be your companions. It is easy being the first to arrive when help is needed, or when a friend is ill and requires assistance. Although you are likely to establish life long companions, there may be many that will come into your life, and then go out of it; some will make a lasting impression that could be missed over the years. Because of your sympathetic nature, it would be wise to use discrimination in choosing whom to make your friends, since they may ask you to make sacrifices on their part, and in your effort to be helpful, you might be taken advantage of. Your hopes and wishes tend to be modest in scope, and you can be satisfied with your attainments in life.",
    },
    {
      house: 12,
      sign: "Aries",
      degree: 27.24882,
      report:
        "Where the possibility of resentment is possible in life, it could come about through competition. Whether in sports, business, or social affairs, someone on the losing end is not apt to take too kindly to your attitude; thus it would be best to avoid showiness, or pretentiousness. Where restrictions might come into effect the indication is incarceration, such as a prisoner of war, internment over political activities, or civil disobedience. Enmity, should it arise, might occur because of new ideas challenging the old order, and your participation in overthrowing that order, which could be by aggressive means. Avoid incurring anyone's hostility over anything you might do, or have done, in that injury or harm might be the result.",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      {data.map((item, i) => (
        <div
          className={`${colorPlanet[i]} gap-5 md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
        >
          <span className="bg-white shadow-lg px-3 py-1 rounded-[15px] gap-2 font-semibold flex items-center">
            {item.house}
            {date(item.house)} House start at {getDMS(item.degree)} {item.sign}
          </span>
          <p className="text-zinc-700 sm:text-base text-sm">{item.report}</p>
        </div>
      ))}
    </div>
  );
}

export function Planet_sign_report({ data1 }) {
  const data = [
    {
      planet_name: "Sun",
      sign_name: "Taurus",
      report:
        "Taureans are generally strong, quiet, deliberate, practical, exacting, determined, persistent, persevering, compassionate and loyal. They like getting their hands on their work, building things, and seeing the tangible, practical results of their effort. Routine work does not bother them as long as the end result in useful and serves some concrete purpose. Possessions and material things are usually of great significance to Taureans. This is because they don't feel emotionally secure unless they can see and touch the objects they own. This intense need to possess and enjoy with the senses can drive Taureans to be extremely productive or extremely acquisitive. Lesser evolved Taureans can treat people as objects or possessions, thus leading to difficulty in relationships. Taurus people work at a slower pace than most, but they always finish whatever projects they start. Because of this, they are reliable, trustworthy, careful and steadfast. They are better at sustaining what others have started rather than starting things themselves. Taureans can be lead, but never pushed. It takes a lot to make a Taurean mad, yet if they are pushed over the edge, well, all heck can break lose. Simply imagine an angry bull and you know what a Taurean is capable of when he is pushed too far. You know the saying about a bull in a china shop, right? When angered, Taureans need plenty of time to cool down. It is best to just leave them alone. You will know when things are out of their system. With anything Taureans need time to assimilate and mull things over. Don't rush them or push them.",
    },
    {
      planet_name: "Moon",
      sign_name: "Aries",
      report:
        "Adaptability and inconstancy in your efforts to initiate are present here. Frequent emotional upheavals due to a fiery temper are possible. Patience is not your strong suit and if things don't happen the way you want, and now, well, you can go off like a bolt of lightning. Your tendency is to be spontaneous, temperamental, impetuous, headstrong and you dislike restraint. You are very direct in thought, action, and speech and everyone knows how you feel. You pull no punches. You can be a very bossy individual if you do not try to control your moods. A desire to be in the limelight or in charge of things is present. You hate showing any personal weakness or that you need any support, comfort, or nurturing from others. Your enthusiasm for starting new projects is contagious and you are probably a better starter than a finisher. You are adventurous, courageous, and independent. You don't like complainers and are always ready to meet any challenge. A fair amount of physical activity is good for you so you can work off those moods you get into once in a while. You have a creative, flamboyant personality that likes to trail-blaze in unusual ventures. Perhaps your accomplishments cover inferiority feelings that lie beneath the surface.",
    },
    {
      planet_name: "Mars",
      sign_name: "Taurus",
      report:
        "Once you set your mind on a goal, your dedication, determination, and commitment to it are extraordinary. You never give up and find it difficult to change your mind or course in mid-stream. Whatever you have set your sights on, you refuse to give up or let go of it. You are loyal to a fault, unless someone betrays your trust, then all heck can break loose. You are patient and usually slow to anger unless someone takes you too far. That is when you charge, just like the bull Taurus stands for. You are reliable and consistent and can handle more of the workload than most around you. You prefer a regular routine, with definite hours and clearly defined responsibilities and tasks. You enjoy building and seeing the results of your hard work. Things you can put your hands on appeal to you. You need to see practical results, not theory and you are not satisfied with intangibles like just having a good time. At the same time, you have a lazy, comfort-loving side and there is often a good deal of inertia for you to overcome before you get going. Once you get a momentum going, your energy level is strong and steady. Keeping things going is your strength, especially once someone else starts them. Material well-being and security are large factors in determining what you do. Your stamina and persistence is your great strength but it can also work against you; you can get caught in a rut and refuse to seize new opportunities. You also tend to play it safe and to limit yourself in that way. Change scares you. So does disease and pain. At times you have a decided stubborn streak where no one can reach you. Possessiveness and jealously may cause problems for you in relationships. Money and possessions are important to you for the feelings of security they bring. Re-evaluate your values. Sharing should be cultivated. Your tongue may be quite unruly at times.",
    },
    {
      planet_name: "Mercury",
      sign_name: "Taurus",
      report:
        "Your manner of thought and speech is slow and quite deliberate. You do not change your mind quickly and see no reason to do so. You are determined, practical, methodical, and conservative in most things you do. You have patience and the ability to stick with things until the end. You may assimilate material at a slower pace than others, but once a concept is learned, it is never forgotten. You hate being forced or rushed into a decision or an action, especially if you have not been given time to think it all through and evaluate the practicalities of the situation. Once your mind is made up, that's it. It will take a lot to undo it. Perseverance is one of your best traits. You enjoy sustaining what others have started, especially if you can see tangible, practical results. You love to build things. You succeed not so much because of your mental brilliance, but because you have the ability to concentrate and follow a project through to its completion. You may have an artistic or musical aptitude. Perhaps you sing or speak for a living. Common sense is not uncommon in you.",
    },
    {
      planet_name: "Jupiter",
      sign_name: "Taurus",
      report:
        "You desire to expand the world around you with practical, tangible, material things. The rewards you expect from your efforts must be material in nature. As a gesture of appreciation, a simple thank-you is not as good as some little something in the form of something concrete that you can hold and see. You are generous with your possessions and share freely what you have, but only if the cause merits such action. Your nature tends to be a bit extravagant or self-indulgent and it is up to you to control your desire nature. You may be stubborn in your philosophical or religious beliefs, needing proof of anything before believing. There is a fear of sickness and pain. Money and material possessions can come to you but you must use your resources wisely, else they will get you into trouble. A great love of rich or sweet food may lead you to become overweight. Control of the palate and of the lower nature should be observed.",
    },
    {
      planet_name: "Venus",
      sign_name: "Taurus",
      report:
        "In love affairs you are generally loyal and steady, especially if your partner is demonstrative and affectionate. You are oriented towards the sensual side of life in everything you do and it may show through too much weight. You are tremendously responsive to beauty and physical appearances, and the physical attractiveness of your partner is very important to you. You enjoy indulging yourself and the ones you love and it is too easy for you to be extravagant and perhaps to put too much value in material things. Comfort is important to you and you hate getting your hands dirty. At times you can be lazy, hoping or expecting someone else to do the dirty work. Self-control needs to be developed and added to the qualifications you already possess ? warmth, charm, sympathy, artistic. Guard against possessiveness, jealousy, and taking the easy way out in your relationships. You aim to please in practical and earthy ways.",
    },
    {
      planet_name: "Saturn",
      sign_name: "Taurus",
      report:
        "You are very persistent in carrying out your goals. You can be overly concerned with material possessions and in wanting to squirrel away too much for that proverbial rainy day. You tend to place too much emphasis on material goods and possessions for security and if carried too far, you can become miserly and miserable due to worrying about what might happen tomorrow and will you have enough money to cover things. You need to re-evaluate your values and where true security comes from. On the positive side, you are a tireless worker and have patience, caution, determination, discipline, organizing ability and can go the distance when those around you fall. Hard work is your forte. Your feelings are serious, well-controlled and not easily changed, although at times it may be hard for you to forgive and forget. Loyalty is important to you. Building structures that last is a need you have.",
    },
    {
      planet_name: "Uranus",
      sign_name: "Aquarius",
      report:
        "You are at home when you are doing your own thing, and do not care too much what other people think. You tend to be unconventional with your friends and with 'your public'. You are a loyal friend so people put up with any eccentricities. Also, you are extremely tolerant of any unconventional behaviour and beliefs which your friends hold. You are not afraid to lend a hand when your friends need you. You are a person of thoughts and ideas, and also a communicator, but some of your ideas and beliefs might not be practical. You can be an original and progressive thinker, also being analytical. So you might be interest in or involved in science.",
    },
    {
      planet_name: "Neptune",
      sign_name: "Aquarius",
      report:
        "You tend to dream, dreams of freedom and independence, unconventional dreams, but you are not deterred. You can be idealistic about anyone who tries to reduce freedom and independence, and even rebellious towards the. You are fiercely loyal to your beliefs and to your friends. You can appear somewhat eccentric to the other generations, and you may acquire associates who are cranky and artistic, perhaps musicians. You are sensitive and idealist and sufficiently passionate to carry implement your ideals and aspirations.You may do this by breaking down conventions and overcoming barriers in an unusual way and with unexpected results.",
    },
    {
      planet_name: "Pluto",
      sign_name: "Sagittarius",
      report:
        "You transform in a free and tolerant manner matters related to higher education and philosophy, and in your vision of the future and your ideals. There may be significant changes in higher education in this time. There may also be transformations in your attitudes to freedom and tolerance. There may be greater long distance travel during this period to foreign places, perhaps even in space. This generation are obsessed with foreign travel, and about life on other planets.",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      {data.map((item, i) => (
        <div
          className={`${colorPlanet[i]} gap-5 md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
        >
          <span
            style={{ lineHeight: 1.2 }}
            className="bg-white  shadow-lg px-3 py-1 rounded-[15px] gap-2 font-semibold flex items-center"
          >
            <Sign
              size="text-[25px]"
              name={item.planet_name}
              color="text-zinc-800"
            />
            {item.planet_name} in{" "}
            <Sign
              size="text-[25px]"
              name={item.sign_name}
              color="text-zinc-800"
            />
            {item.sign_name}
          </span>
          <p className="text-zinc-700 sm:text-base text-sm">{item.report}</p>
        </div>
      ))}
    </div>
  );
}

function date(number) {
  if (number == 1) {
    return "st";
  } else if (number == 2) {
    return "nd";
  } else if (number == 3) {
    return "rd";
  } else if (number > 3) {
    return "th";
  }
}
