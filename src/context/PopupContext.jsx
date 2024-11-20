import React, { createContext, useState } from "react";

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const openPopup = (content) => {
    setContent(content);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setContent(null);
  };

  return (
    <PopupContext.Provider value={{ isOpen, content, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};
