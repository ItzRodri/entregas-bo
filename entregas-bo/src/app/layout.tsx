import type { Metadata } from "next";

import "./globals.css";



import NavBar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/footer";

import React, { ReactNode } from "react";

export const metadata = {
  title: "My App",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

