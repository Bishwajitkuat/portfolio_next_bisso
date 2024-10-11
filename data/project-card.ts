export interface ProjeectDataBaseType {
  imgURL: string;
  imgAlt: string;
  skillIconUrl: { imgPath: string; imgAlt: string }[];
  projectName: string;
  projectDescription: string;
  gitHub?: string;
  liveSite?: string;
}

export interface ProjeectDataType extends ProjeectDataBaseType {
  id: number;
}

export const projects: ProjeectDataType[] = [
  {
    id: 0,
    imgURL: "/projects_imgs/blossom_avenue.png",
    imgAlt: "project image",
    skillIconUrl: [
      { imgPath: "/skills_imgs/typescript.svg", imgAlt: "react typescript" },
      { imgPath: "/skills_imgs/react.svg", imgAlt: "react" },
      { imgPath: "/skills_imgs/react_query.svg", imgAlt: "react_query" },
      { imgPath: "/skills_imgs/react_router.svg", imgAlt: "react_router" },
      { imgPath: "/skills_imgs/tailwind.svg", imgAlt: "tailwind" },
      { imgPath: "/skills_imgs/c_sharp.svg", imgAlt: "c_sharp" },
      { imgPath: "/skills_imgs/dot_net_core.svg", imgAlt: "dot_net_core" },
      { imgPath: "/skills_imgs/postgresql.svg", imgAlt: "postgresql" },
    ],
    projectName: "Blossom Avenue",
    projectDescription:
      "It is a full-stack project of a flower shop e-commerce application designed to manage and streamline various business operations, including user management, product management, and order processing. The backend take care of all the business logics and operations and the front end render user interface. The communication between front end and backend is performed with RESTful API. The system supports three types of users: Admin, Employee, and Customer and authentication and authorization are managed by jwt access tokens and refresh tokens. Authenticated customers can manage profile, cart and place order, employees can manage products and orders and admins can manage users.",
    gitHub:
      "https://github.com/Bishwajitkuat/BlossomAvenue_FullStack_Frontend_React",
    liveSite: "https://blossomavenue.vercel.app/",
  },
  {
    id: 1,
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
    id: 1,
    imgURL: "/projects_imgs/uscraper.png",
    imgAlt: "project image",
    skillIconUrl: [
      { imgPath: "/skills_imgs/typescript.svg", imgAlt: "typescript" },
      { imgPath: "/skills_imgs/react.svg", imgAlt: "react" },
      {
        imgPath: "/skills_imgs/react_router.svg",
        imgAlt: "react router",
      },
      { imgPath: "/skills_imgs/react_query.svg", imgAlt: "react query" },
      { imgPath: "/skills_imgs/tailwind.svg", imgAlt: "tailwind" },
      { imgPath: "/skills_imgs/vite.svg", imgAlt: "vite" },
      { imgPath: "/skills_imgs/php.svg", imgAlt: "php" },
      { imgPath: "/skills_imgs/codeigniter.svg", imgAlt: "codeigniter" },
      { imgPath: "/skills_imgs/mysql.svg", imgAlt: "mysql" },
    ],
    projectName: "Uscraper",
    projectDescription:
      "Uscraper is a web-based tool to extract emails by various techniques like website crawl, URL crawl, search in Google/Bing, and search in txt file. It has the ability to scrape encoded email. During my full-stack development Internship at Unelma Platforms Oy, I worked as a part of a team that was responsible for upgrading the service from Codeigniter 3 to Codeigniter 4 at backend and React at the frontend where backend serves RESTful API and frontend renders user interface.",
    // gitHub: "https://github.com/Bishwajitkuat/country_app_react",
    // liveSite: "https://countryappreact.web.app/",
  },
  {
    id: 2,
    imgURL: "/projects_imgs/react_pizzas.png",
    imgAlt: "project image",
    skillIconUrl: [
      { imgPath: "/skills_imgs/typescript.svg", imgAlt: "typescript" },
      { imgPath: "/skills_imgs/react.svg", imgAlt: "react" },
      { imgPath: "/skills_imgs/redux.svg", imgAlt: "react redux" },
      { imgPath: "/skills_imgs/tailwind.svg", imgAlt: "tailwind" },
    ],
    projectName: "React Pizza",
    projectDescription:
      "A website for ordering pizzas. Users can add pizzas to the cart and adjust item numbers from the cart. Finally, place an order. After placing an order, users will be redirected to the order status page. I have used 'react-fast-pizza-api' API for backend functionalities. The app is hosted at Vercel.",
    gitHub: "https://github.com/Bishwajitkuat/react_pizzas.git",
    liveSite: "https://react-pizzas-bisso.vercel.app/",
  },
  {
    id: 3,
    imgURL: "/projects_imgs/express_shop.png",
    imgAlt: "project image",
    skillIconUrl: [
      { imgPath: "/skills_imgs/javaScript.svg", imgAlt: "javascript icon" },
      { imgPath: "/skills_imgs/node.svg", imgAlt: "nodejs icon" },
      { imgPath: "/skills_imgs/ejs.svg", imgAlt: "ejs icon" },
      { imgPath: "/skills_imgs/tailwind.svg", imgAlt: "tailwind icon" },
      { imgPath: "/skills_imgs/zod.svg", imgAlt: "zod icon" },
      { imgPath: "/skills_imgs/mongodb.svg", imgAlt: "mongodb icon" },
    ],
    projectName: "Express Shop",
    projectDescription:
      "It is a Full stuck CRUD app built with Nodejs, Express, Ejs, and MongoDB. This app is a website for a C2C business. Users can create Their own accounts and list products to sell and buy products from others. They can update or delete their listing from the admin route. If a user forgets their password, they can reset the password through the email address they have used during registration. All the user inputs and params values come to the server and go through Zod validation. If the validations fail users are given feedback.",
    gitHub: "https://github.com/Bishwajitkuat/express_shop.git",
    // liveSite: "https://express-shop-mx2o.onrender.com",
  },

  {
    id: 4,
    imgURL: "/projects_imgs/portfolio_nextjs.png",
    imgAlt: "project image",
    skillIconUrl: [
      { imgPath: "/skills_imgs/nextjs.svg", imgAlt: "nextjs" },
      { imgPath: "/skills_imgs/typescript.svg", imgAlt: "typescript" },
      { imgPath: "/skills_imgs/zod.svg", imgAlt: "zod" },
      { imgPath: "/skills_imgs/tailwind.svg", imgAlt: "react tailwind" },
    ],
    projectName: "Portfolio Bishwajit Das",
    projectDescription:
      "This is my personal portfolio project. Visitors can learn about me, my skills, and some of my selected projects. On the contact page, visitors can see my contacts and be able to send me messages. I have used Nextjs and TypeScript to build the app and tailwind CSS to style it.",
    gitHub: "https://github.com/Bishwajitkuat/portfolio_next_bisso",
    liveSite: "https://bisso-portfolio.vercel.app/",
  },

  {
    id: 5,
    imgURL: "/projects_imgs/wunder_website.png",
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

  // {
  //   id: 6,
  //   imgURL: "/projects_imgs/bard_blog.png",
  //   imgAlt: "project image",
  //   skillIconUrl: [
  //     { imgPath: "/skills_imgs/react.svg", imgAlt: "react" },
  //     { imgPath: "/skills_imgs/css.svg", imgAlt: "CSS" },
  //     { imgPath: "/skills_imgs/docker.svg", imgAlt: "docker" },
  //     { imgPath: "/skills_imgs/php.svg", imgAlt: "PHP" },
  //     { imgPath: "/skills_imgs/mysql.svg", imgAlt: "mysql logo" },
  //   ],
  //   projectName: "Bird Blog",
  //   projectDescription:
  //     "This a simple bird blog website. I have used PHP to create the backend where API routes are created to read, write, update, and delete posts. Data are stored in MySQL database. In the frontend, I have used React where data from the backend is fetched through Axios and rendered into the browser.",
  //   gitHub:
  //     "https://github.com/Bishwajitkuat/react_php_fullstack_bird_blog.git",
  // },
  // {
  //   id: 7,
  //   imgURL: "/projects_imgs/recipe_app.png",
  //   imgAlt: "project image",
  //   skillIconUrl: [
  //     { imgPath: "/skills_imgs/react.svg", imgAlt: "react" },
  //     { imgPath: "/skills_imgs/css.svg", imgAlt: "CSS" },
  //   ],
  //   projectName: "Recipe App",
  //   projectDescription:
  //     "It's a CRUD app for recipes. Users can view all the previous recipes, create new recipes, update existing recipes, and delete recipes. I have used JSON Server for the backend and React and Axios in the frontend.",
  //   gitHub: "https://github.com/Bishwajitkuat/recipe_app_react.git",
  // },

  {
    id: 8,
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
    // liveSite: "https://public.bc.fi/s2300096/portfolio_assignment/",
  },
  {
    id: 9,
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
    // liveSite: "https://public.bc.fi/s2300096/pokedex/",
  },
  {
    id: 10,
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
    // liveSite: "https://public.bc.fi/s2300096/speed__game/",
  },
  {
    id: 11,
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
