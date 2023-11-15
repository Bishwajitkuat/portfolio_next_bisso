import { SkillCardPropsType } from "../components/skills-page/skill-card";

export interface SkillsType extends SkillCardPropsType {
  id: number;
}

export const programmingLanguages: SkillsType[] = [
  {
    id: 0,
    imgFileName: "javaScript.png",
    imgAlt: "javaScript logo",
    skillName: "JavaScript",
    skillLevel: 75,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 1,
    imgFileName: "typescript.png",
    imgAlt: "TavaScript logo",
    skillName: "TypeScript",
    skillLevel: 50,
    link: "https://www.typescriptlang.org/",
  },
  {
    id: 2,
    imgFileName: "php.png",
    imgAlt: "php logo",
    skillName: "PHP",
    skillLevel: 65,
    link: "https://www.php.net/",
  },
  {
    id: 3,
    imgFileName: "python.png",
    imgAlt: "python logo",
    skillName: "Python",
    skillLevel: 40,
    link: "https://www.python.org/",
  },
];

export const fullStackTechs: SkillsType[] = [
  {
    id: 0,
    imgFileName: "nextjs.png",
    imgAlt: "nextjs logo",
    skillName: "Nextjs",
    skillLevel: 65,
    link: "https://nextjs.org/",
  },
  {
    id: 1,
    imgFileName: "drupal.png",
    imgAlt: "drupal logo",
    skillName: "Drupal",
    skillLevel: 65,
    link: "https://www.drupal.org/",
  },
  {
    id: 2,
    imgFileName: "symfony.svg",
    imgAlt: "symfony logo",
    skillName: "Symfony",
    skillLevel: 50,
    link: "https://symfony.com/",
  },
];

export const frontEndTechs: SkillsType[] = [
  {
    id: 0,
    imgFileName: "react.png",
    imgAlt: "react logo",
    skillName: "React",
    skillLevel: 75,
    link: "https://react.dev/",
  },
  {
    id: 1,
    imgFileName: "html.png",
    imgAlt: "html logo",
    skillName: "HTML",
    skillLevel: 85,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: 2,
    imgFileName: "css.png",
    imgAlt: "css logo",
    skillName: "CSS",
    skillLevel: 80,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: 3,
    imgFileName: "bootstrap.png",
    imgAlt: "bootstrap logo",
    skillName: "Bootstrap",
    skillLevel: 75,
    link: "https://getbootstrap.com/",
  },

  {
    id: 11,
    imgFileName: "tailwind.png",
    imgAlt: "tailwind logo",
    skillName: "Tailwind",
    skillLevel: 75,
    link: "https://tailwindcss.com/",
  },
];

export const backEndTechs: SkillsType[] = [
  {
    id: 0,
    imgFileName: "node.png",
    imgAlt: "node logo",
    skillName: "node",
    skillLevel: 40,
    link: "https://nodejs.org/en/learn",
  },
  {
    id: 1,
    imgFileName: "firebase.png",
    imgAlt: "firebase logo",
    skillName: "Firebase",
    skillLevel: 40,
    link: "https://firebase.google.com/",
  },
  {
    id: 2,
    imgFileName: "mysql.png",
    imgAlt: "mysql logo",
    skillName: "MySQL",
    skillLevel: 75,
    link: "https://www.mysql.com/",
  },
  {
    id: 3,
    imgFileName: "mongodb.svg",
    imgAlt: "mongodb logo",
    skillName: "MongoDB",
    skillLevel: 40,
    link: "https://www.mongodb.com/",
  },
];

export const devOpsTechs: SkillsType[] = [
  {
    id: 1,
    imgFileName: "aws.png",
    imgAlt: "aws logo",
    skillName: "Aws",
    skillLevel: 30,
    link: "https://aws.amazon.com/",
  },

  {
    id: 5,
    imgFileName: "github.png",
    imgAlt: "github logo",
    skillName: "Github",
    skillLevel: 75,
    link: "https://github.com/",
  },
];
