import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative mx-auto">
      <div className="mx-auto flex xs:items-center">
        <div className="flex w-100">
          <h1 className="text-2xl font-bold">
            <Link href="/">久久讀書</Link>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
