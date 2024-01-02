import React from "react";
// import Image from "next/image";
// import StarsDisplay from "./starsDisplay";
import Link from "next/link";

interface BookSummary {
  _id: string;
  title: string;
  summary: string;
  tags: string[];
  author: string;
  category: string;
  chapters: {
    title: string;
    chapterId: string;
    content: string[];
  }[];
  completed: boolean;
  // rating: string;
}

interface BookListProps {
  bookSummaries: BookSummary[];
}

const BookSummaryList: React.FC<BookListProps> = ({ bookSummaries }) => {
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
          <div className="pl-6 py-4 flex-auto">
            <div className="flex px-2 items-end">
              <div className="flex flex-auto text-xl pt-2 flex-col">
                <div>
                  <Link
                    className="text-3xl font-semibold hover:underline"
                    href={`/book/${bookSummary._id}`}
                  >
                    {bookSummary.title}
                  </Link>
                  <span>{bookSummary.completed ? "（完結）" : "（連載）"}</span>
                  <span></span>
                  {/* TODO: Author page */}
                  {/* <Link
                    className="pl-2 hover:underline"
                    href={`/author/${bookSummary.author}`}
                  >{` (${bookSummary.author})`}</Link> */}
                </div>
                <div>
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
              {bookSummary.summary}
              <Link
                className="underline ml-2 border-black border-1"
                target="_blank"
                href={`/book/${bookSummary._id}/chapter/${bookSummary.chapters[0].chapterId}`}
              >
                開始閱讀↗
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookSummaryList;
