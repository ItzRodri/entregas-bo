"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
export default function NavBar() {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  const pathname = usePathname();

  return (
    <>
      <nav className="bg-white  outline outline-blue-600 ">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-black">
                <Image src="entregas-logo.svg" width={200} height={200} alt="hola"></Image>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className={`${
                    pathname === "/" ? "bg-black text-white" : "text-black"
                  } hover:bg-black hover:text-white rounded-lg p-2`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`${
                    pathname === "/about" ? "bg-black text-white" : "text-black"
                  } hover:bg-black hover:text-white rounded-lg p-2`}
                >
                  Productos
                </Link>
                <Link
                  href="/services"
                  className={`${
                    pathname === "/services" ? "bg-black text-white" : "text-black"
                  } hover:bg-black hover:text-white rounded-lg p-2`}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className={`${
                    pathname === "/contact" ? "bg-black text-white" : "text-black"
                  } hover:bg-black hover:text-white rounded-lg p-2`}
                >
                  Preguntas Frecuentes
                </Link>
                <Link
                  href="/contact"
                  className={`${
                    pathname === "/contact" ? "bg-black text-white" : "text-black"
                  } hover:bg-black hover:text-white rounded-lg p-2`}
                >
                  Contactanos
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
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
                    pathname === "/" ? "bg-black text-white" : "text-black"
                  } hover:bg-black block hover:text-white rounded-lg p-2`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`${
                    pathname === "/about" ? "bg-black text-white" : "text-black"
                  } hover:bg-black block hover:text-white rounded-lg p-2`}
                >
                  Productos
                </Link>
                <Link
                  href="/services"
                  className={`${
                    pathname === "/services" ? "bg-black text-white" : "text-black"
                  } hover:bg-black block hover:text-white rounded-lg p-2`}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className={`${
                    pathname === "/contact" ? "bg-black text-white" : "text-black"
                  } hover:bg-black block hover:text-white rounded-lg p-2`}
                >
                  Preguntas Frecuentes
                </Link>
                <Link
                  href="/contact"
                  className={`${
                    pathname === "/contact" ? "bg-black text-white" : "text-black"
                  } hover:bg-black block hover:text-white rounded-lg p-2`}
                >
                  Contactanos
                </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
