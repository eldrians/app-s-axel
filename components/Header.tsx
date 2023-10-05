import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className="w-full pt-8 pb-4
      px-6 
      lg:px-28
      2xl:px-72 
      fixed
    bg-transparent flex flex-row justify-center lg:justify-between items-center group"
    >
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center">
        <Image
          src="/neo-white-text.png"
          alt="Neo Data - Collection"
          width={75}
          height={75}
        />
      </div>
      <div className="lg:w-1/2 lg:block hidden">
        <ul className="flex flex-row justify-end items-center gap-6 text-md font-semibold text-whiteApp">
          {/* <li>
            <a
              href="#"
              className="py-1 px-6 rounded-full hover:bg-darkApp hover:shadow"
            >
              Option
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-1 px-6 rounded-full hover:bg-darkApp hover:shadow"
            >
              Option
            </a>
          </li> */}
          <li>
            <a
              href="#about"
              className="py-2 px-1 hover:border-b hover:border-white hover:shadow"
            >
              Cara Pakai?
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
