import React from "react";

// fetch based on url
async function getData(url: string) {
  const res = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const ChapterPage = async ({
  params: { id, chapterId },
}: {
  params: { id: string; chapterId: string };
}) => {
  const chapter = await getData(
    `http://localhost:5001/book/${id}/chapter/${chapterId}`
  );

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
