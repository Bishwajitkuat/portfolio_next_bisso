import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen flex justify-center pt-8 md:pt-12">
      <div className="px-4 md:px-16">
        <h3 className=" uppercase pb-20 text-center text-[3rem] tracking-widest text-[#5651e5]">
          About
        </h3>
        <div className="max-w-[1240px]  m-auto grid md:grid-cols-3 justify-center gap-8">
          <div className="md:col-span-2">
            <div className=" md:px-16 text-left leading-loose text-gray-800">
              <h2 className="text-center md:text-left">
                Story of becoming a web developer
              </h2>
              <p className="py-4 pt-4">
                I was a <span className="">Plant Biotechnologist</span> and
                completed my Master of Science Degree from the University of
                Helsinki 2020. However, I have a strong interest in programming,
                problem-solving, research, and data analysis. During my studies
                at the University of Helsinki, I took some courses which
                required some programming knowledge. I have struggled a lot
                during these courses because of a lack of programming skills.
                Despite my struggles, I became more interested in programming
                and later completed Introduction to Programming from{" "}
                <Link
                  className="text-[#5651e5]"
                  href="https://www.mooc.fi/en/"
                  target="_blanck"
                >
                  Mooc.fi
                </Link>
              </p>
              <p className="py-4">
                Even though I have strong motivation, I did not get enough
                opportunities to learn it and change my career. Finally, at 2022
                I have decided to change my career to web development and
                started learning programming. Initially, I started with some{" "}
                <Link
                  className="text-[#6551e5]"
                  href="https://www.udemy.com/user/bishwajit-das-24/"
                  target="_blanck"
                >
                  Udemy courses
                </Link>
                .
              </p>
              <p className="py-4">
                Over time, I have realized that I like programming,
                problem-solving and enjoy building web applications.
              </p>

              <p className="py-4">
                At the beginning of 2023 I have admitted into{" "}
                <Link
                  className="text-[#5651e5]"
                  href="https://en.bc.fi/qualifications/full-stack-web-developer-program/"
                  target="_blanck"
                >
                  Full Stack Web Developer program
                </Link>{" "}
                at{" "}
                <Link
                  className="text-[#5651e5]"
                  href="https://www.bc.fi/"
                  target="_blanck"
                >
                  Business College Helsinki.
                </Link>{" "}
                This excellent program taught me some modern web development
                technologies and gave me enough projects to sharpen my skills.
              </p>
            </div>
          </div>

          <Image
            className="w-full h-auto rounded-full shadow-xl shadow-gray-400 hover:scale-105 ease-in duration-500"
            src="/profile_img.jpg"
            width="0"
            height="0"
            sizes="100vw"
            alt="profile picture"
            priority={true}
          />
          <div className="pt-8 md:col-span-2 md:px-16 text-left leading-loose text-gray-800">
            <h2 className="text-center md:text-left">What else do I like!</h2>
            <ul className="pt-6 ">
              <li>Playing football and cricket</li>
              <li>Watching movies and tv series</li>
              <li>Playing guiter</li>
              <li>Listen to music</li>
              <li>Hanging out with friends</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
