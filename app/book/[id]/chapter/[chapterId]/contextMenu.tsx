"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { throttle } from "@/app/libs/utils";

export const ContextMenu = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    // Function to handle click event
    const handleClick = (event: MouseEvent) => {
      // Check if the clicked target is inside 'page-content'
      const isInsidePageContent = (event.target as HTMLElement).closest(
        ".page-content"
      );
      if (isInsidePageContent) {
        setShow((s) => !s);
      }
    };
    const throttledScroll = throttle(handleClick, 1000);
    // Add event listener to the document
    const contentElement = document.getElementsByClassName("page-content");
    if (contentElement.length > 0) {
      (contentElement[0] as HTMLElement).addEventListener(
        "click",
        throttledScroll
      );
    }
    // Cleanup function to remove event listener
    return () => {
      if (contentElement.length > 0)
        (contentElement[0] as HTMLElement).removeEventListener(
          "click",
          throttledScroll
        );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full text-white bg-black p-4 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {children}
    </div>
  );
};
