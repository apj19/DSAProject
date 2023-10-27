import React, { useEffect, useState } from "react";
import { selectionSort } from "./Utilities/sortingMethods";

function Display() {
  const [arr, setArr] = useState([1, 2, 3, 9, 5, 8, 3, 7, 8, 4]);
  const [precessArr, setprecessArr] = useState(0);

  const [arrLength, setArrLength] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function randomizeArray() {
    let tempList = [];
    for (let i = 0; i < 10; i++) {
      tempList.push(parseInt(Math.random() * 10 + 1));
    }
    setArr(tempList);
  }

  function sort() {
    let temp = [...arr];
    let processArr = selectionSort(temp);
    // console.log(processArr);
    setprecessArr(processArr);
    // setArr(temp);
  }

  const toggleTimer = () => {
    sort();
    setIsActive(!isActive);
  };

  useEffect(() => {
    let timer;

    if (isActive && arrLength < 9) {
      timer = setInterval(() => {
        setArr(precessArr[arrLength]);

        setArrLength(arrLength + 1);
      }, 1000);
    } else if (!isActive && arrLength > 9) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isActive, arrLength]);

  return (
    <div>
      <div className="flex  justify-center mt-16  ">
        {arr.map((v, i) => (
          <div
            className={`pr-4  ${
              i <= arrLength ? "text-green-300" : "text-red-300"
            }`}
            key={i}
          >
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

      {/* <button
        type="button"
        className=" mt-16 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={() => sort()}
      >
        Sort
      </button> */}
      <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
      <p className={`${arrLength > 3 ? "text-green-300" : "text-red-300"}`}>
        {arrLength}
      </p>
    </div>
  );
}

export default Display;
