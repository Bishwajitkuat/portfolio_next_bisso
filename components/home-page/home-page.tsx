/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ConnectLinks from "../navbar/connect-links";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className=" w-full min-h-[90vh] flex text-center">
      <div className="max-w-[1240px] grid md:grid-cols-3 gap-8  mx-auto p-2 justify-center items-center">
        <div className="md:col-span-2">
          <h1 className="pt-8 md:py-4 text-gray-700">
            Hello! I'm <span className="text-[#5651e5]">Bishwajit Das</span>
          </h1>
          <h2 className="py-8 text-gray-700 text-3xl">
            A Full-Stack Web Developer
          </h2>
          <p className=" py-4 leading-loose text-justify  text-gray-800 max-w-[70%] m-auto">
            I acquired 2 years of diverse experience in programming and web
            development through a combination of internships, training, studies,
            and personal projects. I have a wide range of technical skills with
            a background in plant biotechnology where I excels in planning,
            research, analysis, and problem-solving.
          </p>
          <p className=" py-4 leading-loose text-justify  text-gray-800 max-w-[70%] m-auto">
            My passion for programming has driven a successful transition into
            the tech field, where I am continues to thriving as a skilled
            developer.
          </p>
          <div className="flex justify-center items-center">
            <ConnectLinks
              ulClass=" flex items-center justify-between my-4 w-[50%] sm:w-[50%]"
              liClass="rounded-full shadow-lg shadow-gray-400 p-2 sm:p-5 md:p-6 cursor-pointer hover:scale-105 ease-in duration-500"
            />
          </div>
        </div>
        <Image
          className="w-full h-auto rounded-full shadow-xl shadow-gray-400"
          src="/profile_picture.jpg"
          alt="profile picture"
          width="0"
          height="0"
          sizes="100vw"
          priority={true}
        />
      </div>
    </div>
  );
}
