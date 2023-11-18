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
    <li className=" grid items-center shadow-lx rounded-xl bg-gray-300 p-2  gap-6 ">
      <Image
        className="rounded-xl"
        src={imgURL}
        alt={imgAlt}
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        priority={false}
      />
      <div className=" flex justify-start items-baseline gap-2">
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
      <h2 className="justify-self-center self-baseline py-4 text-xl">
        {projectName}
      </h2>
      <p>{projectDescription}</p>
      <ul className="justify-self-center flex gap-6">
        {liveSite && (
          <Link href={liveSite} target="_blank">
            <TbWorldWww size={40} color="#5651e5" />
          </Link>
        )}
        <Link href={gitHub} target="_blank">
          <FaGithub color="#5651e5" size={40} />
        </Link>
      </ul>
    </li>
  );
}
