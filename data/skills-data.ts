import { SkillCardPropsType } from "../components/skills-page/skill-card";

export interface SkillsType extends SkillCardPropsType {
  id: number;
}

export const programmingLanguages: SkillsType[] = [
  {
    id: 0,
    imgFileName: "c_sharp.svg",
    imgAlt: "c sharp logo",
    skillName: "C#",
    skillLevel: 75,
    link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    id: 1,
    imgFileName: "javaScript.svg",
    imgAlt: "javaScript logo",
    skillName: "JavaScript",
    skillLevel: 75,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 2,
    imgFileName: "typescript.svg",
    imgAlt: "TavaScript logo",
    skillName: "TypeScript",
    skillLevel: 75,
    link: "https://www.typescriptlang.org/",
  },
  {
    id: 3,
    imgFileName: "php.svg",
    imgAlt: "php logo",
    skillName: "PHP",
    skillLevel: 65,
    link: "https://www.php.net/",
  },
  {
    id: 4,
    imgFileName: "bash.svg",
    imgAlt: "bash logo",
    skillName: "Bash",
    skillLevel: 40,
    link: "https://www.gnu.org/software/bash/",
  },
  {
    id: 5,
    imgFileName: "python.svg",
    imgAlt: "python logo",
    skillName: "Python",
    skillLevel: 40,
    link: "https://www.python.org/",
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
    id: 1,
    imgFileName: "nextjs.svg",
    imgAlt: "nextjs logo",
    skillName: "Nextjs",
    skillLevel: 65,
    link: "https://nextjs.org/",
  },
  {
    id: 2,
    imgFileName: "redux.svg",
    imgAlt: "redux logo",
    skillName: "React Redux",
    skillLevel: 85,
    link: "https://react-redux.js.org/",
  },
  {
    id: 3,
    imgFileName: "react_router.svg",
    imgAlt: "react router logo",
    skillName: "React Router",
    skillLevel: 85,
    link: "https://react-redux.js.org/",
  },
  {
    id: 4,
    imgFileName: "react_query.svg",
    imgAlt: "react query logo",
    skillName: "React Query",
    skillLevel: 65,
    link: "https://tanstack.com/query/latest/docs/framework/react/overview",
  },
  {
    id: 5,
    imgFileName: "vite.svg",
    imgAlt: "vite logo",
    skillName: "Vite",
    skillLevel: 80,
    link: "https://vite.dev/",
  },
  {
    id: 6,
    imgFileName: "zod.svg",
    imgAlt: "zod logo",
    skillName: "Zod",
    skillLevel: 80,
    link: "https://zod.dev/",
  },

  {
    id: 7,
    imgFileName: "bootstrap.svg",
    imgAlt: "bootstrap logo",
    skillName: "Bootstrap",
    skillLevel: 75,
    link: "https://getbootstrap.com/",
  },

  {
    id: 8,
    imgFileName: "tailwind.svg",
    imgAlt: "tailwind logo",
    skillName: "Tailwind",
    skillLevel: 75,
    link: "https://tailwindcss.com/",
  },
  {
    id: 9,
    imgFileName: "ejs.svg",
    imgAlt: "ejs logo",
    skillName: "Ejs",
    skillLevel: 75,
    link: "https://ejs.co/",
  },
  {
    id: 10,
    imgFileName: "html.svg",
    imgAlt: "html logo",
    skillName: "HTML",
    skillLevel: 85,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: 11,
    imgFileName: "css.svg",
    imgAlt: "css logo",
    skillName: "CSS",
    skillLevel: 90,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
];

export const backEndTechs: SkillsType[] = [
  {
    id: 0,
    imgFileName: "dot_net_core.svg",
    imgAlt: "dot net core logo",
    skillName: "ASP.NET Core",
    skillLevel: 65,
    link: "https://www.mongodb.com/",
  },
  {
    id: 1,
    imgFileName: "node.svg",
    imgAlt: "node logo",
    skillName: "node",
    skillLevel: 40,
    link: "https://nodejs.org/en/learn",
  },
  {
    id: 2,
    imgFileName: "firebase.svg",
    imgAlt: "firebase logo",
    skillName: "Firebase",
    skillLevel: 40,
    link: "https://firebase.google.com/",
  },
  {
    id: 3,
    imgFileName: "mysql.svg",
    imgAlt: "mysql logo",
    skillName: "MySQL",
    skillLevel: 75,
    link: "https://www.mysql.com/",
  },
  {
    id: 4,
    imgFileName: "mongodb.svg",
    imgAlt: "mongodb logo",
    skillName: "MongoDB",
    skillLevel: 40,
    link: "https://www.mongodb.com/",
  },
  {
    id: 5,
    imgFileName: "postgresql.svg",
    imgAlt: "postgresql logo",
    skillName: "PostgreSQL",
    skillLevel: 75,
    link: "https://www.mongodb.com/",
  },
  {
    id: 6,
    imgFileName: "drupal.svg",
    imgAlt: "drupal logo",
    skillName: "Drupal",
    skillLevel: 65,
    link: "https://www.drupal.org/",
  },
  {
    id: 7,
    imgFileName: "symfony.svg",
    imgAlt: "symfony logo",
    skillName: "Symfony",
    skillLevel: 50,
    link: "https://symfony.com/",
  },
  {
    id: 8,
    imgFileName: "codeigniter.svg",
    imgAlt: "codeigniter logo",
    skillName: "Codeigniter",
    skillLevel: 70,
    link: "https://www.codeigniter.com/",
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
    imgFileName: "linux.svg",
    imgAlt: "linux logo",
    skillName: "Linux",
    skillLevel: 55,
    link: "https://www.linux.com/",
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
    imgFileName: "azure.svg",
    imgAlt: "azure logo",
    skillName: "Azure",
    skillLevel: 30,
    link: "https://azure.microsoft.com/en-us/",
  },
  {
    id: 4,
    imgFileName: "aws.svg",
    imgAlt: "aws logo",
    skillName: "Aws",
    skillLevel: 30,
    link: "https://aws.amazon.com/",
  },

  {
    id: 5,
    imgFileName: "lando.svg",
    imgAlt: "lando logo",
    skillName: "Lando",
    skillLevel: 40,
    link: "https://lando.dev/",
  },
];
