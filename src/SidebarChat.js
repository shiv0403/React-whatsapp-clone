import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>This is Room name </h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default SidebarChat;
