import React, {useEffect, useRef, useState} from "react";
import "../app.css"

export function Display({displayValues}){

    const displayRef = useRef();1

    useEffect(()=>{

        displayRef.current.scrollLeft = displayRef.current.scrollWidth;
        console.log("in the use effect")

    }, [displayValues]);

    return(
        <span ref={displayRef} id="display" className="flex bg-blue-900 w-screen h-20 my-3 px-3 pb-0 items-center border-t-black border-b-black border-t-2 border-b-2
        overflow-x-scroll scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-600 whitespace-nowrap
        hover:scrollbar-thumb-slate-400/80">{displayValues}<span className={"CursorPulse h-10 ml-1 min-w-[0.25rem] bg-white"}></span></span>
    );
}