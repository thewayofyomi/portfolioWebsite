import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  jquery,
  javascript,
  reactjs,
  csharp,
  dotnet,
  sql,
  git,
  typescript,
  tailwind,
  nextjs,
  java,
  yellowbrick,
  islandvariety,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "jQuery",
    icon: jquery,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: ".NET",
    icon: dotnet,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Full Stack Software Engineer",
    company_name: "Yellowbrick Financial",
    icon: yellowbrick,
    iconBg: "#000000",
    date: "Apr 2023 to Present",
    points: [
      "Created a dynamic client-response based form using React.js that allows financial advisors to accurately capture client's insurance information by 40%.",
      "Used object-oriented programming (OOP) principles to design and implement C# code that is modular, reusable, and maintainable.",
      "Developed RESTful APIs and web services using ASP.NET Web API and ASP.NET Core for seamless integration with front-end systems.",
      "Engineered complex stored procedures in SQL using Joins, Primary Keys, Foreign keys, and Pagination to capture and display data using T-SQL while testing them with Postman.",
      "Implemented and maintained application data integrity through meticulous front-end validation, back-end model binding, normalization for stored procedures in the SQL database.",
      "Adopted content management techniques, such as sorting, filtering, routing, and mapping components, to enhance the user experience.",
      "Utilized Git and GitHub for source and version control, ensuring efficient collaboration and code management.",
      "Established applications within a team using Agile methodologies, such as daily stand-ups, code reviews, and code talks, to facilitate effective communication and collaboration within the team.",
    ],
  },
  {
    title: "Front End Software Engineer",
    company_name: "Island Variety",
    icon: islandvariety,
    iconBg: "#000000",
    date: "Oct 2021 - Dec 2022",
    points: [
      "Built and optimized HTML, CSS, and JavaScript code to create user-friendly and responsive interfaces.",
      "Utilized React.js to build single-page applications with seamless user experience.",
      "Created web pages that render correctly on a variety of devices and window or screen sizes.",
      "Integrated RESTful APIs into applications to fetch and display data, leveraging AJAX for asynchronous data exchange.",
      "Implemented Scrum methodologies to manage project timelines in collaboration with the business owner, ensuring timely delivery of their web application.",
      "Worked with the business owner to implement visual concepts and ensure brand consistency.",
      "Stayed up-to-date on the latest front-end development technologies and trends.",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
