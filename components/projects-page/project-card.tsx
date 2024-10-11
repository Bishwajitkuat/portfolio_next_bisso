import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { ProjeectDataBaseType } from "../../data/project-card";

interface ProjectCardPros {
  project: ProjeectDataBaseType;
}

export default function ProjectCard({ project }: ProjectCardPros) {
  const {
    imgURL,
    imgAlt,
    skillIconUrl,
    projectName,
    projectDescription,
    gitHub,
    liveSite,
  } = project;
  return (
    <li className="overflow-hidden flex flex-col items-center shadow-md shadow-[#64748b]  rounded-xl bg-gradient-to-br from-[#94a3b8]  to-[#e5e7eb] gap-4   ">
      <Image
        className="rounded-t-xl hover:scale-105  ease-in duration-300 self-center shadow-sm shadow-[#64748b]"
        src={imgURL}
        alt={imgAlt}
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        priority={false}
      />

      <div className="w-full px-4 flex justify-between gap-4">
        <ul className="flex flex-col gap-2 ">
          {liveSite && (
            <Link
              href={liveSite}
              target="_blank"
              className="flex gap-1 items-center hover:scale-110 ease-in duration-100"
            >
              <div>
                <TbWorldWww size={24} color="#1e3a8a" />
              </div>
              <p className="text-[#1e3a8a] text-md font-semibold tracking-widest">
                Live
              </p>
            </Link>
          )}
          {gitHub && (
            <Link
              href={gitHub}
              target="_blank"
              className="flex gap-1 items-center hover:scale-105 ease-in duration-200"
            >
              <div>
                <FaGithub color="#1e3a8a" size={24} />
              </div>
              <p className="text-md text-blue-900 font-semibold tracking-widest">
                GitHub
              </p>
            </Link>
          )}
        </ul>
        <div className="flex items-end justify-end flex-wrap gap-2">
          {skillIconUrl.map((icon, index) => (
            <Image
              key={index}
              src={icon.imgPath}
              alt={icon.imgAlt}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "2rem", height: "auto" }}
            />
          ))}
        </div>
      </div>
      <h2 className="py-8 px-4 text-center text-2xl uppercase tracking-widest">
        {projectName}
      </h2>
      <p className="grow px-4 pb-4 text-justify">{projectDescription}</p>
    </li>
  );
}
