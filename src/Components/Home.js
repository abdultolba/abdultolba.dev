import React from "react";
import Typewriter from "typewriter-effect";

import Style from "./Home.module.scss";
import classNames from "classnames";
import { info } from "../Info/Info";

export default function Home() {
  const firstNameStyle = {
    background: info.gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  let bio = info.miniBio;

  function createList() {
    let results = [];
    for (let i = 0; i < bio.length; i++) {
      let value = bio[i];
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

  let socials = info.socials;

  function socialList() {
    let results = [];
    for (let i = 0; i < socials.length; i++) {
      let value = socials[i];
      results.push(<a key={i} href={value[0]}>{value[1]}</a>);
    }
    return results;
  }

  return (
    <main>
      <div
        className={classNames(Style.avatar, Style.shadowed)}
        style={{ background: info.gradient }}
      >
        <img src={info.selfPortrait} alt="self" className={Style.mainImg} />
      </div>
      <div className={Style.mainText}>
        <h1>
          <span aria-label="emoji" role="img">
            👋🏻
          </span>{" "}
          Hi, I'm <span style={firstNameStyle}>{info.firstName}</span>, a
        </h1>
        <h2>
          <Typewriter
            options={{
              delay: 60,
              strings: info.positions,
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <ul>{createList()}</ul>
        <div className={Style.socials}>{socialList()}</div>
      </div>
    </main>
  );
}
