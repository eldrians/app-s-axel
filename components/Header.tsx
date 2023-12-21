"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const DashboardMenu = () => {
  let checkDosen = true;

  if (checkDosen) {
    return (
      <li>
        <a
          href="/dashboard"
          className={` py-2 px-1 hover:border-b-2 hover:border-greenApp`}
        >
          Dashboard
        </a>
      </li>
    );
  } else {
    return null;
  }
};
function LoginMenu() {
  let checkLogin = Cookies.get("loggedin");

  if (checkLogin == "success") {
    return (
      <li>
        <a href="/">
          <Button
            className="text-red-600 border border-red-600 bg-transparent hover:bg-red-600 hover:text-white"
            size="md"
            onClick={() => {
              Cookies.remove("loggedin");
              useRouter().push("/login");
            }}
          >
            Logout
          </Button>
        </a>
      </li>
    );
  } else {
    return (
      <li>
        <a href="/login">
          <Button
            className="text-greenApp border border-greenApp bg-transparent hover:bg-darkGreenApp hover:text-white"
            size="md"
          >
            Login
          </Button>
        </a>
      </li>
    );
  }
}
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
              href="/"
              className={` py-2 px-1 hover:border-b-2 hover:border-greenApp`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/dokumentasi"
              className={` py-2 px-1 hover:border-b-2 hover:border-greenApp`}
            >
              Dokumentasi
            </a>
          </li>
          {DashboardMenu()}
          {LoginMenu()}
        </ul>
      </div>
    </header>
  );
};

export default Header;
