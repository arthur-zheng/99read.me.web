import React from "react";

const categories = [
  "全部",
  "言情",
  "武俠",
  "玄幻",
  "推理",
  "耽美",
  "武侠",
  "百合",
  "恐怖",
  "科幻",
  "歷史",
  "軍事",
  "生活",
  "學習",
  "文學",
  "其它",
];

const ranks = ["全部", "週榜", "月榜", "最人氣", "經典"];

const Filter = () => {
  return (
    <div className="border-black border-b-1">
      <div className="flex border-black border-b-2">
        {categories.map((category, index) => (
          <button
            className="py-3 px-4 border-r-[1px] border-black font-semibold hover:bg-black hover:text-white"
            key={index}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex">
        {ranks.map((rank, index) => (
          <button
            className="py-3 px-6 border-r-[1px] border-black font-semibold hover:bg-black hover:text-white"
            key={index}
          >
            {rank}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
