import React from "react";
import { useState, useEffect } from "react";
import "./app.css";
import { Display } from "./components/display";
import { Input } from "./components/input";

export function App() {
  const [displayValues, setDisplayValues] = useState("");
  // const [calcValues, setCalcValues] = useState();
  const [isCalc, setIsCalc] = useState(false);

  useEffect(() => {
    // if(displayValues == undefined || displayValues == null){
    //   return;
    // }
    if (isCalc) {
      try {
        setIsCalc(false);

        let calcValue = displayValues;
        console.log(calcValue);
        if (calcValue == "" || typeof calcValue != "string") {
          return;
        }
        // if(isNaN(parseInt(calcValue))){
        //   console.log("returning")
        //   return;
        // }

        if (calcValue.includes("x")) {
          calcValue = calcValue.replace(/x/g, "*");
        }
        if (calcValue.includes("÷")) {
          calcValue = calcValue.replace(/÷/g, "/");
        }
        console.log(calcValue);

        setDisplayValues(eval(calcValue));
      } catch (e) {
        // console.error(e);
      }
    }
  }, [isCalc]);

  return (
    <div className="App bg-blue-500/90 h-screen">
      <div className="flex Draggable bg-blue-700/90 w-screen h-8"></div>
      Here: {displayValues}
      <div className="text-white text-5xl mb-5">
        <Display displayValues={displayValues} />
        <Input
          displayValues={displayValues}
          setDisplayValues={setDisplayValues}
          setIsCalc={setIsCalc}
        />
      </div>
    </div>
  );
}
