import React from "react";
import ConnectLinks from "../navbar/connect-links";

export default function HomePage() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className=" uppercase text-sm tracking-widest text-gray-600">
            Let's build something togather
          </p>
          <h1 className="py-4 text-gray-700">
            Hello! I'm <span className="text-[#5651e5]">Bisso</span>
          </h1>
          <h2 className="py-4 text-gray-700 text-3xl">
            A Full-Stack Developer
          </h2>
          <p className=" py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            maxime, hic odio distinctio explicabo nobis sequi, vel, eum animi
            quae blanditiis illo libero veritatis aliquam dignissimos mollitia
            dolor perspiciatis dolores dicta ab quod laboriosam dolorem? Odit
            mollitia tempore a. Reprehenderit ad voluptatibus, perspiciatis
          </p>
          <div className="flex justify-center items-center">
            <ConnectLinks
              ulClass=" flex items-center justify-between my-4 w-[50%] sm:w-[50%]"
              liClass="rounded-full shadow-lg shadow-gray-400 p-2 sm:p-5 md:p-6 cursor-pointer hover:scale-105 ease-in duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
