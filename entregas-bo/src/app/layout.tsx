import type { Metadata } from "next";

import "./globals.css";



import NavBar from "./NavBar";
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
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

