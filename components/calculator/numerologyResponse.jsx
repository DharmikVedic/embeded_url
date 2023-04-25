export function LifePath({ data }) {
  return (
    <>
      {Object.keys(data).length > 0 && (
        <>
          <div className=" flex gap-10 md:flex-row flex-col justify-between items-center">
            <div className=" rounded w-full">
              <h6 className="text-zinc-800 dark:text-white flex gap-2 items-center md:text-4xl text-3xl font-semibold">
                {data?.name}, your lifepath number is : {data?.lifepath_number}
              </h6>
            </div>
          </div>
          <div className="flex flex-col max-w-3xl gap-5">
            {data?.report.map((item, i) => (
              <p
                className="dark:text-zinc-300 text-zinc-700 md:text-base text-sm"
                key={i}
              >
                {item}
              </p>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export function Expression({ data }) {
  return (
    <>
      {Object.keys(data).length > 0 && (
        <>
          <div className=" flex gap-10 md:flex-row flex-col justify-between items-center">
            <div className=" rounded w-full">
              <h6 className="text-zinc-800 dark:text-white flex gap-2 items-center md:text-4xl text-3xl font-semibold">
                {data?.name}, your expression number is :{" "}
                {data?.expression_number}
              </h6>
            </div>
          </div>
          <div className="flex flex-col max-w-3xl gap-5">
            {data?.report.map((item, i) => (
              <p
                className="dark:text-zinc-300 text-zinc-700 md:text-base text-sm"
                key={i}
              >
                {item}
              </p>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export function Pesonality({ data }) {
  return (
    <>
      <div className=" flex gap-10 md:flex-row flex-col justify-between items-center">
        <div className=" rounded w-full">
          <h6 className="text-zinc-800 dark:text-white flex gap-2 items-center md:text-4xl text-3xl font-semibold">
            {data?.name}, your personality number is :{" "}
            {data?.personality_number}
          </h6>
        </div>
      </div>
      <div className="flex flex-col max-w-3xl gap-5">
        {data?.report.map((item, i) => (
          <p
            className="dark:text-zinc-300 text-zinc-700 md:text-base text-sm"
            key={i}
          >
            {item}
          </p>
        ))}
      </div>
    </>
  );
}

export function SoulUrge({ data }) {
  return (
    <>
      {Object.keys(data).length > 0 && (
        <>
          <div className=" flex gap-10 md:flex-row flex-col justify-between items-center">
            <div className=" rounded w-full">
              <h6 className="text-zinc-800 dark:text-white flex gap-2 items-center md:text-4xl text-3xl font-semibold">
                {data?.name}, your soul urge number is :{" "}
                {data?.soul_urge_number}
              </h6>
            </div>
          </div>
          <div className="flex flex-col max-w-3xl gap-5">
            {data?.report?.map((item, i) => (
              <p
                className="dark:text-zinc-300 text-zinc-700 md:text-base text-sm"
                key={i}
              >
                {item}
              </p>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export function Challange({ data }) {
  function removeRepeating(arr, arr2) {
    let toRemove = new Set(); // create a set to store indices to remove
    let seen = new Set(); // create a set to store previously seen values
    for (let i = 0; i < arr.length; i++) {
      if (seen.has(arr[i])) {
        toRemove.add(i); // add index to set of indices to remove
      } else {
        seen.add(arr[i]); // add value to the set of seen values
      }
    }
    return arr2.filter((_, index) => !toRemove.has(index)); // remove indices from arr2
  }

  return (
    <>
      {Object.keys(data).length > 0 && (
        <>
          <div className=" flex gap-10 md:flex-row flex-col justify-between items-center">
            <div className=" rounded w-full">
              <h6 className="text-zinc-800 dark:text-white flex gap-2 items-center md:text-4xl text-3xl font-semibold">
                {data?.name}, your challenge numbers is :{" "}
                {data?.challenge_numbers.join(",")}
              </h6>
            </div>
          </div>
          <div className="flex flex-col max-w-3xl gap-5">
            {removeRepeating(data.challenge_numbers, data.report).map(
              (item, i) => (
                <p
                  className="dark:text-zinc-300 text-zinc-700 md:text-base text-sm"
                  key={i}
                >
                  {item}
                </p>
              )
            )}
          </div>
        </>
      )}
    </>
  );
}
