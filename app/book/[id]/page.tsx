import React from "react";
import { fetchJson } from "@/app/libs/fetchJson";
import { BookSummaryType, GenerateMetadataPropType } from "@/app/libs/types";
import { BookSummary } from "@/app/components/bookSummary";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: GenerateMetadataPropType): Promise<Metadata> {
  // read route params
  const id = params.id;
  const bookSummary: BookSummaryType = await fetchJson(`/book/${id}`);
  return {
    title: `《${bookSummary.title}》作者：${bookSummary.author}，全文在线阅读，久久读书`,
  };
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const bookSummary: BookSummaryType = await fetchJson(`/book/${id}`);
  return (
    <div>
      <BookSummary summary={bookSummary} />
    </div>
  );
}
