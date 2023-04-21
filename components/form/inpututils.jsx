import style from "../../styles/Home.module.css";

export function BorderInput({
  name,
  type,
  placeholder,
  handle,
  active,
  min,
  max,
}) {
  return (
    <>
      {min ? (
        <input
          id={name}
          className={`input w-full text-black border px-3 py-2   bg-transparent `}
          type={type ? type : "text"}
          name={name}
          onChange={handle}
          min={min}
          max={max}
          value={active}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={name}
          className={` w-full text-zinc-800 dark:text-zinc-200 bg-transparent dark:border-zinc-500 border-zinc-300 border-b px-1 py-2 outline-none `}
          type={type ? type : "text"}
          name={name}
          onChange={handle}
          value={active}
          placeholder={placeholder}
        />
      )}
    </>
  );
}

export function BorderSelect({ name, handle, active, children }) {
  return (
    <>
      <select
        id={name}
        name={name}
        value={active}
        className={`${style.select2} w-full dark:text-zinc-200 text-zinc-800  border-b dark:border-zinc-500 border-zinc-300 px-3 py-2 bg-transparent`}
        onChange={handle}
      >
        {children}
      </select>
    </>
  );
}

export function Label({ text, htmlfor }) {
  return (
    <label
      htmlFor={htmlfor}
      className={`text-left md:text-lg text-lg font-medium dark:text-white whitespace-nowrap`}
    >
      {text}:
    </label>
  );
}
