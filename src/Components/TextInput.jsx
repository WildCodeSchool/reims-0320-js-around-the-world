import React from "react";
import "./NavBar.css";

const TextInput = ({ setText }) => (
  <input onChange={event => setText(event.target.value)} type="text" />
);

export default TextInput;