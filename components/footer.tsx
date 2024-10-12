import React from "react";
import ConnectLinks from "./navbar/connect-links";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-gradient-to-b  from-gray-400 to-gray-100 shadow-xl shadow-gray-400 w-full py-5">
      <ConnectLinks
        ulClass=" flex items-center gap-4 justify-center my-4 pb-4 w-[50%] sm:w-[50%]"
        liClass="rounded-full shadow-lg shadow-gray-400 p-2 sm:p-5 md:p-6 cursor-pointer hover:scale-105 ease-in duration-500"
      />
      <p>&copy;2023 Bishwajit Das</p>
    </footer>
  );
}
