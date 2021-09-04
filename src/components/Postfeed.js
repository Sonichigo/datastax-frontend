import React from "react";
import "./Postfeed.css";
import { Avatar, Button } from "@material-ui/core";

function PostBox() {
  return (
    <div className="postBox">
      <form>
        <div className="postBox__input">
          <Avatar src="https://imgur.com/l8rN74g" />
          <input
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          className="postBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          type="submit"
          className="postBox__postButton">
          Post
        </Button>
      </form>
    </div>
  );
}

export default PostBox;