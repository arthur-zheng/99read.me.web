"use client";

import React, { useState, useEffect } from "react";
import { BookSummary } from "../libs/types";
import Link from "next/link";

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      stroke="#ffffff"
      viewBox="0 0 24 24"
      className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
};

const ChapterButon = ({
  bookId,
  chapterId,
  chapterTitle,
}: {
  bookId: string;
  chapterId: string;
  chapterTitle: string;
}) => {
  return (
    <Link
      className="text-lg sm:text-lg border border-black"
      target="_blank"
      href={`/book/${bookId}/chapter/${chapterId}`}
    >
      <div className="flex items-center hover:bg-black/10 pl-2 lg:pl-4 py-1 lg:py-3">
        {chapterTitle}
      </div>
    </Link>
  );
};

const FlowtingButtons = ({
  bookId,
  chapterId,
}: {
  bookId: string;
  chapterId: string;
}) => {
  return (
    <Link
      className="items-center fixed bottom-0 w-full sm:hidden"
      target="_blank"
      href={`/book/${bookId}/chapter/${chapterId}`}
    >
      <button className="bg-paperorange w-full font-bold text-black text-2xl py-2 lg:py-4 border-black border-t-2">
        開始閱讀
      </button>
    </Link>
  );
};
const PreviewButton = ({ summary }: { summary: BookSummary }) => {
  const [modalShown, setModalShown] = useState(false);

  useEffect(() => {
    if (modalShown) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [modalShown]);

  // This is especially helpful when we remove target="_blank"
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const toggleModal = () => {
    setModalShown(!modalShown);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalShown(false);
    document.body.style.overflow = "auto"; // Enable background scrolling
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.classList.contains("modal-overlay")) {
      closeModal(); // Close the modal if the click is on the background
    }
  };

  return (
    <>
      {modalShown && (
        <div
          className="modal-overlay fixed inset-0 bg-black/60 z-50 pb-16 lg:py-8 overflow-y-scroll "
          onClick={handleOverlayClick}
        >
          <FlowtingButtons
            bookId={summary._id}
            chapterId={summary.chapters[0].chapterId}
          />
          <div className=" bg-paperpink w-full max-w-6xl mx-auto border-black border-2 lg:border-12">
            <div className="modal">
              <a
                className="fixed top-2 right-2 bg-black p-1 lg:top-4 lg:right-2 cursor-pointer lg:p-2"
                onClick={toggleModal}
              >
                <CloseIcon />
              </a>
              <div className="modal-content flex flex-wrap flex-col">
                <h2 className="text-center text-3xl font-bold border border-black p-2 lg:p-4 lg:text-4xl">
                  {summary.title}
                </h2>
                <div className="text-center font-semi-bold border border-black p-2 lg:p-4 lg:text-2xl">
                  作者：{summary.author}
                </div>
                <div className="text-center border border-black border-b-2 p-2 lg:p-4">
                  {summary.category}
                </div>
                <Link
                  className="items-center hidden sm:flex"
                  target="_blank"
                  href={`/book/${summary._id}/chapter/${summary.chapters[0].chapterId}`}
                >
                  <button className="bg-paperorange grow font-bold text-black text-2xl py-2 lg:py-4 border-black border-b-2">
                    開始閱讀
                  </button>
                </Link>
                <div className="p-2 border border-black border-x-1 border-y-0 lg:p-4">
                  {summary.summary}
                </div>
                <div className="grid border-black border-y-[1px] lg:grid-cols-3">
                  {summary.chapters.map((c, index) => (
                    <ChapterButon
                      key={index}
                      chapterTitle={c.chapterTitle}
                      chapterId={c.chapterId}
                      bookId={summary._id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        className="underline ml-2 border-black border-1 font-bold"
        onClick={toggleModal}
      >
        詳情
      </button>
    </>
  );
};

export default PreviewButton;
