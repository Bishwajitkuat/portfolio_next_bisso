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
    <li className=" grid md:grid-cols-2 shadow-lx rounded-xl bg-[#5651e516] hover:bg-[#5651e56f] p-6 gap-6 hover:shadow-2xl hover:scale-105 ease-in duration-100  ">
      <Image
        className="md:order-2 rounded-xl self-center"
        src={imgURL}
        alt={imgAlt}
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        priority={false}
      />
      <div className="grid gap-6">
        <h2 className="justify-self-center self-baseline py-4 text-xl">
          {projectName}
        </h2>
        <div className="flex justify-center items-baseline gap-2">
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
        <p>{projectDescription}</p>
        <ul className="justify-self-center flex gap-6">
          {liveSite && (
            <Link href={liveSite} target="_blank">
              <TbWorldWww size={40} color="#4540ed" />
            </Link>
          )}
          <Link href={gitHub} target="_blank">
            <FaGithub color="#4540ed" size={40} />
          </Link>
        </ul>
      </div>
    </li>
  );
}
