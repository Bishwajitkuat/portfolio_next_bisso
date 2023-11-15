import Image from "next/image";
import React from "react";
import { Progress } from "@material-tailwind/react";
import Link from "next/link";
export interface SkillCardPropsType {
  imgFileName: string;
  imgAlt: string;
  skillName: string;
  skillLevel: number;
  link: string;
}

export default function SkillCard({
  imgFileName,
  imgAlt,
  skillName,
  skillLevel,
  link,
}: SkillCardPropsType) {
  return (
    <Link href={link} target="_blank">
      <li className=" flex flex-col justify-center items-center  gap-6 hover:scale-105 ease-in duration-300 hover:cursor-pointer ">
        <Image
          src={`/skills_imgs/${imgFileName}`}
          alt={imgAlt}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "30%", height: "auto" }}
          priority={false}
        />

        <h3 className=" titlecase text-center">{skillName}</h3>
        <Progress
          className="border-gray-900/10 bg-gray-900/20"
          value={skillLevel}
          size="md"
          color="green"
          variant="filled"
        />
      </li>
    </Link>
  );
}
