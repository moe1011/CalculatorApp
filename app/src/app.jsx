import React from "react";
import { useState, useEffect } from "react";
import "./app.css";
import { Display } from "./components/display";
import { Input } from "./components/input";
import { Tabs } from "./components/tabs";
import { evaluate } from "mathjs";

export function App() {
  const [displayValues, setDisplayValues] = useState("");
  const [savedCalc, setSavedCalc] = useState("");
  const [isCalc, setIsCalc] = useState(false);

  useEffect(() => {
    if (isCalc) {
      try {
        setIsCalc(false);

        let calcValue = displayValues;
        console.log(calcValue);
        if (calcValue == "" || typeof calcValue != "string") {
          return;
        }

        if (calcValue.includes("x")) {
          calcValue = calcValue.replace(/x/g, "*");
        }
        if (calcValue.includes("÷")) {
          calcValue = calcValue.replace(/÷/g, "/");
        }

        // Calculation
        let sum = evaluate(calcValue);
        sum = sum.toString();

        setSavedCalc(prev =>(prev + displayValues + " = " + sum + "\n"));
        setDisplayValues(sum);
      } catch (e) {
        // console.error(e);
      }
    }
  }, [isCalc]);

  return (
    <div className="App bg-blue-500/90 h-screen">
      <div className="flex Draggable bg-blue-700/90 w-screen h-8"></div>
      <div className="text-white text-5xl mb-5">
        <Tabs savedCalc={savedCalc} setSavedCalc={setSavedCalc} />
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
