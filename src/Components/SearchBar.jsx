import React from "react";
import Input from "./Input";
import { InputGroup, InputGroupAddon, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";
import "./NavBar.css";

const SearchBar = ({ setKeywords, onSearch }) => {
  return (
    <div>
      <InputGroup>
        <Input setText={setKeywords} />
        <InputGroupAddon addonType="append">
          <Button color="secondary" onClick={onSearch}>
            <FontAwesomeIcon icon={faSearchLocation} />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
