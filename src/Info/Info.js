import React from "react";
import self from "../img/self.png";

export let colors = ["rgb(1, 208, 108)", "rgb(5, 186, 199)"];

export const info = {
  firstName: "Abdulrahman",
  lastName: "Tolba",
  initials: "at",
  positions: ["Full Stack Developer", "Artist", "Writer", "Historian"],
  selfPortrait: self,
  gradient: `linear-gradient(135deg, ${colors})`,
  miniBio: [
    ["💼", "Software Engineer at Google"],
    ["💻", "Lover of Technology"],
    ["🇺🇸", "Based in Seattle, WA"],
    ["✉️", "abdultolba@gmail.com"],
  ],
  socials: [
    ["https://linkedin.com/in/abdultolba", linkedInIcon()],
    ["https://github.com/abdultolba", githubIcon()],
  ],
  bio:
    "Hello! I'm Abdulrahman. I'm a Software Engineer at Google. I studied Computer Science at Wayne State University, and I am passionate about developing secure, scalable, and accessible applications. I'm also passionate about writing, classic literature, art, community work, and advocating for mental health.",
  hobbies: [
    ["📖", "reading"],
    ["🛹", "skateboarding"],
    ["✍", "writing"],
    ["🧑‍💻", "coding"],
  ],
  languages: [
    [<i className="fab fa-js" aria-hidden="true" />, "JavaScript/TypeScript"],
    [<i className="fab fa-cuttlefish" aria-hidden="true" />, "C/C++, C#"],
    [<i className="fab fa-python" aria-hidden="true" />, "Python"],
    [<i className="fas fa-database" aria-hidden="true" />, "SQL/NoSQL"],
    [<i className="fab fa-java" aria-hidden="true" />, "Java"],
    [<i className="fab fa-html5" aria-hidden="true" />, "HTML5"],
    [<i className="fab fa-sass" aria-hidden="true" />, "SASS/CSS"],
  ],
  frameworks: [
    [<i className="fab fa-node" aria-hidden="true" />, "Node.js"],
    [<i className="fab fa-react" aria-hidden="true" />, "React"],
    [<i className="fab fa-angular" aria-hidden="true" />, "Angular"],
    [<></>, "Express.js"],
    [<></>, "Django"],
    [<></>, "Firebase"],
    [<></>, "ASP.NET"],
  ],
  tools: [
    [<i className="fab fa-git" aria-hidden="true" />, "Git"],
    [<i className="fab fa-docker" aria-hidden="true" />, "Docker"],
    [<i className="fab fa-jira" aria-hidden="true" />, "JIRA"],
    [<></>, "Heroku"],
    [<></>, "Netlify"],
    [<></>, "Azure"],
    [<></>, "CI/CD"],
  ],
  portfolio: [
    {
      title: "friend.ly - Social Media",
      liveLink: "https://friendly-social.herokuapp.com/",
      sourceLink: "https://www.github.com/abdultolba/social-mern",
    },
    {
      title: "abdultolba.dev - Portfolio",
      liveLink: "https://abdultolba.dev",
      sourceLink: "https://github.com/abdultolba/abdultolba.dev",
    },
    {
      title: "Indus [Contributor]",
      liveLink: "https://www.get-indus.com/",
      sourceLink: "#",
    },
    {
      title: "Spotify Info Stats",
      liveLink: "#",
      sourceLink: "https://github.com/abdultolba/spotify-info",
    },
  ],
};

function linkedInIcon() {
  return <i className="fa fa-linkedin" aria-hidden="true" />;
}

function githubIcon() {
  return <i className="fab fa-github" aria-hidden="true" />;
}
