import React from "react";
import { fetchJson } from "@/app/libs/fetchJson";
import { BookSummaryType } from "@/app/libs/types";
import { BookSummary } from "@/app/components/bookSummary";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const bookSummary: BookSummaryType = await fetchJson(`/book/${id}`);
  return (
    <div>
      <BookSummary summary={bookSummary} />
    </div>
  );
};

export default page;
