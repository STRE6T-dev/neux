import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });
import {AppProvider} from "./providers";


export const metadata: Metadata = {
  title: "Neux",
  description: "Testing software for the technical students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
            <Header />
            {children}    

      </body>
    </html>
  );
}
