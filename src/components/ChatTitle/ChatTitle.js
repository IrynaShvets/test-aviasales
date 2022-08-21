import React from "react";
import "./ChatTitle.css";

const ChatTitle = ({ selectedChat }) => {
  let chatTitleContents = null;

  if (selectedChat) {
    chatTitleContents = (
      <>
        <img
          className="image-chat-title"
          src={selectedChat.imageUrl}
          alt={selectedChat.name}
          width="50"
          height="50"
        />
        <h2>{selectedChat.title}</h2>
      </>
    );
  }

  return <div className="chats-title">{chatTitleContents}</div>;
};

export default ChatTitle;
