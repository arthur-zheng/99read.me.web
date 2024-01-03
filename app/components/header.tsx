import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="relative mx-auto border-black border-b-2">
      <div className="flex items-stretch">
        <div className="flex grow pl-4 py-3 border-black border-r-2">
          <h1 className="text-2xl font-bold hover:underline">
            <Link href="/" className="flex gap-1">
              <Image
                width={32}
                height={32}
                src="/logo.jpg"
                alt="Site logo of a racoon"
              />
              久久讀書
            </Link>
          </h1>
        </div>
        <button className="grow-0 px-20 border-black border-r-2 hover:bg-black hover:text-white">
          搜尋
        </button>
        <button className="grow-0 px-20 border-black border-r-2 hover:bg-black hover:text-white">
          登錄
        </button>
        <button className="px-5 bg-black text-white hover:bg-black hover:text-white">
          繁
        </button>
        <button className="border-black border-l-2 px-5 hover:bg-black hover:text-white">
          简
        </button>
      </div>
    </header>
  );
};

export default Header;
