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
    <>
      <div className="flex">
        {categories.map((category, index) => (
          <button className="p-2" key={index}>
            {category}
          </button>
        ))}
      </div>
      <div className="flex">
        {ranks.map((rank, index) => (
          <button className="p-2" key={index}>
            {rank}
          </button>
        ))}
      </div>
    </>
  );
};

export default Filter;
