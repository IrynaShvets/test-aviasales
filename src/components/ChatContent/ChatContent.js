import React from "react";
import "./ChatContent.css";

const ChatContent = ({ selectedChat }) => {
  let chatContents = null;

  if (selectedChat) {
    chatContents = (
      <>
        {selectedChat.messages && (
          <ul>
            {selectedChat.messages.map(
              ({ imageUrl, name, messageText, createdAt, id }) => (
                <li key={id}>
                  <div className="wrapper">
                    {imageUrl !== null && (
                      <img
                        className="image"
                        src={imageUrl}
                        alt={name}
                        width="50"
                        height="50"
                      />
                    )}
                    <p className="message">{messageText}</p>
                  </div>
                  <p>{createdAt}</p>
                </li>
              )
            )}
          </ul>
        )}
      </>
    );
  }

  return <div className="chat-contents">{chatContents}</div>;
};

export default ChatContent;
