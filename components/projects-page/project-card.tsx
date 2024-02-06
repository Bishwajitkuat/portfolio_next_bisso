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
    <li className=" flex flex-col items-center shadow-md shadow-[#64748b]  rounded-md bg-gradient-to-br from-[#94a3b8]  to-[#e5e7eb] gap-4   ">
      <h2 className="py-4 text-center text-2xl uppercase tracking-widest">
        {projectName}
      </h2>
      <div className="flex px-2 justify-end  gap-2">
        {skillIconUrl.map((icon, index) => (
          <Image
            key={index}
            src={icon.imgPath}
            alt={icon.imgAlt}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "6%", height: "auto" }}
          />
        ))}
      </div>
      <Image
        className="w-full self-center shadow-sm shadow-[#64748b]"
        src={imgURL}
        alt={imgAlt}
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        priority={false}
      />

      <p className="grow px-2">{projectDescription}</p>
      <ul className=" pb-4 flex gap-6">
        {liveSite && (
          <Link href={liveSite} target="_blank">
            <TbWorldWww size={40} color="#4540ed" />
          </Link>
        )}
        <Link href={gitHub} target="_blank">
          <FaGithub color="#4540ed" size={40} />
        </Link>
      </ul>
    </li>
  );
}
