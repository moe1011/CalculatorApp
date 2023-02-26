import React from "react";

export function Display({displayValues}){
    return(
        <div className="flex bg-emerald-900 w-screen h-20 my-5 px-3 pb-0 items-center 
        overflow-x-scroll scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-600
        hover:scrollbar-thumb-slate-400/80">{displayValues}</div>
    );
}