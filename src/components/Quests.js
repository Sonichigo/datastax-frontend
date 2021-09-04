import React from "react";
import { useState } from "react";
import questData from "../data/quests";
import "./Quests.css";

const Quests = () => {
  const [quests, setQuests] = useState(questData);

  return (
    <div className="main">
      <div className="header">
        <h1>Quests</h1>
      </div>
      <ul>
        {quests.day1.map((quest, key) => (
          <li className="checked">
            <input type="checkbox" />
            <label>
              <div className="checkbox">
                <span className="fa fa-check"></span>
              </div>
              <span className="item-name">{quest}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quests;
