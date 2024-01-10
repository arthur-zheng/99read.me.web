import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="relative mx-auto border-black border-b-2">
      <div className="flex items-stretch">
        <div className="flex grow pl-4 py-3 border-black">
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
        {/* <button className="px-4 border-black border-r-2 hover:bg-black hover:text-white">
          搜尋
        </button>
        <button className="px-4 border-black border-r-2 hover:bg-black hover:text-white">
          登錄
        </button>
        <button className="px-4 bg-black text-white hover:bg-black hover:text-white">
          繁
        </button>
        <button className="px-2 border-black border-l-2 hover:bg-black hover:text-white">
          简
        </button> */}
      </div>
    </header>
  );
};

export default Header;
