"use client";

import React, { useState } from "react";
import { Toggle } from "./toggle";

const categories = [
  { tag: "全部", value: "quanbu" },
  { tag: "言情", value: "yanqing" },
  { tag: "武俠", value: "wuxia" },
  { tag: "玄幻", value: "xuanhuan" },
  { tag: "推理", value: "tuili" },
  { tag: "耽美", value: "danmei" },
  { tag: "百合", value: "baihe" },
  { tag: "恐怖", value: "kongbu" },
  { tag: "科幻", value: "kehuan" },
  { tag: "歷史", value: "lishi" },
  { tag: "軍事", value: "junshi" },
  { tag: "生活", value: "shenghuo" },
  { tag: "學習", value: "xuexi" },
  { tag: "文學", value: "wenxue" },
  { tag: "其它", value: "qita" },
];

const ranks = [
  { tag: "全部", value: "quanbu" },
  { tag: "週榜", value: "zhoubang" },
  { tag: "月榜", value: "yuebang" },
  { tag: "最人氣", value: "zuirenqi" },
  { tag: "經典", value: "jingdian" },
];

const Filter = () => {
  const [categorySelection, setCategorySelection] = useState(["quanbu"]);
  const [rankSelection, setRankSelection] = useState("quanbu");

  const toggle = (arr: string[], val: string): string[] => {
    if (arr.includes(val))
      return [
        ...arr.slice(0, arr.indexOf(val)),
        ...arr.slice(arr.indexOf(val) + 1),
      ];
    else return [...arr, val];
  };

  const handleCategoryButtonClick = (value: string) => {
    // If selected quanbu already, replace it with first category
    if (categorySelection.includes("quanbu")) setCategorySelection([value]);
    // No quanbu is selected, but clicking quanbu will cancel all other selected categories
    else if (value === "quanbu") setCategorySelection(["quanbu"]);
    // No quanbu is envolved, simply toggle the ordinary category
    else setCategorySelection(toggle(categorySelection, value));
    // TODO: update route to trigger re-fetch in parent
  };

  const handleRankButtonClick = (value: string) => {
    setRankSelection(value);
    // TODO: update route to trigger re-fetch in parent
  };

  return (
    <div className="border-black border-b-1">
      <div className="flex border-black border-b-2">
        {categories.map((category, index) => (
          <Toggle
            key={index}
            isActive={categorySelection.includes(category.value)}
            onClick={handleCategoryButtonClick}
            tag={category.tag}
            value={category.value}
          />
        ))}
      </div>
      <div className="flex">
        {ranks.map((rank, index) => (
          <Toggle
            key={index}
            isActive={rankSelection === rank.value}
            onClick={handleRankButtonClick}
            tag={rank.tag}
            value={rank.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
