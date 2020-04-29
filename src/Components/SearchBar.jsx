import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div>
      <InputGroup className="searchBar">
        <Input />
        <InputGroupAddon addonType="append">
          <InputGroupText>
            <FontAwesomeIcon icon={faSearchLocation} />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
