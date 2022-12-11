import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../assets/css/index.css";
import Auth from "../utils/auth";
import Logo from "../assets/images/Logo.jpg"

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
    else if(searchValue.match(/[cC]at[st]?s?/)){
      actualInput = "Cat"
    }
    else if(searchValue.match(/[rR]abbit[ts]?s?/)){
      actualInput = "Rabbit"
    }
    else if(searchValue.match(/[hH]ors[es]?s?/)){
      actualInput = "Horse"
    }
    else if(searchValue.match(/[gG]uinea? ?[pP]ig?s?/)){
      actualInput = "Guinea pig"
    }
    else if(searchValue.match(/[bB]?a?[ia]rd?s?/)){
      actualInput = "Bird"
    }
    else {
      actualInput = "Other"
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
            <div className="logo-div">
                <a href="/"><img style={{ width: "8vh", height:"8vh" }} className="header-image" alt="logo" src={Logo}></img></a>
            </div>
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
            style={{fontSize: "2.5vh", backgroundColor: "#718C7B", marginLeft: "3px" }}

            className="find-pet header-search rounded"

            onClick={() => searchHandler(searchValue)}
          >
            FIND A PET
          </Button>
          <Button

            style={{fontSize: "2.5vh", backgroundColor: "#AD7940", width:" fit-content", margin: "0 5vh 0 8vh " }}

            className="donate header-search rounded"

          >
            DONATE NOW
          </Button>
        </div>
      </div>
    </header>
  );
}
