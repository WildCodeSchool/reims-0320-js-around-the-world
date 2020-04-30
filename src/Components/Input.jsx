import React from "react";
import { Input } from "reactstrap";

const TextInput = ({ setText }) => (
  <Input placeholder="Exemple: France = FR" onChange={event => setText(event.target.value)} type="text" />
);

export default TextInput;