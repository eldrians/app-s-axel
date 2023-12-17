"use client";
import { Header, SidebarDashboard } from "@/components";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Roboto } from "@next/font/google";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
export const metadata = {
  title: "Neo Data Collection",
  description: "On-Demand Service Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </head>
      <body className={roboto.className}>
        {pathName !== "/dashboard" ? (
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
        ) : (
          <div className="flex flex-row w-full h-screen">
            <div className="w-1/5 h-full">
              <SidebarDashboard />
            </div>
            <div className="w-4/5 bg-blue-400 h-full"></div>
            {/* <SidebarDashboard />
            <div>B</div>
            <main>{children}</main> */}
          </div>
        )}
      </body>
    </html>
  );
}
