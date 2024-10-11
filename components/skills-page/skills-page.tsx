import React from "react";
import {
  programmingLanguages,
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
          <div className="bg-gradient-to-br from-blue-500 via-red-500 to-green-500 rounded-xl p-[1px] shadow-[10px_0_60px_-15px_rgba(0,0,0,0.3)] ">
            <div className="bg-[#cbd5e1] rounded-xl  ">
              <h2 className=" text-center text-2xl uppercase tracking-widest py-8">
                Languages
              </h2>
              <ul className="py-8 px-4 grid grid-cols-2 md:grid-cols-6 gap-6 justify-center items-end  ">
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
          </div>
        </div>

        <div className="py-8">
          <div className="bg-gradient-to-br from-blue-500 via-red-500 to-green-500 rounded-xl p-[1px] shadow-[10px_0_60px_-15px_rgba(0,0,0,0.3)] ">
            <div className="bg-[#cbd5e1] rounded-xl  ">
              <h2 className="  text-center text-2xl uppercase tracking-widest py-8">
                Front-End Technologies
              </h2>
              <ul className="py-8 px-4 grid grid-cols-2 md:grid-cols-6 gap-6 items-end  ">
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
          </div>
        </div>
        <div className="py-8">
          <div className="bg-gradient-to-br from-blue-500 via-red-500 to-green-500 rounded-xl p-[1px] shadow-[10px_0_60px_-15px_rgba(0,0,0,0.3)] ">
            <div className="bg-[#cbd5e1] rounded-xl  ">
              <h2 className="  text-center text-2xl uppercase tracking-widest py-8">
                Back-End Technologies
              </h2>
              <ul className="py-8 px-4 grid grid-cols-2 md:grid-cols-6  gap-6 items-end ">
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
          </div>
        </div>
        <div className="py-8">
          <div className="bg-gradient-to-br from-blue-500 via-red-500 to-green-500 rounded-xl p-[1px] shadow-[10px_0_60px_-15px_rgba(0,0,0,0.3)] ">
            <div className="bg-[#cbd5e1] rounded-xl  ">
              <h2 className="  text-center text-2xl uppercase tracking-widest py-8">
                DevOps Technologies
              </h2>
              <ul className="py-8 px-4 grid grid-cols-2 md:grid-cols-6  gap-6 items-end ">
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
      </div>
    </div>
  );
}
