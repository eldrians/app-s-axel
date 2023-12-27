"use client";
import { Header, SidebarDashboard, HeaderDashboard } from "@/components";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Roboto } from "@next/font/google";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname(); // Default value for pathName

  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </head>
      <body className={roboto.className}>
        {pathName.startsWith("/dashboard") ? (
          <div className="flex flex-row w-full h-screen">
            <div className="w-1/5 h-full">
              <SidebarDashboard />
            </div>
            <div className="w-4/5 h-screen overflow-scroll">
              <div className="w-full h-[50px] border-b shadow-lg">
                <HeaderDashboard />
              </div>
              <div>{children}</div>
            </div>
          </div>
        ) : pathName.startsWith("/register") ||
          pathName.startsWith("/login") ? (
          <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-darkGreenApp to-greenApp/50">
            {children}
          </div>
        ) : (
          <div>
            <Header />
            <main>{children}</main>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        )}
      </body>
    </html>
  );
}
