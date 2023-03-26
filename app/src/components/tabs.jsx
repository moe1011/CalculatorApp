import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

export function Tabs({ savedCalc, setSavedCalc }) {
  function handleSave() {
    const blob = new Blob([savedCalc], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "calculation.txt";
    link.href = url;
    link.click();
  }

  function handleClearSave() {
    setSavedCalc("");
  }

  function loadHelp(title, disc) {
    return (
      <p className="mb-3">
        {" "}
        <span className="bg-blue-400 rounded-l-md min-w-[3rem] max-w-sm px-2 font-bold inline-block text-center">
          {title}
        </span>
        <span className="bg-blue-500 px-2 text-center rounded-r-md inline-block min-w-[15rem] max-w-sm">
          {disc}
        </span>
      </p>
    );
  }

  return (
    <>
      <div className="flex text-lg text-black mt-2  ">
        <Popover>
          <PopoverTrigger>
            <button className="mx-2 bg-white px-2 rounded-md hover:bg-gray-200 active:bg-gray-300 outline-none">
              Help
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Documentation</PopoverHeader>
            <PopoverBody className="text-white">
              {loadHelp("AC", "Clears the input values")}
              {loadHelp("÷", "Division Operator")}
              {loadHelp("x", "Multiplication Operator")}
              {loadHelp("-", "Subtraction Operator")}
              {loadHelp("+", "Addition Operators")}
              {loadHelp("=", "Sum Operator")}
              {loadHelp("Save", "Saves all calculations to a text file")}
              {loadHelp("Clear Save", "Clears all previous calculations")}
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <button
          onClick={handleSave}
          className="bg-white px-2 rounded-md hover:bg-gray-200 active:bg-gray-300 outline-none mr-2"
        >
          Save
        </button>

        <button
          onClick={handleClearSave}
          className="bg-red-200 px-2 rounded-md hover:bg-red-300 active:bg-red-400 outline-none"
        >
          Clear Save
        </button>
      </div>
    </>
  );
}
