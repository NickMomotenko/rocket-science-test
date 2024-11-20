import React, { useContext, useEffect, useRef } from "react";
import { ReactSVG } from "react-svg";

import { Avatar } from "../Avatar";
import { Rating } from "./../Rating";
import { Input } from "../Input";
import { ChatItem } from "../ChatItem";

import { AuthDataContext } from "./../../context/AuthData";

import { useInput } from "../../hooks/useInput";

import chatUserAvatar from "../../assets/avatar.png";
import sendIcon from "../../assets/send.svg";
import flagIcon from "../../assets/flag.svg";

import "./styles.scss";

export const ChatPaper = ({ addMessage, users, data }) => {
  const { authUser } = useContext(AuthDataContext);

  const { value, handleChange, clearValue } = useInput();

  let meAdmin =
    authUser?.id === users?.find((user) => user.role === "admin")?.id;

  let authUserData = users.find((user) => user?.id === authUser?.id);
  let client = users.find((user) => user?.id !== authUser?.id);

  const bodyRef = useRef();

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [data]);

  const handleAddMessage = () => {
    let messageData = {
      id: new Date().getTime(),
      author: {
        ...authUserData,
      },
      text: value,
    };

    addMessage(messageData);
    clearValue();
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__user-avatar">
          <Avatar url={chatUserAvatar} size={44} />
        </div>
        <div className="chat__user-block">
          <div className="chat__user-fullname">
            {meAdmin ? client.fullname : "Администратор"}
          </div>
          <div className="chat__user-job">
            <div className="chat__user-job-icon">
              <ReactSVG src={flagIcon} />
            </div>
            job
          </div>
        </div>
        {meAdmin && (
          <div className="chat__user-rating">
            <Rating value={client?.rating} />
          </div>
        )}
      </div>
      <div className="chat__body" ref={bodyRef}>
        {data?.map((chat) => {
          return <ChatItem key={chat.id} me={authUserData} {...chat} />;
        })}
      </div>
      <div className="chat__bottom">
        <div className="chat__bottom-avatar">
          <Avatar url={authUserData?.avatar} size={44} />
        </div>
        <div className="chat__bottom-input">
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Напишите сообщение..."
          />
        </div>
        <div className="chat__bottom-send-btn">
          <button onClick={handleAddMessage}>
            <ReactSVG src={sendIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};
