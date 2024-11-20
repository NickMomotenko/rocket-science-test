import React, { createContext, useState } from "react";

import { baseChatData } from "../mock/data";

export const ChatsContext = createContext();

export const ChatsProvider = ({ children }) => {
  const [chats, setChats] = useState(baseChatData);

  const addMessage = (message) => {
    let updatedChats = chats?.map((chat) => {
      let author = chat?.users.find((user) => user?.id === message?.author.id);

      return { ...chat, data: [...chat.data, { ...message, author }] };
    });

    setChats(updatedChats);
  };

  return (
    <ChatsContext.Provider value={{ chats, addMessage }}>
      {children}
    </ChatsContext.Provider>
  );
};
