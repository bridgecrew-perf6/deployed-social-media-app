import React from "react";
import "./Leftbar.css";
import RssFeed from "@material-ui/icons/RssFeed";
import Chat from "@material-ui/icons/Chat";
import PlayCircle from "@material-ui/icons/PlayCircleFilled";
import Group from "@material-ui/icons/Group";
import Bookmark from "@material-ui/icons/Bookmark";
import HelpOutline from "@material-ui/icons/HelpOutline";
import WorkOutline from "@material-ui/icons/WorkOutline";
import Event from "@material-ui/icons/Event";
import School from "@material-ui/icons/School";
import { Users } from "../dummyData";

function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbar-wrapper">
        <li>
          <RssFeed className="icon" />
          <span>Feed</span>
        </li>
        <li>
          <Chat className="icon" />
          <span>Chats</span>
        </li>
        <li>
          <PlayCircle className="icon" />
          <span>Videos</span>
        </li>
        <li>
          <Group className="icon" />
          <span>Groups</span>
        </li>
        <li>
          <Bookmark className="icon" />
          <span>Bookmark</span>
        </li>
        <li>
          <HelpOutline className="icon" />
          <span>Questions</span>
        </li>
        <li>
          <WorkOutline className="icon" />
          <span>Jobs</span>
        </li>
        <li>
          <Event className="icon" />
          <span>Events</span>
        </li>
        <li>
          <School className="icon" />
          <span>Courses</span>
        </li>
      </div>
    </div>
  );
}

export default Leftbar;
