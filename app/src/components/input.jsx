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

function handleHotkeyNoRepeat(key) {
  return (e) => {
    if (!e.repeat) {
      handleHotkey(key);
    }
  };
}


//* Hotkeys
useHotkeys('0', handleHotkeyNoRepeat("0"))
useHotkeys('1', handleHotkeyNoRepeat("1"))
useHotkeys('2', handleHotkeyNoRepeat("2"))
useHotkeys('3', handleHotkeyNoRepeat("3"))
useHotkeys('4', handleHotkeyNoRepeat("4"))
useHotkeys('5', handleHotkeyNoRepeat("5"))
useHotkeys('6', handleHotkeyNoRepeat("6"))
useHotkeys('7', handleHotkeyNoRepeat("7"))
useHotkeys('8', handleHotkeyNoRepeat("8"))
useHotkeys('9', handleHotkeyNoRepeat("9"))
useHotkeys('.', handleHotkeyNoRepeat("."))
useHotkeys(['equal', 'enter'], handleHotkeyNoRepeat("="))
useHotkeys('shift+equal', handleHotkeyNoRepeat("+"))
useHotkeys('minus', handleHotkeyNoRepeat("-"))
useHotkeys('shift+8', handleHotkeyNoRepeat("x"))
useHotkeys('/', handleHotkeyNoRepeat("÷"))
useHotkeys('esc', handleHotkeyNoRepeat("esc"))
useHotkeys('shift+9', handleHotkeyNoRepeat("("))
useHotkeys('shift+0', handleHotkeyNoRepeat(")"))
useHotkeys("backspace", handleHotkeyNoRepeat("backspace"))


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