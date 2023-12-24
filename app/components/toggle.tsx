"use client";

import React, { useState, useEffect } from "react";

interface ToggleProps {
  value: string;
  tag: string;
  isActive: boolean;
  onClick: Function;
}

export const Toggle: React.FC<ToggleProps> = ({
  tag,
  value,
  isActive,
  onClick,
}) => {
  const baseCss = "py-3 px-6 border-r-[1px] border-black font-semibold";

  const [isHover, setIsHover] = useState(false);
  const [css, setCss] = useState(baseCss);

  // This is to make sure when uncheck a item without pointer leaves, the button is in uncheck state.
  useEffect(() => {
    let newCss = baseCss;
    if (!isActive && isHover) newCss += " hover:bg-black hover:text-white";
    if (isActive) {
      newCss += " text-white bg-black";
    } else newCss += " text-black bg-transparent";
    setCss(newCss);
  }, [isActive, isHover]);

  return (
    <button
      className={css}
      onClick={() => {
        setIsHover(false);
        onClick(value);
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {tag}
    </button>
  );
};
