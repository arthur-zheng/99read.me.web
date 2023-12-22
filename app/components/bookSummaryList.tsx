import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BookSummary {
  id: string;
  title: string;
  author: string;
  authorId: string;
  cover: string;
  summary: string;
  tags: string[];
  uploader: string;
  uploadDate: string;
  publishedDate: string;
  lastUpdateDate: string;
  liked: string;
}

interface BookListProps {
  bookSummaries: BookSummary[];
}

const BookSummaryList: React.FC<BookListProps> = ({ bookSummaries }) => {
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
              <div className="flex-auto text-xl py-2">
                <Link
                  className="text-2xl font-semibold hover:underline"
                  href={`/book/${bookSummary.id}`}
                >
                  {bookSummary.title}
                </Link>
                <Link
                  className="pl-2 hover:underline"
                  href={`/author/${bookSummary.authorId}`}
                >{` (${bookSummary.author})`}</Link>
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
                href={`/book/${bookSummary.id}`}
              >
                詳情
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookSummaryList;
