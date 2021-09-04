import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import questData from "../data/quests";
import Quest from "./Quest";
import "./Quests.css";

const Quests = () => {
  const [quests, setQuests] = useState(questData);

  // const getQuests = async () => {
  //   try {
  //     const data = await axios
  //       .get("https://datastax-hackathon-api.herokuapp.com/tasks")
  //       .then((res) => {
  //         setQuests(res.data);
  //       });
  //     return data;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   getQuests();
  // }, []);

  return (
    <div className="main">
      <div className="header">
        <h1>Quests</h1>
      </div>
      <ul>
        {quests.day1.map((quest, key) => (
          <Quest data={quest} />
        ))}
      </ul>
    </div>
  );
};

export default Quests;
