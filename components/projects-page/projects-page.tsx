import React from "react";
import Image from "next/image";
import ProjectCard from "./project-card";
import { projects } from "@/data/project-card";

export default function ProjectsPage() {
  return (
    <div className="w-full">
      <div className=" px-16 pt-8 md:pt-12 max-w-[1240px] mx-auto">
        <p className="uppercase pb-20 text-center text-[3rem] tracking-widest text-[#5651e5]">
          Projects
        </p>
        <ul className="grid  gap-[4rem]">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      </div>
    </div>
  );
}
