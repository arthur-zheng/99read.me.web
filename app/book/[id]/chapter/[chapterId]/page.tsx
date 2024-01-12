import React from "react";
import { fetchJson } from "@/app/libs/fetchJson";
import { BookSummary } from "@/app/libs/types";
import { BookPagination } from "@/app/book/[id]/chapter/[chapterId]/BookPagination";
import { ContextMenu } from "./contextMenu";

interface Chapter {
  id: string;
  content: [string];
  chapterTitle: string;
  chapterNumber: number;
  isLast?: boolean;
}

const ChapterPage = async ({
  params: { id, chapterId },
}: {
  params: { id: string; chapterId: string };
}) => {
  const chapter = await fetchJson<Chapter>(`/book/${id}/chapter/${chapterId}`);
  const bookSummary = await fetchJson<BookSummary>(`/book/${id}`);

  return (
    <>
      <div className="flex flex-col items-center page-content">
        <div className="max-w-5xl py-4">
          <div className="text-center text-2xl font-bold pb-6">
            {`《${bookSummary.title}》-`} {chapter.chapterTitle}
          </div>
          <div className="text-xl px-4">
            {chapter.content.map((paragraphTxt: string, index: number) => (
              <p className="pb-6 text-justify" key={index}>
                {paragraphTxt}
              </p>
            ))}
          </div>
        </div>
      </div>
      <ContextMenu>
        <BookPagination
          bookSummary={bookSummary}
          currentPage={chapter.chapterNumber}
          isLast={chapter.isLast === true}
        />
      </ContextMenu>
      <BookPagination
        bookSummary={bookSummary}
        currentPage={chapter.chapterNumber}
        isLast={chapter.isLast === true}
      />
    </>
  );
};

export default ChapterPage;
