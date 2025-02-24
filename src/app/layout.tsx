"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import ProductDetail from "./pages/items/details";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isDetailPage = pathname === "/detail";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {isDetailPage ? (
          <ProductDetail />
        ) : (
          <>
            <Header />
            {children}
          </>
        )}
        <Footer />
      </body>
    </html>
  );
}
