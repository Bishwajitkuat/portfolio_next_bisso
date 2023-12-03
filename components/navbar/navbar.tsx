/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MenuLinks from "./menu-links";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ConnectLinks from "./connect-links";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const navHandler = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed bg-gray-100 top-0 w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <h2 className="text-5xl">BD</h2>
        </Link>
        <div>
          <MenuLinks
            ulClass="hidden md:flex"
            liClass="ml-10 text-sm font-bold uppercase hover:border-b hover:text-[#5651e5] ease-in duration-200"
          />
        </div>
        <button onClick={navHandler} className="md:hidden">
          <AiOutlineMenu size={25} />
        </button>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80 ease-in duration-500"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <h2 className="text-5xl">BD</h2>
              </Link>
              <button
                onClick={navHandler}
                className="rounded-full p-2 shadow-lg shadow-gray-400 cursor-pointer"
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className="border-b broder-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build someting awsome!
              </p>
            </div>
          </div>
          <div onClick={navHandler} className="py-4 flex-col">
            <MenuLinks ulClass="" liClass="py-4 flex-cols" />
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <ConnectLinks
                ulClass="flex items-center justify-between my-4 w-full sm:w-[80%]"
                liClass="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
