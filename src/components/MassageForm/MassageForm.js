import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import "./MassageForm.css";

const DATE_NEW = new Date().toLocaleString();

function MassageForm({ onSubmit }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [name, setName] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [isMyMessage, setIsMyMessage] = useState(false);

  const handleChange = (event) => {
    const { value } = event.currentTarget;
    setImageUrl(imageUrl);
    setName(name);
    setMessageText(value);
    setCreatedAt(DATE_NEW);
    setIsMyMessage(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ imageUrl, name, messageText, createdAt, isMyMessage });
    setMessageText("");
    setCreatedAt("");
  };

  return (
    <form className="massageForm" onSubmit={handleSubmit}>
      <label className="labelMassageForm">
        <input
          className="inputMassageForm"
          type="text"
          value={messageText}
          placeholder="Type your message"
          onChange={handleChange}
          required
        />
      </label>
      <span className="buttonMassageForm" onClick={handleSubmit}>
        <FaTelegramPlane />
      </span>
    </form>
  );
}

export default MassageForm;
