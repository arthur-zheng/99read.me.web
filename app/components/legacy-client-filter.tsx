"use client";

import React, { useState } from "react";
import { Toggle } from "./legacy-client-toggle";
import { CATEGORIES, RANKS } from "../libs/constants";

const Filter = () => {
  const [categorySelection, setCategorySelection] = useState(["quanbu"]);
  // for sorting filter
  // const [rankSelection, setRankSelection] = useState("quanbu");

  // Legacy logic for multi-selected category feature:
  // const toggle = (arr: string[], val: string): string[] => {
  //   if (arr.includes(val))
  //     return [
  //       ...arr.slice(0, arr.indexOf(val)),
  //       ...arr.slice(arr.indexOf(val) + 1),
  //     ];
  //   else return [...arr, val];
  // };

  const handleCategoryButtonClick = (value: string) => {
    // Using simplified logic
    setCategorySelection([value]);
    // Legacy logic for multi-selected category feature:
    // If selected quanbu already, replace it with first category
    // if (categorySelection.includes("quanbu")) setCategorySelection([value]);
    // No quanbu is selected, but clicking quanbu will cancel all other selected categories
    // else if (value === "quanbu") setCategorySelection(["quanbu"]);
    // No quanbu is envolved, simply toggle the ordinary category
    // else setCategorySelection(toggle(categorySelection, value));
    // TODO: update route to trigger re-fetch in parent
  };

  // for sorting filter
  // const handleRankButtonClick = (value: string) => {
  //   setRankSelection(value);
  //   // TODO: update route to trigger re-fetch in parent
  // };

  return (
    <div className="border-black border-b-1">
      <div className="flex flex-wrap border-black">
        {CATEGORIES.map((category, index) => (
          <Toggle
            key={index}
            isActive={categorySelection.includes(category.value)}
            onClick={handleCategoryButtonClick}
            tag={category.tag}
            value={category.value}
          />
        ))}
      </div>
      {/* <div className="flex">
        {RANKS.map((rank, index) => (
          <Toggle
            key={index}
            isActive={rankSelection === rank.value}
            onClick={handleRankButtonClick}
            tag={rank.tag}
            value={rank.value}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Filter;
