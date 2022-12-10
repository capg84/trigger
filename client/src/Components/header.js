import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../Assets/Styles/index.css";
import { useQuery } from "@apollo/client";
import Auth from "../Utils/auth";

// HTML for footer which is imported in App.js
export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [searchValue, setSearchValue] = useState();
  // called when the submit button is clicked
  const searchHandler = function (searchValue) {
    console.log(searchValue);


    let actualInput = "";
    if(searchValue.match(/[Dd]og[sg]?s?/)){
      actualInput = "Dog"
    }
    if(searchValue.match(/[cC]at[st]?s?/)){
      actualInput = "Cat"
    }
    if(searchValue.match(/[rR]abbit[ts]?s?/)){
      actualInput = "Rabbit"
    }
    if(searchValue.match(/[hH]ors[es]?s?/)){
      actualInput = "Horse"
    }
    if(searchValue.match(/[gG]uinea? ?[pP]ig?s?/)){
      actualInput = "Guinea pig"
    }

    let inputArr = [];
    inputArr = searchValue.split(" ");
    console.log(inputArr);
    if (!searchValue) {
      return false;
    }

    window.location.replace(`/pets/species/${actualInput}`);
  };
  return (
    <header className="container-fluid">
      <div className="header-1">
        <div className="header">
          <h1 className="header-text">TRIGGER</h1>
        </div>
        <div className="search">
          <input
            style={{ width: "40vh" }}
            className="header-search rounded"
            placeholder="SEARCH FOR A PET"
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <Button
            style={{ backgroundColor: "#718C7B", marginLeft: "3px" }}

            className="find-pet header-search rounded"

            onClick={() => searchHandler(searchValue)}
          >
            FIND A PET
          </Button>
          <Button

            style={{ backgroundColor: "#AD7940", width:" fit-content", margin: "0 5vh 0 8vh " }}

            className="donate header-search rounded"

          >
            DONATE NOW
          </Button>
        </div>
      </div>
    </header>
  );
}
