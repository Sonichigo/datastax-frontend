import React from "react";
import "./Postfeed.css";
import { Avatar, Button } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";

function PostBox() {
  const [caption, setCaption] = useState('');
  const [postImg, setPostImg] = useState('');
  const [points, setPoints] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [username, setUsername] = useState('');
  const [data,setData] =useState(false);

  const handleSubmit = () => {
    const data = {
      caption:caption, 
      points:points,
      postImg:postImg, 
      profilePicture:profilePicture, 
      username:username,
    }
      axios.post('https://datastax-hackathon-api.herokuapp.com/',data)
          .then(response => setData(response.data));
          setCaption(' ');
          setPoints(' ');
          setPostImg(' ');
          setProfilePicture(' ');
          setCaption(' ');
        }

  return (
    <div className="postBox">
      <form>
        <div className="postBox__input">
          <Avatar src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg" 
          value={profilePicture}
          onChange={e => setProfilePicture(e.target.value)}/>
          <input
            placeholder="What's happening?"
            type="text"
            value={caption}
            onChange={e => setCaption(e.target.value)}
          />
        </div>
        <input
        className="postBox__imageInput"
          placeholder="Points"
          type="text"
          value={points}
          onChange={e => setPoints(e.target.value)}
        />
        <input
          className="postBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
          value={postImg}
          onChange={e => setPostImg(e.target.value)}
        />
        <input
        className="postBox__imageInput"
          placeholder="Set Profile Picture"
          type="text"
          value={profilePicture}
          onChange={e => setProfilePicture(e.target.value)}
        />
        <input
        className="postBox__imageInput"
          placeholder="Username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <Button
          type="submit"
          className="postBox__postButton"
          onClick={handleSubmit}>
          Post
        </Button>
      </form>
    </div>
  );
}

export default PostBox;