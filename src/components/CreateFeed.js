import React from "react";
import './CreateFeed.css'
import Post from './Post'
import PostBox from "./Postfeed";
import FlipMove from "react-flip-move";

const CreateFeed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <PostBox />

      <FlipMove/>
          <Post
            key="1"
            username="Andres Blex"
            verified="True"
            text="Hey all good going"
            avatar="https://i.imgur.com/R4ikJd1.jpg"
            image="https://imgur.com/l8rN74g"
          />
    </div>
  );
}

export default CreateFeed;
