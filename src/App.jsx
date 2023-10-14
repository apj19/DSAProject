import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Display from "./Display";
import Timer from "./Timer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold ">Visulize</h1>
        <Display />
        <Timer />
      </div>
    </>
  );
}

export default App;
