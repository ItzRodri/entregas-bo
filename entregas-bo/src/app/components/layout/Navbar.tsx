"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  const pathname = usePathname();
  const isLoggedIn = 1;

  return (
    <>
      <nav className="bg-white  outline outline-primary">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src="/entregas-logo.svg"
                    width={200}
                    height={200}
                    alt="hola"
                    priority
                  ></Image>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className={`${
                    pathname === "/" ? "bg-primary text-white" : "text-black"
                  } hover:bg-primary hover:text-white rounded-lg p-2`}
                >
                  Home
                </Link>
                <Link
                  href="/Sections/NewProducts/"
                  className={`${
                    pathname === "/Sections/NewProducts"
                      ? "bg-primary text-white"
                      : "text-black"
                  } hover:bg-primary hover:text-white rounded-lg p-2`}
                >
                  Productos
                </Link>
                <Link
                  href="/blog"
                  className={`${
                    pathname === "/blog"
                      ? "bg-primary text-white"
                      : "text-black"
                  } hover:bg-primary hover:text-white rounded-lg p-2`}
                >
                  Blog
                </Link>
                <Link
                  href="/Sections/Faq"
                  className={`${
                    pathname === "/Sections/Faq"
                      ? "bg-primary text-white"
                      : "text-black"
                  } hover:bg-primary hover:text-white rounded-lg p-2`}
                >
                  Preguntas Frecuentes
                </Link>
                <Link
                  href="/Sections/Contactus/"
                  className={`${
                    pathname === "/Sections/Contactus"
                      ? "bg-primary text-white"
                      : "text-black"
                  } hover:bg-primary hover:text-white rounded-lg p-2`}
                >
                  Contactanos
                </Link>
                <Link
                  href={isLoggedIn ? "/Sections/Profile" : "/Sections/Login"}
                  className={`${
                    pathname ===
                    (isLoggedIn ? "/Sections/Profile" : "/Sections/Login")
                      ? "bg-primary text-white"
                      : "text-black"
                  } hover:bg-primary hover:text-white rounded-lg p-2`}
                >
                  {isLoggedIn ? "Profile" : "Logeate/Registrate"}
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "bg-primary text-white" : "text-black"
                } hover:bg-primary block hover:text-white rounded-lg p-2`}
                onClick={toggleNavbar}
              >
                Home
              </Link>
              <Link
                href="/productos"
                className={`${
                  pathname === "/productos"
                    ? "bg-primary text-white"
                    : "text-black"
                } hover:bg-primary block hover:text-white rounded-lg p-2`}
                onClick={toggleNavbar}
              >
                Productos
              </Link>
              <Link
                href="/blog"
                className={`${
                  pathname === "/blog" ? "bg-primary text-white" : "text-black"
                } hover:bg-primary block hover:text-white rounded-lg p-2`}
                onClick={toggleNavbar}
              >
                Blog
              </Link>
              <Link
                href="/Sections/Faq"
                className={`${
                  pathname === "/Sections/Faq"
                    ? "bg-primary text-white"
                    : "text-black"
                } hover:bg-primary block hover:text-white rounded-lg p-2`}
                onClick={toggleNavbar}
              >
                Preguntas Frecuentes
              </Link>
              <Link
                href="/contactanos"
                className={`${
                  pathname === "/contactanos"
                    ? "bg-primary text-white"
                    : "text-black"
                } hover:bg-primary block hover:text-white rounded-lg p-2`}
                onClick={toggleNavbar}
              >
                Contactanos
              </Link>
              <Link
                href={isLoggedIn ? "/Sections/Profile" : "/Sections/Login"}
                className={`${
                  pathname ===
                  (isLoggedIn ? "/Sections/Profile" : "/Sections/Login")
                    ? "bg-primary text-white"
                    : "text-black"
                } hover:bg-primary block hover:text-white rounded-lg p-2`}
                onClick={toggleNavbar}
              >
                {isLoggedIn ? "Profile" : "Logeate/Registrate"}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
