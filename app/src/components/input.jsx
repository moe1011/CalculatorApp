import React from "react";
import { CalcButton } from "./calcbutton";
import { useHotkeys } from 'react-hotkeys-hook';

export function Input({displayValues, setDisplayValues, setIsCalc}){


  function handleHotkey(val){
    switch(val){
      case "esc":
        setDisplayValues("");
        break;
      case "=":
        setIsCalc(true);
        break;
      case "backspace":
        let temp = displayValues;
        temp = temp.slice(0, -1)
        setDisplayValues(temp);
        break;
      default:
        setDisplayValues((prev) => {return(prev + val)})
    }
}



//* Hotkeys
useHotkeys('0', () => handleHotkey("0"))
useHotkeys('1', () => handleHotkey("1"))
useHotkeys('2', () => handleHotkey("2"))
useHotkeys('3', () => handleHotkey("3"))
useHotkeys('4', () => handleHotkey("4"))
useHotkeys('5', () => handleHotkey("5"))
useHotkeys('6', () => handleHotkey("6"))
useHotkeys('7', () => handleHotkey("7"))
useHotkeys('8', () => handleHotkey("8"))
useHotkeys('9', () => handleHotkey("9"))
useHotkeys('.', () => handleHotkey("."))
useHotkeys(['equal', 'enter'], () => handleHotkey("="))
useHotkeys('shift+equal', () => handleHotkey("+"))
useHotkeys('minus', () => handleHotkey("-"))
useHotkeys('shift+8', () => handleHotkey("x"))
useHotkeys('/', () => handleHotkey("÷"))
useHotkeys('esc', () => handleHotkey("esc"))
useHotkeys('shift+9', () => handleHotkey("("))
useHotkeys('shift+0', () => handleHotkey(")"))
useHotkeys("backspace", () => handleHotkey("backspace"))

    return(
      <>
        <div className="px-2 flex">
          <CalcButton value={"AC"} theme={"function"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"("} theme={"function"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={")"} theme={"function"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"÷"} theme={"operation"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          </div>

          <div className="px-2 flex ">
          <CalcButton value={"7"} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"8"} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"9"} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"x"} theme={"operation"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          </div>

          <div className="px-2 flex ">
          <CalcButton value={"4"} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"5"} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"6"} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"-"} theme={"operation"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          </div>

          <div className="px-2 flex ">
          <CalcButton value={"1"} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"2"} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"3"} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"+"} theme={"operation"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          </div>

          <div className="px-2 flex ">
          <CalcButton value={"0"} theme={"number"} long={true} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"."} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"="} theme={"operation"} displayValues={displayValues} setDisplayValues={setDisplayValues} setIsCalc={setIsCalc}/>
          </div>

          </>
    );
}