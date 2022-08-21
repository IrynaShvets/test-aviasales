import { useState, useEffect, useMemo } from "react";
import { nanoid } from "nanoid";
import Search from "../Search";
import MassageForm from "../MassageForm";
import ChatTitle from "../ChatTitle";
import ChatContent from "../ChatContent";
import ChatList from "../ChatList";
import { listChats } from "../../listChats";
import { api } from "../../services/api";
import { useLocalStorage } from "../../helpers/use-local-storage";
import "./AppBar.css";

function AppBar() {
  const [messages, setMessages] = useLocalStorage("messages", []);
  const [filter, setFilter] = useState("");
  const [chats, setChats] = useState(listChats);
  const [selectedChat, setSelectedChat] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChat = async () => {
      setLoading(true);
      try {
        const { value } = await api();
        setTimeout(() => {
          setMessages(value);
        }, 10000);
      } catch {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchChat();
  }, [setMessages, error]);

  const chatChanged = (chats) => {
    setSelectedChat(chats);
  };

  const addMassage = ({
    imageUrl,
    name,
    messageText,
    createdAt,
    isMyMessage,
  }) => {
    const nextMessage = {
      id: nanoid(),
      imageUrl,
      name,
      messageText,
      createdAt,
      isMyMessage,
    };

    setSelectedChat((selectedChat) => {
      return setChats((chats) => [
        [...selectedChat.messages, nextMessage],
        ...chats,
      ]);
    });
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getChat = useMemo(() => {
    return chats.filter((chat) => chat.title?.toLowerCase().includes(filter));
  }, [filter, chats]);

  return (
    <div className="container">
      <Search value={filter} onChange={changeFilter} />
      <ChatTitle selectedChat={selectedChat} />
      <div className="chat-list">
        <h1 className="chat-title">Chats</h1>

        <ChatList
          onChatItemSelected={chatChanged}
          chats={getChat}
          selectedChat={selectedChat}
        />
      </div>
      <div className="chat-message-list">
        {selectedChat && <ChatContent selectedChat={selectedChat} />}
      </div>
      <div className="new-message-container"></div>
      <div className="container-massage-form">
        <MassageForm onSubmit={addMassage} />
      </div>
    </div>
  );
}

export default AppBar;
