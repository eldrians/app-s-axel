import React from "react";
import Image from "next/image";

const SidebarDashboard = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center bg-greenApp/80">
      <div className="h-1/6 w-full flex justify-center items-center">
        <a href="/">
          <Image
            src="/neo-white-text.png"
            alt="Neo Data - Collection"
            width={75}
            height={75}
            className="w-16 md:w-20 lg:w-24"
          />
        </a>
      </div>
      <div className="h-4/6 w-full p-12 space-y-2">
        <ul>
          <li className="p-2 bg-white rounded hover:font-semibold text-darkApp">
            <a
              href="/dashboard"
              className="flex flex-row gap-2 justify-start items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
              <p>Dashboard</p>
            </a>
          </li>
        </ul>
        <ul>
          <li className="p-2 bg-white rounded hover:font-semibold text-darkApp">
            <a
              href="/dashboard/data"
              className="flex flex-row gap-2 justify-start items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
              <p>Data</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="h-1/6 w-full text-whiteApp flex justify-center items-end p-4">
        &copy; All Rights Reserved
      </div>
    </div>
  );
};

export default SidebarDashboard;
