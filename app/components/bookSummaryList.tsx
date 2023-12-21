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
        <div key={index} className="flex">
          <Image
            width={400}
            height={337}
            src={bookSummary.cover}
            alt={`Book cover for ${bookSummary.title}`}
          />
          <div className="pl-6 py-4">
            <div className="flex px-2">
              <div className="flex-auto text-lg">
                <span className="font-semibold">{bookSummary.title}</span>
                <span className="">{`(${bookSummary.author})`}</span>
              </div>
              {bookSummary.tags}
            </div>
            <p className="p-2">{bookSummary.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookSummaryList;
