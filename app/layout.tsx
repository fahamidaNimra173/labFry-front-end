import type { Metadata } from "next";
import {Public_Sans} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        className={`${publicSans.variable} antialiased scroll-smooth`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        
      </body>
    </html>
  );
}
