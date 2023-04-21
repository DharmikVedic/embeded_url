export function WeeklyHoroscopeComponent({ data }) {
  const str2 = data.sun_sign.charAt(0).toUpperCase() + data.sun_sign.slice(1);
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <h3
          className={` text-zinc-800 text-2xl sm:text-3xl text-center font-semibold dark:text-white `}
        >
          {`${str2} for ${data.prediction_start_date} - ${data.prediction_end_date} `}
        </h3>
        <div className="flex flex-col gap-5 mt-7">
          <p className={`md:text-lg dark:text-zinc-200 text-zinc-600`}>
            {data.prediction}
          </p>
        </div>
      </div>
    </>
  );
}
