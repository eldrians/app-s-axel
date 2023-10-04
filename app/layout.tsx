import { Header } from "@/components";
import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Skripsi App",
  description: "On-Demand Service Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="px-10 md:px-20 lg:px-28 pt-4 lg:pt-20 bg-hero bg-cover bg-top">
          {children}
        </main>
      </body>
    </html>
  );
}
