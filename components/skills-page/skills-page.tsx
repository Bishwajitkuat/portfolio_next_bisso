import React from "react";
import {
  programmingLanguages,
  fullStackTechs,
  frontEndTechs,
  backEndTechs,
  devOpsTechs,
} from "../../data/skills-data";
import SkillCard from "./skill-card";

export default function SkillsPage() {
  return (
    <div className="w-full min-h-screen">
      <div className="px-4 md:px-16 pt-8 md:pt-12 max-w-[1240px] mx-auto text-gray-700 font-bold  h-full">
        <p className="uppercase md:pb-20 text-center text-[3rem] tracking-widest text-[#5651e5]">
          Skills
        </p>
        <div className="py-8">
          <h2 className=" text-center text-xl pb-8">Programming Languages</h2>
          <ul className="py-8 px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-col-5 gap-6 justify-center items-end shadow-xl rounded-xl ">
            {programmingLanguages.map((skill) => (
              <SkillCard
                key={skill.id}
                imgFileName={skill.imgFileName}
                imgAlt={skill.imgAlt}
                skillName={skill.skillName}
                skillLevel={skill.skillLevel}
                link={skill.link}
              />
            ))}
          </ul>
        </div>
        <div className="py-8">
          <h2 className=" text-center text-xl pb-8">Full-Stack Technologies</h2>
          <ul className="py-8 px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-col-5 gap-6 items-end shadow-xl rounded-xl ">
            {fullStackTechs.map((skill) => (
              <SkillCard
                key={skill.id}
                imgFileName={skill.imgFileName}
                imgAlt={skill.imgAlt}
                skillName={skill.skillName}
                skillLevel={skill.skillLevel}
                link={skill.link}
              />
            ))}
          </ul>
        </div>
        <div className="py-8">
          <h2 className=" text-center text-xl pb-8">Front-End Technologies</h2>
          <ul className="py-8 px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-col-5 gap-6 items-end shadow-xl rounded-xl ">
            {frontEndTechs.map((skill) => (
              <SkillCard
                key={skill.id}
                imgFileName={skill.imgFileName}
                imgAlt={skill.imgAlt}
                skillName={skill.skillName}
                skillLevel={skill.skillLevel}
                link={skill.link}
              />
            ))}
          </ul>
        </div>
        <div className="py-8">
          <h2 className=" text-center text-xl pb-8">Back-End Technologies</h2>
          <ul className="py-8 px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-col-5 gap-6 items-end shadow-xl rounded-xl">
            {backEndTechs.map((skill) => (
              <SkillCard
                key={skill.id}
                imgFileName={skill.imgFileName}
                imgAlt={skill.imgAlt}
                skillName={skill.skillName}
                skillLevel={skill.skillLevel}
                link={skill.link}
              />
            ))}
          </ul>
        </div>
        <div className="py-8">
          <h2 className=" text-center text-xl pb-8">DevOps Technologies</h2>
          <ul className="py-8 px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-col-5 gap-6 items-end shadow-xl rounded-xl">
            {devOpsTechs.map((skill) => (
              <SkillCard
                key={skill.id}
                imgFileName={skill.imgFileName}
                imgAlt={skill.imgAlt}
                skillName={skill.skillName}
                skillLevel={skill.skillLevel}
                link={skill.link}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
