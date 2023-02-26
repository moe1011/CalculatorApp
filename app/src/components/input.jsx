import React from "react";
import { CalcButton } from "./calcbutton";

export function Input({displayValues, setDisplayValues, setIsCalc}){
    return(
        <div className="px-2">
          <CalcButton value={"AC"} theme={"function"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"("} theme={"function"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={")"} theme={"function"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"÷"} theme={"operation"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>

          <CalcButton value={"7"} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"8"} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"9"} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"x"} theme={"operation"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>

          <CalcButton value={"4"} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"5"} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"6"} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"-"} theme={"operation"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          
          <CalcButton value={"1"} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"2"} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"3"} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"+"} theme={"operation"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>

          <CalcButton value={"0"} theme={"number"} long={true} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"."} theme={"number"} displayValues={displayValues} setDisplayValues={setDisplayValues}/>
          <CalcButton value={"="} theme={"operation"} displayValues={displayValues} setDisplayValues={setDisplayValues} setIsCalc={setIsCalc}/>

        </div>
    );
}