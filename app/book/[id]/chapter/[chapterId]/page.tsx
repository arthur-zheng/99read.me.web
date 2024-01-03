import React from "react";
import { fetchJson } from "../../../../libs/fetchJson";

interface Chapter {
  id: string;
  content: [string];
  chapterTitle: string;
}

const ChapterPage = async ({
  params: { id, chapterId },
}: {
  params: { id: string; chapterId: string };
}) => {
  const chapter = await fetchJson<Chapter>(`/book/${id}/chapter/${chapterId}`);

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-5xl px-4 pt-10">
        <div className="text-center text-4xl font-bold pb-6">
          {chapter.chapterTitle}
        </div>
        <div className="text-xl">
          {chapter.content.map((paragraphTxt: string, index: number) => (
            <p className="pb-6" key={index}>
              {paragraphTxt}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterPage;
