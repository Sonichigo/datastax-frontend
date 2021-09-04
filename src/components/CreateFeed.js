import React from "react";
import "./CreateFeed.css";
import Post from "./Post";
import PostBox from "./Postfeed";
import FlipMove from "react-flip-move";
import Feed from "../data/feed";

const CreateFeed = () => {
  return (
    <React.Fragment>
      <div className="feed custom">
        <div className="feed__header">
          <h2>Home</h2>
        </div>

        <PostBox />

        <FlipMove>
          {Feed.map((data, key) => (
            <Post
              key={key}
              username={data.username}
              verified="True"
              text={data.caption}
              image={data.postImg}
              avatar={data.profilePicture}
            />
          ))}
        </FlipMove>
      </div>
    </React.Fragment>
  );
};

export default CreateFeed;
