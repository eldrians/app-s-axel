import { Header } from "@/components";
import "./globals.css";

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
        <main className="px-28 pt-20">{children}</main>
      </body>
    </html>
  );
}
