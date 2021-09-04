import React from "react";
import { useState } from "react";
import "./SideBar.css";
import profileData from "../data/profile";

const SideBar = () => {
  const [profile, setProfile] = useState(profileData);

  return (
    <div>
      <figure className="card">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
          alt="sample87"
        />
        <figcaption>
          <img src={profile.img} alt="profile" className="profile" />
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>
        </figcaption>
        <button>My account</button>
        <br />
        <button>Logout</button>
      </figure>
    </div>
  );
};

export default SideBar;
