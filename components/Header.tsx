import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className="w-full py-4
      px-6 
      lg:px-28 
      fixed
    bg-whiteApp/30 shadow flex flex-row justify-center lg:justify-between items-center group"
    >
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center">
        <Image
          src="/neo-black-text.png"
          alt="Neo Data - Collection"
          width={70}
          height={70}
        />
      </div>
      <div className="lg:w-1/2 lg:block hidden">
        <ul className="flex flex-row justify-end items-center gap-6 text-md font-semibold text-darkApp">
          <li>
            <a
              href="#"
              className="py-1 px-6 rounded-full hover:bg-lightGreyApp hover:shadow"
            >
              Option
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-1 px-6 rounded-full hover:bg-lightGreyApp hover:shadow"
            >
              Option
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-1 px-6 rounded-full hover:bg-lightGreyApp hover:shadow"
            >
              Bantuan
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
