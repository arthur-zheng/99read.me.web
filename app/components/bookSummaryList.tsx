import React from "react";
// import Image from "next/image";
// import StarsDisplay from "./starsDisplay";
import Link from "next/link";
import { fetchJson } from "../libs/fetchJson";
import PreviewButton from "../components/preview";
import { BookSummary } from "../libs/types";

const BookSummaryList = async () => {
  const bookSummaries: BookSummary[] = await fetchJson("/");
  // listening to url change
  return (
    <div>
      {bookSummaries.map((bookSummary, index) => (
        <div
          key={index}
          className="flex items-stretch border-t-2 border-black last:border-b-2 pr-6"
        >
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
                <div>
                  <Link
                    className="text-xl font-semibold hover:underline lg:text-xl"
                    href={`/book/${bookSummary._id}/chapter/${bookSummary.chapters[0].chapterId}`}
                  >
                    {bookSummary.title}
                  </Link>
                  <span>{bookSummary.completed ? "（完結）" : "（連載）"}</span>
                  {/* TODO: Author page */}
                  {/* <Link
                    className="pl-2 hover:underline"
                    href={`/author/${bookSummary.author}`}
                  >{` (${bookSummary.author})`}</Link> */}
                </div>
                <div className="font-bold text-base lg:text-lg py-1 lg:py-2">
                  {bookSummary.chapters.length}
                  {"章 "}
                  {/* TODO: Rating */}
                  {/* <StarsDisplay count={parseInt("5")} /> */}
                  {bookSummary.category}{" "}
                  {bookSummary.tags.length !== 0 && " | "}
                  {bookSummary.tags.map((tag, index, arr) => (
                    <span className="inline-block py-2" key={index}>
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
        </div>
      ))}
    </div>
  );
};

export default BookSummaryList;
