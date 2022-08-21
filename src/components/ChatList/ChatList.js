import React from "react";
import ChatItem from "../ChatItem";
import "./ChatList.css";

const ChatList = ({
  messages,
  chats,
  onChatItemSelected,
}) => {
  const chatItems = chats.map((chat) => {
   
    return (
      <ChatItem
        key={chat.id}
        onChatItemSelected={onChatItemSelected}
        messages={messages}
        chat={chat}
      />
    );
  });

  return <ul className="chat-list">{chatItems}</ul>;
};

export default ChatList;
