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

      <FlipMove>
          <Post
            key="1"
            username="Andres Blex"
            verified="True"
            text="Hey all good going"
            avatar="https://i.imgur.com/R4ikJd1.jpg"
            image="https://www.verywellfit.com/thmb/pKPO5vlndEhVh_AD3-9YtdL5uKc=/2121x1193/smart/filters:no_upscale()/GettyImages-1061745418-e91c3dd01a0f4dc3a8a80f12222a0644.jpg"
          />
          </FlipMove>
    </div>
  );
}

export default CreateFeed;
