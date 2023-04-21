export function GetlocalStrorageTheme() {
  if (typeof window !== "undefined") {
    const get = localStorage.getItem("theme");
    if (get) {
      return get;
    } else return null;
  }
}
