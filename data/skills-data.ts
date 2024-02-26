import { SkillCardPropsType } from "../components/skills-page/skill-card";

export interface SkillsType extends SkillCardPropsType {
  id: number;
}

export const programmingLanguages: SkillsType[] = [
  {
    id: 0,
    imgFileName: "javaScript.svg",
    imgAlt: "javaScript logo",
    skillName: "JavaScript",
    skillLevel: 75,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 1,
    imgFileName: "typescript.svg",
    imgAlt: "TavaScript logo",
    skillName: "TypeScript",
    skillLevel: 50,
    link: "https://www.typescriptlang.org/",
  },
  {
    id: 2,
    imgFileName: "php.svg",
    imgAlt: "php logo",
    skillName: "PHP",
    skillLevel: 65,
    link: "https://www.php.net/",
  },
  {
    id: 3,
    imgFileName: "bash.svg",
    imgAlt: "bash logo",
    skillName: "Bash",
    skillLevel: 40,
    link: "https://www.gnu.org/software/bash/",
  },
  {
    id: 4,
    imgFileName: "python.svg",
    imgAlt: "python logo",
    skillName: "Python",
    skillLevel: 40,
    link: "https://www.python.org/",
  },
];

export const fullStackTechs: SkillsType[] = [
  {
    id: 0,
    imgFileName: "nextjs.svg",
    imgAlt: "nextjs logo",
    skillName: "Nextjs",
    skillLevel: 65,
    link: "https://nextjs.org/",
  },
  {
    id: 1,
    imgFileName: "drupal.svg",
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
  {
    id: 3,
    imgFileName: "zod.svg",
    imgAlt: "zod logo",
    skillName: "Zod",
    skillLevel: 50,
    link: "https://zod.dev/",
  },
];

export const frontEndTechs: SkillsType[] = [
  {
    id: 0,
    imgFileName: "react.svg",
    imgAlt: "react logo",
    skillName: "React",
    skillLevel: 75,
    link: "https://react.dev/",
  },
  {
    id: 5,
    imgFileName: "redux.svg",
    imgAlt: "redux logo",
    skillName: "React Redux",
    skillLevel: 65,
    link: "https://react-redux.js.org/",
  },
  {
    id: 1,
    imgFileName: "html.svg",
    imgAlt: "html logo",
    skillName: "HTML",
    skillLevel: 85,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: 2,
    imgFileName: "css.svg",
    imgAlt: "css logo",
    skillName: "CSS",
    skillLevel: 80,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: 3,
    imgFileName: "bootstrap.svg",
    imgAlt: "bootstrap logo",
    skillName: "Bootstrap",
    skillLevel: 75,
    link: "https://getbootstrap.com/",
  },

  {
    id: 4,
    imgFileName: "tailwind.svg",
    imgAlt: "tailwind logo",
    skillName: "Tailwind",
    skillLevel: 75,
    link: "https://tailwindcss.com/",
  },
  {
    id: 5,
    imgFileName: "ejs.svg",
    imgAlt: "ejs logo",
    skillName: "Ejs",
    skillLevel: 75,
    link: "https://ejs.co/",
  },
];

export const backEndTechs: SkillsType[] = [
  {
    id: 0,
    imgFileName: "node.svg",
    imgAlt: "node logo",
    skillName: "node",
    skillLevel: 40,
    link: "https://nodejs.org/en/learn",
  },
  {
    id: 1,
    imgFileName: "firebase.svg",
    imgAlt: "firebase logo",
    skillName: "Firebase",
    skillLevel: 40,
    link: "https://firebase.google.com/",
  },
  {
    id: 2,
    imgFileName: "mysql.svg",
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
    id: 0,
    imgFileName: "docker.svg",
    imgAlt: "docker logo",
    skillName: "Docker",
    skillLevel: 70,
    link: "https://www.docker.com/",
  },
  {
    id: 1,
    imgFileName: "aws.svg",
    imgAlt: "aws logo",
    skillName: "Aws",
    skillLevel: 30,
    link: "https://aws.amazon.com/",
  },

  {
    id: 2,
    imgFileName: "github.svg",
    imgAlt: "github logo",
    skillName: "Github",
    skillLevel: 75,
    link: "https://github.com/",
  },
  {
    id: 3,
    imgFileName: "lando.svg",
    imgAlt: "lando logo",
    skillName: "Lando",
    skillLevel: 40,
    link: "https://lando.dev/",
  },
];
