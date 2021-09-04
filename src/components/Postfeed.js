import React from "react";
import "./Postfeed.css";
import { Avatar, Button } from "@material-ui/core";

function PostBox() {
  return (
    <div className="postBox">
      <form>
        <div className="postBox__input">
          <Avatar src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg" />
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