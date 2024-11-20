import React, { useContext, useRef } from "react";

import { useClickOutside } from "../../hooks/useClickOutside";

import { PopupContext } from "../../context/PopupContext";

import "./styles.scss";

export const Popup = ({ active }) => {
  let classes = active ? "popup popup--active" : "popup";

  const popupContext = useContext(PopupContext);

  const popupContentRef = useRef();

  useClickOutside(popupContentRef, () => popupContext.closePopup());

  return (
    <div className={classes}>
      <div className="popup__content" ref={popupContentRef}>
        {popupContext.content}
      </div>
    </div>
  );
};
