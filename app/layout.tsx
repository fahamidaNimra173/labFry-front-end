import type { Metadata } from "next";
import {Public_Sans} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Labfry",
  description: "Service booking Appp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable}  antialiased`}
      >
        <Navbar></Navbar>
        {children}
        
      </body>
    </html>
  );
}
