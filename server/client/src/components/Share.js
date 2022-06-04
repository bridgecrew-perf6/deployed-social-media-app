import React, { useState } from "react";
import "./Share.css";
import { Avatar } from "@material-ui/core";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import Label from "@material-ui/icons/Label";
import Room from "@material-ui/icons/Room";
import axios from "axios";
import { AppState } from "../context/ContextProvider";

function Share() {
  const { user } = AppState();
  const [desc, setDesc] = useState("");
  const [pic, setPic] = useState("");

  const IP = process.env.REACT_APP_IMAGE_PATH;

  const shareHandle = async () => {
    // e.preventDefault();
    const data = new FormData();
    const fileName = pic.name;
    data.append("imgName", fileName);
    data.append("desc", desc);
    data.append("file", pic);

    if (!desc && !pic) {
      return alert("Please fill any input!");
    }
    try {
      const res = await axios.post("/post/create", data, {
        headers: {
          Authorization: `Bearer ${user.data.accessToken}`,
        },
      });
      console.log(res);
    } catch (error) {
      alert("post failed!");
    }
    setDesc("");
    setPic("");
  };

  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <Avatar className="avatar" src={IP + user.data.userlog?.profilePic} />
          <input
            type="text"
            placeholder={`What's in your mind ${user.data.userlog.name} ?`}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <hr />
        <form className="share-bottom">
          <div className="share-opts">
            <label htmlFor="file" className="share-opt">
              <VideoLibrary className="icon" style={{ color: "red" }} />
              <span>Photo/Video</span>
              <input
                type="file"
                id="file"
                name="file"
                accept=".png,.jpg,.jpeg"
                onChange={(e) => setPic(e.target.files[0])}
                style={{ display: "none" }}
              />
            </label>
            <div className="share-opt">
              <Label className="icon" style={{ color: "blue" }} />
              <span>Tag</span>
            </div>
            <div className="share-opt">
              <Room className="icon" style={{ color: "green" }} />
              <span>Location</span>
            </div>
            <div className="share-opt">
              <InsertEmoticon className="icon" style={{ color: "orange" }} />
              <span>Feelings</span>
            </div>

            <button type="submit" onClick={shareHandle}>
              Share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Share;
