import React from "react";
import { BookSummary as BookSummaryType } from "../libs/types";
import { BookSummary as BookSummaryComp } from "./bookSummary";

const BookSummaryList = async ({
  bookSummaries,
}: {
  bookSummaries: BookSummaryType[];
}) => {
  return (
    <>
      <div>
        {bookSummaries.map((bookSummary, index) => (
          <div
            key={index}
            className="flex items-stretch border-t-2 border-black"
          >
            <BookSummaryComp bookSummary={bookSummary} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BookSummaryList;
