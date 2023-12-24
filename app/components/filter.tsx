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

  const handleCategoryButtonClick = (value: string) => {
    const index = categorySelection.indexOf(value);
    if (index === -1) {
      setCategorySelection([...categorySelection, value]);
    } else {
      setCategorySelection([
        ...categorySelection.slice(0, index),
        ...categorySelection.slice(index + 1),
      ]);
    }
    // TODO: update route
  };

  const handleRankButtonClick = (value: string) => {
    setRankSelection(value);
    // TODO: update route
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
