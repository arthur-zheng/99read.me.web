import React from "react";
// import Image from "next/image";
// import StarsDisplay from "./starsDisplay";
import Link from "next/link";
import PreviewButton from "../components/preview";
import { BookSummary as BookSummaryType } from "../libs/types";
// import { EyeIcon } from "../libs/icons";

export const BookSummary = async ({
  bookSummary,
}: {
  bookSummary: BookSummaryType;
}) => {
  return (
    <>
      {/* DO NOT DELETE */}
      {/* <Image
            width={213}
            height={276}
            src={bookSummary.cover}
            className="border-black border-l-3 border-r-2 object-cover aspect-[3/4] shrink-0 grow-0 max-auto max-h-full"
            alt={`Book cover image for ${bookSummary.title}`}
          /> */}
      {/* DO NOT DELETE */}
      <div className="lg:pl-6 lg:py-4 flex-auto">
        <div className="flex px-2 items-end">
          <div className="flex flex-auto text-xl pt-2 flex-col">
            <div className="flex flex-wrap items-end gap-1">
              <Link
                className="text-2xl font-semibold hover:underline lg:text-2xl"
                href={`/book/${bookSummary._id}/chapter/${bookSummary.chapters[0].chapterId}`}
              >
                {bookSummary.title}
              </Link>
              <span className="text-base">
                {` (${bookSummary.author},${
                  bookSummary.completed ? " 完結" : " 連載"
                }${bookSummary.chapters.length}章)`}
              </span>
              {/* <EyeIcon />
              {"123"} */}
              <span></span>
              {/* TODO: Rating */}
              {/* <StarsDisplay count={parseInt("5")} /> */}
              {/* TODO: Author page */}
              {/* <Link
                    className="pl-2 hover:underline"
                    href={`/author/${bookSummary.author}`}
                  >{` (${bookSummary.author})`}</Link> */}
            </div>
            <div className="text-base font-bold lg:text-lg py-1 lg:py-2">
              {`#${bookSummary.category}`}{" "}
              {/* {bookSummary.tags.length !== 0 && " | "} */}
              {bookSummary.tags.map((tag, index, arr) => (
                <span className="inline-block py-2" key={index}>
                  {"#"}
                  {tag}
                  {index !== arr.length - 1 && ","}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="p-2 pt-0 text-lg text-justify">
          {bookSummary.summary.length > 80
            ? bookSummary.summary.slice(0, 80) + "..."
            : bookSummary.summary}
          <PreviewButton summary={bookSummary} />
        </p>
      </div>
    </>
  );
};

export default BookSummary;
