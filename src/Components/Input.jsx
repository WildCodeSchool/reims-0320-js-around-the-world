import React from "react";

const TextInput = ({ setText }) => (
  <input  id="SearchBar" onChange={event => setText(event.target.value)} type="text" />
);

export default TextInput;