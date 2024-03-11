import React from "react";
import Link from "next/link";
import { BookSummaryChapterType, BookSummaryType } from "../libs/types";

const ChapterButon = ({
  chapter,
  bookId,
}: {
  bookId: string;
  chapter: BookSummaryChapterType;
}) => {
  return (
    <Link
      className="text-lg sm:text-lg border border-black"
      target="_blank"
      href={`/book/${bookId}/chapter/${chapter.chapterId}`}
    >
      <div className="flex items-center hover:bg-black/10 pl-2 lg:pl-4 py-1 lg:py-3">
        {chapter.chapterTitle}
      </div>
    </Link>
  );
};

export const BookSummary = ({ summary }: { summary: BookSummaryType }) => {
  return (
    <>
      <h2 className="text-center text-3xl font-bold border border-black p-2 lg:p-4 lg:text-4xl">
        {summary.title}
      </h2>
      <div className="text-center font-semi-bold border border-black p-2 lg:p-4 lg:text-2xl">
        作者：{summary.author}
      </div>
      <div className="text-center border border-black border-b-2 p-2 lg:p-4">
        {summary.category}
      </div>
      <Link
        className="items-center hidden sm:flex"
        target="_blank"
        href={`/book/${summary._id}/chapter/${summary.chapters[0].chapterId}`}
      >
        <button className="bg-paperorange grow font-bold text-black text-2xl py-2 lg:py-4 border-black border-b-2">
          開始閱讀
        </button>
      </Link>
      <div className="p-2 border border-black border-x-1 border-y-0 lg:p-4">
        {summary.summary}
      </div>
      <div className="grid border-black border-y-[1px] lg:grid-cols-3">
        {summary.chapters.map((chapter) => (
          <ChapterButon
            key={summary._id}
            bookId={summary._id}
            chapter={chapter}
          />
        ))}
      </div>
    </>
  );
};

export default BookSummary;
