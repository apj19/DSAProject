import React, { useEffect, useState } from "react";

function Display() {
  const [arr, setArr] = useState([1, 2, 3]);

  function randomizeArray() {
    let tempList = [];
    for (let i = 0; i < 10; i++) {
      tempList.push(parseInt(Math.random() * 10 + 1));
    }
    setArr(tempList);
  }

  useEffect(() => {
    randomizeArray();
  }, []);

  return (
    <div>
      <div className="flex  justify-center mt-16">
        {arr.map((v, i) => (
          <div className="pr-4" key={i}>
            {v}
          </div>
        ))}
      </div>

      <button
        type="button"
        className=" mt-16 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={() => randomizeArray()}
      >
        Button text
      </button>
    </div>
  );
}

export default Display;
