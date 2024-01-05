"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { BookSummary as BookSummaryType } from "../../../../libs/types";

export const BookPagination = ({
  bookSummary,
  currentPage,
  isLast,
}: {
  bookSummary: BookSummaryType;
  currentPage: number;
  isLast: boolean;
}) => {
  const router = useRouter();
  const totalPages = bookSummary.chapters.length;

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      const previousChapterId = bookSummary.chapters[currentPage - 1].chapterId;
      router.push(`/book/${bookSummary._id}/chapter/${previousChapterId}`);
    }
  };

  const goToNextPage = () => {
    if (!isLast) {
      const nextChapterId = bookSummary.chapters[currentPage + 1].chapterId;
      router.push(`/book/${bookSummary._id}/chapter/${nextChapterId}`);
    }
  };
  return (
    <div className="flex flex-wrap justify-between items-center border-black border-y-2">
      <button
        className="bg-black text-paperpink px-8 py-3"
        onClick={goToPreviousPage}
        disabled={currentPage === 0}
      >
        上一頁
      </button>
      <span>
        第 {currentPage + 1} / {totalPages} 頁
      </span>
      <button
        className="bg-black text-paperpink px-8 py-3"
        onClick={goToNextPage}
        disabled={isLast === true}
      >
        {isLast ? "本書完" : "下一頁"}
      </button>
    </div>
  );
};
