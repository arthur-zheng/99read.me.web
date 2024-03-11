import React from "react";
import { BookSummaryType } from "../libs/types";
import { BookSummaryListItem } from "./bookSummaryListItem";

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
            <BookSummaryListItem bookSummary={bookSummary} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BookSummaryList;
