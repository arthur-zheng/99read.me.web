import React from "react";
import { CATEGORIES, RANKS } from "../libs/constants";
import Link from "next/link";

export const ServerFilters = ({ category }: { category: string }) => {
  return (
    <div className="border-black border-b-1">
      <div className="flex flex-wrap border-black">
        {CATEGORIES.map((cat, index) => {
          const classes =
            "px-4 py-2" +
            (cat.value === category
              ? " bg-black text-white"
              : " hover:bg-black hover:text-white");
          return (
            <Link
              key={index}
              className={classes}
              href={`?category=${cat.value}`}
            >
              {cat.tag}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
