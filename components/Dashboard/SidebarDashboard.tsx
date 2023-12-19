"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDENAV_ITEMS } from "@/constants";
import { SideNavItem } from "@/types";

const SidebarDashboard = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center bg-greenApp/80">
      <div className="h-1/6 w-full flex justify-center items-center">
        <Link href="/">
          <Image
            src="/neo-white-text.png"
            alt="Neo Data - Collection"
            width={75}
            height={75}
            className="w-16 md:w-20 lg:w-24"
          />
        </Link>
      </div>
      <div className="h-4/6 w-full p-12 space-y-2">
        {SIDENAV_ITEMS.map((item, idx) => {
          return <MenuItem key={idx} item={item} />;
        })}
      </div>
      <div className="h-1/6 w-full text-whiteApp flex justify-center items-end p-4">
        &copy; All Rights Reserved
      </div>
    </div>
  );
};

export default SidebarDashboard;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`w-full flex flex-row items-center p-2 justify-between hover:font-semibold rounded ${
              pathname.includes(item.path) ? "bg-white" : ""
            }`}
          >
            <div
              className={`flex flex-row justify-start items-center gap-2 ${
                pathname.includes(item.path) ? "text-darkApp" : "text-white"
              }`}
            >
              {item.icon}
              <p>{item.title}</p>
            </div>

            <div
              className={`${subMenuOpen ? "rotate-90 " : ""} flex text-darkApp`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-10 flex flex-col space-y-2 text-sm text-zinc-100">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? "font-bold underline" : ""
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`p-2 ${
            item.path === pathname ? "bg-white text-darkApp" : "text-white"
          }  rounded hover:font-semibold flex flex-row gap-2 justify-start items-center`}
        >
          {item.icon}
          <p>{item.title}</p>
        </Link>
      )}
    </div>
  );
};
