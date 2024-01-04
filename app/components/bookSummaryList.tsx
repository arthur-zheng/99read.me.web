import React from "react";
import { fetchJson } from "../libs/fetchJson";
import { BookSummary as BookSummaryType } from "../libs/types";
import { BookSummary as BookSummaryComp } from "./bookSummary";
import { BooksPagination } from "./booksPagination";

const BookSummaryList = async () => {
  const bookSummaries: BookSummaryType[] = await fetchJson("/");

  // listening to url change
  return (
    <>
      <div>
        {bookSummaries.map((bookSummary, index) => (
          <div
            key={index}
            className="flex items-stretch border-t-2 border-black last:border-b-2 pr-6"
          >
            <BookSummaryComp bookSummary={bookSummary} />
          </div>
        ))}
      </div>
      <div>{/* <BooksPagination /> */}</div>
    </>
  );
};

export default BookSummaryList;
