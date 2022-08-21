import React from "react";
import "./ChatItem.css";

const ChatItem = ({ chat, onChatItemSelected }) => {
  return (
    <>
      <li className="chat" onClick={() => onChatItemSelected(chat)}>
        <img className="chat-image" src={chat.imageUrl} alt={chat.name} />
        <p className="chat-text">{chat.title}</p>
        <p className="chat-date">{chat.createdAt}</p>
        <p className="chat-message">{chat.latestMessageText}</p>
      </li>
      <hr />
    </>
  );
};

export default ChatItem;
