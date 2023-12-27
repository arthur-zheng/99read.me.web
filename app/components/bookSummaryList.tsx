import React from "react";
// import Image from "next/image";
import Link from "next/link";
import StarsDisplay from "./starsDisplay";

interface BookSummary {
  id: string;
  title: string;
  author: {
    name: string;
    id: string;
  };
  cover: string;
  summary: string;
  tags: string[];
  uploader: string;
  uploadDate: string;
  publishedDate: string;
  lastUpdateDate: string;
  rating: string;
}

interface BookListProps {
  bookSummaries: BookSummary[];
}

// fetch based on url

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
              <div className="flex flex-auto text-xl py-2 items-center">
                <Link
                  className="text-2xl font-semibold hover:underline"
                  href={`/book/${bookSummary.id}`}
                >
                  {bookSummary.title}
                </Link>
                <Link
                  className="pl-2 hover:underline"
                  href={`/author/${bookSummary.author.id}`}
                >{` (${bookSummary.author.name})`}</Link>
                <StarsDisplay count={parseInt(bookSummary.rating)} />
              </div>
              {bookSummary.tags.map((tag, index, arr) => (
                <span className="font-bold inline-block pl-2 py-2" key={index}>
                  {tag}
                  {index !== arr.length - 1 && ","}
                </span>
              ))}
            </div>
            <p className="p-2 text-lg text-justify">
              {bookSummary.summary}
              <Link
                className="underline ml-2 border-black border-1"
                target="_blank"
                href={`/book/${bookSummary.id}`}
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
