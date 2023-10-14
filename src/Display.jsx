import React, { useEffect, useState } from "react";
import { selectionSort } from "./Utilities/sortingMethods";

function Display() {
  const [arr, setArr] = useState([1, 2, 3, 9, 5, 8, 3, 7, 8, 4]);

  function randomizeArray() {
    let tempList = [];
    for (let i = 0; i < 10; i++) {
      tempList.push(parseInt(Math.random() * 10 + 1));
    }
    setArr(tempList);
  }

  function sort() {
    let temp = [...arr];
    selectionSort(temp);
    setArr(temp);
  }

  useEffect(() => {
    // randomizeArray();
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
        className=" mt-16 mx-4 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={() => randomizeArray()}
      >
        Randomize
      </button>

      <button
        type="button"
        className=" mt-16 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={() => sort()}
      >
        Sort
      </button>
    </div>
  );
}

export default Display;
