export interface ProjeectDataBaseType {
  imgURL: string;
  imgAlt: string;
  skillIconUrl: { imgPath: string; imgAlt: string }[];
  projectName: string;
  projectDescription: string;
  gitHub: string;
  liveSite?: string;
}

export interface ProjeectDataType extends ProjeectDataBaseType {
  id: number;
}

export const projects: ProjeectDataType[] = [
  {
    id: 0,
    imgURL: "/projects_imgs/country_app.png",
    imgAlt: "project image",
    skillIconUrl: [
      { imgPath: "/skills_imgs/react.svg", imgAlt: "react" },
      { imgPath: "/skills_imgs/redux.svg", imgAlt: "react redux" },
      { imgPath: "/skills_imgs/bootstrap.svg", imgAlt: "bootstrap" },
      { imgPath: "/skills_imgs/javaScript.svg", imgAlt: "javascript" },
      { imgPath: "/skills_imgs/firebase.svg", imgAlt: "firebase" },
    ],
    projectName: "Country App",
    projectDescription:
      "This app displays some key information of all countries in cards. Clicking on each card shows detailed information about that country. Users can see all country cards and detail pages. Moreover, users can mark a country as a favorite and see all their favorite countries in the favorites section. To access the favorite feature, users are needed to be registered and logged in.",
    gitHub: "https://github.com/Bishwajitkuat/country_app_react",
    liveSite: "https://countryappreact.web.app/",
  },

  {
    id: -1,
    imgURL: "/projects_imgs/portfolio_nextjs.png",
    imgAlt: "project image",
    skillIconUrl: [
      { imgPath: "/skills_imgs/nextjs.svg", imgAlt: "nextjs" },
      { imgPath: "/skills_imgs/tailwind.svg", imgAlt: "react tailwind" },
      { imgPath: "/skills_imgs/typescript.svg", imgAlt: "typescript" },
    ],
    projectName: "Portfolio Bishwajit Das",
    projectDescription:
      "This is my personal portfolio project. Visitors can learn about me, my skills, and some of my selected projects. On the contact page, visitors can see my contacts and be able to send me messages. I have used Nextjs and TypeScript to build the app and tailwind CSS to style it.",
    gitHub: "https://github.com/Bishwajitkuat/portfolio_next_bisso",
  },

  {
    id: -2,
    imgURL: "/projects_imgs/",
    imgAlt: "project image",
    skillIconUrl: [
      { imgPath: "/skills_imgs/nextjs.svg", imgAlt: "nextjs" },
      { imgPath: "/skills_imgs/tailwind.svg", imgAlt: "react tailwind" },
      { imgPath: "/skills_imgs/typescript.svg", imgAlt: "typescript" },
      { imgPath: "/skills_imgs/zod.svg", imgAlt: "zod" },
      { imgPath: "/skills_imgs/drupal.svg", imgAlt: "drupal" },
      { imgPath: "/skills_imgs/docker.svg", imgAlt: "docker" },
      { imgPath: "/skills_imgs/lando.svg", imgAlt: "lando" },
      { imgPath: "/skills_imgs/mysql.svg", imgAlt: "mysql" },
    ],
    projectName: "Wunder Website",
    projectDescription:
      "This is an ongoing project where me and my four classmates working together in collaboration with Wunder (https://wunder.io/) to build a website for Wunder. This project is part of the 'Software Development Team Project 2' course at Business College Helsinki. The project is Decoupled Drupal in nature where we are using Nextjs, Tailwind CSS, TypeScript, and Zod in the frontend and Drupal in the backend for content management.",
    gitHub: "https://github.com/stacknatic/next-js-drupal",
  },

  {
    id: 1,
    imgURL: "/projects_imgs/bard_blog.png",
    imgAlt: "project image",
    skillIconUrl: [
      { imgPath: "/skills_imgs/react.svg", imgAlt: "react" },
      { imgPath: "/skills_imgs/css.svg", imgAlt: "CSS" },
      { imgPath: "/skills_imgs/docker.svg", imgAlt: "docker" },
      { imgPath: "/skills_imgs/php.svg", imgAlt: "PHP" },
      { imgPath: "/skills_imgs/mysql.svg", imgAlt: "mysql logo" },
    ],
    projectName: "Bird Blog",
    projectDescription:
      "This a simple bird blog website. I have used PHP to create the backend where API routes are created to read, write, update, and delete posts. Data are stored in MySQL database. In the frontend, I have used React where data from the backend is fetched through Axios and rendered into the browser.",
    gitHub:
      "https://github.com/Bishwajitkuat/react_php_fullstack_bird_blog.git",
  },
  {
    id: 2,
    imgURL: "/projects_imgs/recipe_app.png",
    imgAlt: "project image",
    skillIconUrl: [
      { imgPath: "/skills_imgs/react.svg", imgAlt: "react" },
      { imgPath: "/skills_imgs/css.svg", imgAlt: "CSS" },
    ],
    projectName: "Recipe App",
    projectDescription:
      "It's a CRUD app for recipes. Users can view all the previous recipes, create new recipes, update existing recipes, and delete recipes. I have used JSON Server for the backend and React and Axios in the frontend.",
    gitHub: "https://github.com/Bishwajitkuat/recipe_app_react.git",
  },

  {
    id: 3,
    imgURL: "/projects_imgs/portfolio_html.png",
    imgAlt: "project image",
    skillIconUrl: [
      { imgPath: "/skills_imgs/html.svg", imgAlt: "html logo" },
      { imgPath: "/skills_imgs/css.svg", imgAlt: "CSS logo" },
    ],
    projectName: "Portfolio | HTML & CSS",
    projectDescription:
      "It's a dummy personal portfolio of a person. I have only used HTML and CSS to build this site. This website is responsive.",
    gitHub: "https://github.com/Bishwajitkuat/portfolio_assignment_Margit.git",
    liveSite: "https://public.bc.fi/s2300096/portfolio_assignment/",
  },
  {
    id: 4,
    imgURL: "/projects_imgs/pokedex_app.png",
    imgAlt: "project image",
    skillIconUrl: [
      { imgPath: "/skills_imgs/javaScript.svg", imgAlt: "javascript logo" },
      { imgPath: "/skills_imgs/html.svg", imgAlt: "html logo" },
      { imgPath: "/skills_imgs/css.svg", imgAlt: "CSS logo" },
    ],
    projectName: "Pokedex | JS, HTML & CSS",
    projectDescription:
      "Users can filter Pokemon by generation, type, and name, and all the filtered Pokemon are presented into nice-looking cards. The app is responsive as well. I have used only JavaScript, HTML, and CSS to build this app. Data is fetched from  PokeApi.",
    gitHub: "https://github.com/Bishwajitkuat/pokedex.git",
    liveSite: "https://public.bc.fi/s2300096/pokedex/",
  },
  {
    id: 5,
    imgURL: "/projects_imgs/speed_game.png",
    imgAlt: "project image",
    skillIconUrl: [
      { imgPath: "/skills_imgs/javaScript.svg", imgAlt: "javascript logo" },
      { imgPath: "/skills_imgs/html.svg", imgAlt: "html logo" },
      { imgPath: "/skills_imgs/css.svg", imgAlt: "CSS logo" },
    ],
    projectName: "Speed Game | JS, HTML & CSS",
    projectDescription:
      "When you start the game, it will give options, if you click on the correct option, the game will continue and give a new option. From the setting icon, the game speed can be changed.",
    gitHub: "https://github.com/Bishwajitkuat/pokedex.git",
    liveSite: "https://public.bc.fi/s2300096/speed__game/",
  },
  {
    id: 6,
    imgURL: "/projects_imgs/portfolio_drupal.png",
    imgAlt: "project image",
    skillIconUrl: [
      { imgPath: "/skills_imgs/drupal.svg", imgAlt: "drupal logo" },
      { imgPath: "/skills_imgs/css.svg", imgAlt: "CSS logo" },
      { imgPath: "/skills_imgs/docker.svg", imgAlt: "docker logo" },
      { imgPath: "/skills_imgs/lando.svg", imgAlt: "lando logo" },
      { imgPath: "/skills_imgs/mysql.svg", imgAlt: "mysql logo" },
    ],
    projectName: "Dummy Portfolio | Drupal",
    projectDescription:
      "This is a dummy portfolio project with durpal10 and it is part of my Drupal course assignment. I have tried to implement several aspects of my learning of Drupal such as custom content type, display management of content type, creation of views, block, taxonomy terms, etc.",
    gitHub: "https://github.com/Bishwajitkuat/portfolio-project-drupal10.git",
  },
];
