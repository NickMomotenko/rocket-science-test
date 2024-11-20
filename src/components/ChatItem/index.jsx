import React from "react";

import { Avatar } from "../Avatar";

import "./styles.scss";

export const ChatItem = ({ author, me, text, created_at }) => {
  let isMe = author?.id === me?.id;

  let classes = isMe ? "chat-item me" : "chat-item";

  return (
    <div className={classes}>
      <div className="chat-item__avatar">
        <Avatar size={44} url={author?.avatar} />
      </div>
      <div className="chat-item__content">
        <div className="chat-item__text">{text}</div>
        <div className="chat-item__date">{created_at}</div>
      </div>
    </div>
  );
};
