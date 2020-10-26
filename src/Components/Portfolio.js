import React from "react";
import Style from "./Portfolio.module.scss";
// import mock1 from '../img/mock1.png';
import friendly from "../img/friendly.png";
import abdultolba from "../img/abdultolba.png";
import indus from "../img/indus.png";
import spotify from "../img/spotify.png";
import { info, colors } from "../Info/Info";

export default function Portfolio() {
  let portfolioInfo = info.portfolio;

  let mocks = [friendly, abdultolba, indus, spotify];

  function createGrid() {
    let results = [];
    let j = 0;
    for (let i = 0; i < portfolioInfo.length; i++) {
      results.push(
        <div key={i} className={Style.block}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={info.portfolio[i].liveLink}
          >
            <img
              alt="Project screenshot"
              className={Style.image}
              src={mocks[j++]}
            />
          </a>
          <h1>{info.portfolio[i].title}</h1>
          {i !== 2 && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={info.portfolio[i].sourceLink}
              style={{ backgroundColor: colors[1] }}
              className={Style.source}
            >
              Source Code
            </a>
          )}
        </div>
      );
    }
    return results;
  }

  return (
    <main>
      <div className={Style.projectsGrid}>{createGrid()}</div>
    </main>
  );
}
