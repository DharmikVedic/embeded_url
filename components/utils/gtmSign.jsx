export const zodiacSigns = {
  sun: "A",
  moon: "B",
  mercury: "C",
  venus: "D",
  mars: "E",
  jupiter: "F",
  saturn: "G",
  uranus: "H",
  neptune: "I",
  pluto: "J",
  node: "L",
  northnode: "L",
  southnode: "M",
  eris: "N",
  earth: "O",
  ascendant: "P",
  midheaven: "Q",
  retrograde: "R",
  partoffortune: "S",
  chiron: "U",
  ceres: "V",
  pallas: "W",
  juno: "X",
  vesta: "Y",
  aries: "a",
  taurus: "b",
  gemini: "c",
  cancer: "d",
  leo: "e",
  virgo: "f",
  libra: "g",
  scorpio: "h",
  sagittarius: "i",
  capricorn: "j",
  aquarius: "k",
  pisces: "l",
  conjunction: "m",
  opposition: "n",
  trine: "p",
  sextile: "q",
  semisextile: "r",
  quincunx: "s",
  semisqaure: "t",
  square: "o",
  sesquisquare: "u",
};

export function Sign({ name, color, size }) {
  const c = color || "text-zinc-800";
  return (
    <span className={`${c} ${size ? size : "text-[30px]"} font-zodiac`}>
      {name ? zodiacSigns[name.split(" ").join("").toLowerCase()] : ""}
    </span>
  );
}

export function getDMS(de) {
  let deg = fix30(de);
  let d = Math.floor(deg);
  let minfloat = (deg - d) * 60;
  let m = Math.floor(minfloat);
  let secfloat = (minfloat - m) * 60;
  let s = Math.round(secfloat);
  if (s === 60) {
    m++;
    s = 0;
  }
  if (m === 60) {
    d++;
    m = 0;
  }
  return d + "°" + m + "′";
}

function fix30(d) {
  let num = d;
  while (num > 30) {
    num -= 30;
  }
  return num;
}
