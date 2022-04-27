import React from "react";
import self from "../img/self.png";

export let colors = ["rgb(1, 208, 108)", "rgb(5, 186, 199)"];

/**
 * Generates and returns a font awesome
 * icon for the name provided
 * @param {string} name
 * @param {string} [mainClass] the main icon class (fab, fas, fa...)
 */
export const fetchIcon = (name, mainClass = 'fab') => {
  return <i className={`${mainClass} fa-${name}`} aria-hidden="true" />
};

export const info = {
  firstName: "Abdulrahman",
  lastName: "Tolba",
  initials: "at",
  positions: ["Software Engineer", "Artist", "Photographer", "Writer"],
  selfPortrait: self,
  gradient: `linear-gradient(135deg, ${colors})`,
  miniBio: [
    ["💼", "Software Engineer at Google"],
    ["📷", "Hobbyist Photographer"],
    ["🇺🇸", "Based in Seattle, WA"],
    ["✉️", "abdultolba@gmail.com"],
  ],
  socials: [
    ["https://linkedin.com/in/abdultolba", fetchIcon('linkedin', 'fa')],
    ["https://github.com/abdultolba", fetchIcon('github')],
  ],
  bio:
    "Hello! I'm Abdulrahman. I'm a Software Engineer at Google. I studied Computer Science at Wayne State University, and I am passionate about developing secure, scalable, and accessible applications. I'm also passionate about writing, classic literature, art, community work, and advocating for mental health.",
  hobbies: [
    ["📷", "photographing"],
    ["📖", "reading"],
    ["🛹", "skateboarding"],
    ["✍", "writing"],
    ["🧑‍💻", "coding"],
  ],
  languages: [
    [fetchIcon('js'), "JavaScript/TypeScript"],
    [fetchIcon('cuttlefish'), "C/C++, C#"],
    [<></>, "Go"],
    [fetchIcon('python'), "Python"],
    [fetchIcon('database', 'fas'), "SQL/NoSQL"],
    [fetchIcon('java'), "Java"],
    [fetchIcon('html5'), "HTML5"],
    [fetchIcon('sass'), "SASS/CSS"],
  ],
  frameworks: [
    [fetchIcon('node'), "Node.js"],
    [fetchIcon('react'), "React"],
    [fetchIcon('angular'), "Angular"],
    [<></>, "Express.js"],
    [<></>, "Django"],
    [<></>, "Firebase"],
  ],
  tools: [
    [fetchIcon('git'), "Git"],
    [fetchIcon('docker'), "Docker"],
    [fetchIcon('jira'), "JIRA"],
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
