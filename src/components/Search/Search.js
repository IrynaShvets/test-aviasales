import React from "react";
import "./Search.css";

const Search = ({ value, onChange }) => (
  <div className="container-search">
    <img
      className="container-search__image"
      src="https://i.gyazo.com/b6801575823e1f2db1534e13c271362a.png"
      alt="avatar"
      width="50"
      height="50"
    />

    <label className="container-search__label">
      <input
        className="container-search__input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search or start new chat"
      />
    </label>
  </div>
);

export default Search;
