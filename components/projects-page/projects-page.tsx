import React from "react";
import Image from "next/image";
import ProjectCard from "./project-card";
import { projects } from "@/data/project-card";

export default function ProjectsPage() {
  return (
    <div className="w-full">
      <div className=" max-w-[1240px] mx-auto px-2">
        <p className=" text-2xl font-bold tracking-widest uppercase text-center text-[#5651e5] py-14">
          Projects
        </p>
        <ul className="grid md:grid-cols-2 gap-[4rem]">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      </div>
    </div>
  );
}
