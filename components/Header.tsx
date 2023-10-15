"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [inRangeScroll, setInRangeScroll] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);

    if (currentScrollPos >= 100) {
      setInRangeScroll(true);
    } else {
      setInRangeScroll(false);
    }
  };

  let theLogo = null;

  if (inRangeScroll) {
    theLogo = (
      <Image
        src="/neo-black-text.png"
        alt="Neo Data - Collection"
        width={75}
        height={75}
        className="w-16 md:w-20 lg:w-16"
      />
    );
  } else {
    theLogo = (
      <Image
        src="/light logo.png"
        alt="Neo Data - Collection"
        width={75}
        height={75}
        className="w-16 md:w-20 lg:w-16"
      />
    );
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={` z-50 fixed w-full h-fit py-4 transform duration-300 px-6 lg:px-28 2xl:px-72 flex flex-row justify-center lg:justify-between items-center group ${
        visible ? "-top-[1px]" : "-top-[70px] "
      } ${inRangeScroll ? "bg-whiteApp" : "bg-transparent"}
        `}
    >
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center">
        <a href="/">{theLogo}</a>
      </div>
      <div className="lg:w-1/2 lg:block hidden">
        <ul
          className={`flex flex-row justify-end items-center gap-6 text-md font-semibold  ${
            inRangeScroll ? "text-darkApp" : "text-darkGreenApp"
          }`}
        >
          <li>
            <a
              href="#main-form"
              className="py-2 px-1 hover:border-b hover:border-white hover:shadow"
            >
              Isi Prestasi
            </a>
          </li>
          <li>
            <a
              href="/dokumentasi"
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
