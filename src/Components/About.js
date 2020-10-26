import React from "react";
import Style from "./About.module.scss";
import classNames from "classnames";
import { info, colors } from "../Info/Info";

export default function About() {
  const iconClass = "fa fa-circle";

  let hobbies = info.hobbies;
  let languages = info.languages;
  let frameworks = info.frameworks;
  let tools = info.tools;

  function createHobbiesList() {
    let results = [];
    for (let i = 0; i < hobbies.length; i++) {
      let value = hobbies[i];
      results.push(
        <li key={i}>
          <span aria-label="emoji" role="img" className={Style.emoji}>
            {value[0]}
          </span>{" "}
          {value[1]}
        </li>
      );
    }
    return results;
  }

  function languagesList() {
    let results = [];
    for (let i = 0; i < languages.length; i++) {
      let value = languages[i];
      results.push(
        <li key={i}>
          {value[0]} {value[1]}
        </li>
      );
    }
    return results;
  }

  function frameworksList() {
    let results = [];
    for (let i = 0; i < frameworks.length; i++) {
      let value = frameworks[i];
      results.push(
        <li key={i}>
          {value[0]} {value[1]}
        </li>
      );
    }
    return results;
  }

  function toolsList() {
    let results = [];
    for (let i = 0; i < tools.length; i++) {
      let value = tools[i];
      results.push(
        <li key={i}>
          {value[0]} {value[1]}
        </li>
      );
    }
    return results;
  }

  return (
    <div className={Style.about}>
      <div className={classNames(Style.terminal, Style.shadowed)}>
        <div className={Style.topRow}>
          <i className={classNames(iconClass, Style.red)} />
          <i className={classNames(iconClass, Style.amber)} />
          <i className={classNames(iconClass, Style.green)} />
        </div>
        <div className={Style.window}>
          <p>
            <span style={{ color: colors[1] }}>
              {info.firstName.toLowerCase()}
              {info.lastName.toLowerCase()} $
            </span>{" "}
            cat about-{info.firstName.toLowerCase()}{" "}
          </p>
          <p>
            <span style={{ color: colors[1] }}>
              about-{info.firstName.toLowerCase()}{" "}
              <span className={Style.green}>(main)</span> ${" "}
            </span>
            {info.bio}
          </p>
        </div>
      </div>

      <div id="bot" className={classNames(Style.terminal, Style.shadowed)}>
        <div className={Style.topRow}>
          <i className={classNames(iconClass, Style.red)} />
          <i className={classNames(iconClass, Style.amber)} />
          <i className={classNames(iconClass, Style.green)} />
        </div>
        <div className={Style.window}>
          <p>
            <span style={{ color: colors[1] }}>
              {info.firstName.toLowerCase()}
              {info.lastName.toLowerCase()} $
            </span>{" "}
            cd hobbies/interests
          </p>
          <p>
            <span style={{ color: colors[1] }}>
              hobbies/interests <span className={Style.green}>(main)</span> $
            </span>{" "}
            ls
          </p>
          <ul>{createHobbiesList()}</ul>
        </div>
      </div>

      <div className={classNames(Style.terminal, Style.shadowed)}>
        <div className={Style.topRow}>
          <i className={classNames(iconClass, Style.red)} />
          <i className={classNames(iconClass, Style.amber)} />
          <i className={classNames(iconClass, Style.green)} />
        </div>
        <div className={Style.window}>
          <p>
            <span style={{ color: colors[1] }}>
              {info.firstName.toLowerCase()}
              {info.lastName.toLowerCase()} $
            </span>{" "}
            cd skills/languages
          </p>
          <p>
            <span style={{ color: colors[1] }}>
              skills/languages <span className={Style.green}>(main)</span> $
            </span>{" "}
            ls
          </p>
          <ul>{languagesList()}</ul>
          <p>
            <span style={{ color: colors[1] }}>
              skills/languages <span className={Style.green}>(main)</span> $
            </span>{" "}
            cd ../frameworks
          </p>
          <p>
            <span style={{ color: colors[1] }}>
              skills/frameworks <span className={Style.green}>(main)</span> $
            </span>{" "}
            ls
          </p>
          <ul>{frameworksList()}</ul>
          <p>
            <span style={{ color: colors[1] }}>
              skills/frameworks <span className={Style.green}>(main)</span> $
            </span>{" "}
            cd ../tools
          </p>
          <p>
            <span style={{ color: colors[1] }}>
              skills/tools <span className={Style.green}>(main)</span> $
            </span>{" "}
            ls
          </p>
          <ul>{toolsList()}</ul>
        </div>
      </div>
    </div>
  );
}
