"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Login from "./Login";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-gray-500 px-5 text-white">
      <div className="flex justify-between md:py-5 md:flex md:justify-around md:align-middle">
        {/* LOGOTYPE */}
        <div className="flex items-center justify-center">
          <Link href="/">
            <h2 className="text-2xl font-bold md:pl:5">IslaWonder</h2>
          </Link>
        </div>
        {/* MOBILE */}
        <div className="md:hidden py-8">
          <button
            className="py-3 rounded-md"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <Image
                src="/icons8-close-50.png"
                alt="Close icon button"
                className="dark:invert"
                width={30}
                height={30}
                priority
              />
            ) : (
              <Image
                src="/icons8-hamburger-50.png"
                alt="Menu icon button"
                className="dark:invert"
                width={30}
                height={30}
                priority
              />
            )}
          </button>
        </div>
      </div>

      <div className={`md:block ${navbar ? "block" : "hidden"}`}>
        <ul className="md:h-auto md:flex cursor-pointer  h-screen justify-center">
          <Link href="/store" onClick={() => setNavbar(!navbar)}>
            <li className="text-xl px-6 text-center py-5 hover:bg-black md:hover:bg bg-transparent ">
              Services
            </li>
          </Link>
          <Link href="/about" onClick={() => setNavbar(!navbar)}>
            <li className="text-xl px-6 text-center py-5 hover:bg-black md:hover:bg bg-transparent ">
              About
            </li>
          </Link>
          <Link href="/gallery" onClick={() => setNavbar(!navbar)}>
            <li className="text-xl px-6 text-center py-5 hover:bg-black md:hover:bg bg-transparent ">
              Gallery
            </li>
          </Link>
          <Link href="/login" onClick={() => setNavbar(!navbar)}>
            <li className="text-xl px-6 text-center py-5 hover:bg-black md:hover:bg bg-transparent ">
              <Login />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
