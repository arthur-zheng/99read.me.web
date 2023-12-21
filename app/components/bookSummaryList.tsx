import React from "react";
import Image from "next/image";

interface BookSummary {
  title: string;
  author: string;
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
          className="flex border-t-2 border-black last:border-b-2"
        >
          <Image
            width={430}
            height={337}
            src={bookSummary.cover}
            className="border-black border-l-3 border-r-2"
            alt={`Book cover for ${bookSummary.title}`}
          />
          <div className="pl-6 py-4 flex-auto">
            <div className="flex px-2">
              <div className="flex-auto text-xl">
                <span className="font-semibold">{bookSummary.title}</span>
                <span className="pl-2">{`(${bookSummary.author})`}</span>
              </div>
              {bookSummary.tags.map((tag, index) => (
                <span className="font-bold inline-block pl-2" key={index}>
                  {tag}
                </span>
              ))}
            </div>
            <p className="p-2 text-lg">{bookSummary.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookSummaryList;
