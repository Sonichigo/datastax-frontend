import React from "react";
import { useState } from "react";
import questData from "../data/quests";
import Quest from "./Quest";
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
          // <li className="checked">
          //   {/* <input type="checkbox" /> */}
          //   <Checkbox checked={checked} onChange={handleChange} />
          //   <label>
          //     <span className="item-name">{quest}</span>
          //   </label>
          // </li>
          <Quest data={quest} />
        ))}
      </ul>
    </div>
  );
};

export default Quests;
