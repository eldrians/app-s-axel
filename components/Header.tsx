import React from "react";

const Header = () => {
  return (
    <header
      className="w-full py-4 px-28 fixed
    bg-whiteApp shadow flex flex-row justify-between items-center group"
    >
      <div className="w-1/2">
        <h1 className="font-extrabold text-2xl text-darkApp">Skripsi App</h1>
      </div>
      <div className="w-1/2">
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
              Option
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
