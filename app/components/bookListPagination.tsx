import React from "react";
import Link from "next/link";

export const BookListPagination = ({
  limit,
  skip,
  category,
  isEnd,
}: {
  limit: number;
  skip: number;
  category: string;
  isEnd: boolean;
}) => {
  return (
    <div className="flex flex-wrap justify-between items-center border-black border-y-2">
      {skip !== 0 ? (
        <Link
          className="bg-black text-paperpink px-12 py-3"
          href={`?limit=${limit}&skip=${Math.max(
            0,
            skip - limit
          )}&category=${category}`}
        >
          上一頁
        </Link>
      ) : (
        <div className="bg-black/50 text-paperpink px-8 py-3 border-black border-l-2">
          已是第一頁
        </div>
      )}
      <span>第 {Math.floor(skip / limit) + 1} 頁</span>
      {!isEnd ? (
        <Link
          className="bg-black text-paperpink px-12 py-3"
          href={`?limit=${limit}&skip=${skip + limit}&category=${category}`}
        >
          下一頁
        </Link>
      ) : (
        <div className="bg-black/50 text-paperpink px-8 py-3 border-black border-l-2">
          已是最後一頁
        </div>
      )}
    </div>
  );
};
