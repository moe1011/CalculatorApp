import React from "react";
import { useEffect, useState } from "react";

export function CalcButton({value, theme, long, displayValues, setDisplayValues, setIsCalc}){
    const [userTheme, setUserTheme] = useState("");

    useEffect(()=>{
        if(theme == "function"){
            setUserTheme("bg-blue-800 hover:bg-blue-900")

        } else if(theme == "operation"){
            setUserTheme("bg-blue-600 hover:bg-blue-700")

        } else if(theme == "number"){
            setUserTheme("bg-blue-400 hover:bg-blue-500")

        }

    }, [])

    function handleClick(){
        if(value == "AC"){
            setDisplayValues("");
        }
        else if(value != "=" ){
            if(displayValues !== ""){
                setDisplayValues((prev) => { return(prev + value)});
            } else{
                setDisplayValues(value);
            }
        }
        else if(value == "=" && setIsCalc != undefined){
            setIsCalc(true);
        }
    }


    return(
        <button className={(long ? "w-[12rem]" : "w-[6rem]") + " h-[6rem] text-4xl border border-black outline-none " + userTheme}
        onClick={handleClick} >{value}</button>
    );
}