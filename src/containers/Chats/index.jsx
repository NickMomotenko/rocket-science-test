import React, { useContext } from "react";

import { ChatPaper } from "../../components/ChatPaper";

import { ChatsContext } from "../../context/ChatContext";

import "./styles.scss";

export const Chats = () => {
  const { chats, addMessage } = useContext(ChatsContext);

  return (
    <div className="chats">
      {chats?.map((chat) => (
        <ChatPaper key={chat.chat_id} addMessage={addMessage} {...chat} />
      ))}
    </div>
  );
};
