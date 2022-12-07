import React from 'react';
import Button from 'react-bootstrap/Button';
import "../Assets/Styles/index.css"

import Auth from '../Utils/auth';



// HTML for footer which is imported in App.js
export default function Header() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    return (

        <header className='container-fluid'>

            <div className='header-1' >
                <div className="header">
                    <h1 className='header-text'>TRIGGER</h1>
                </div>
                <div className="search" >
                    <input style={{ width: "40vh" }} className="header-search rounded" placeholder="SEARCH FOR A PET" />
                    <Button style={{ backgroundColor: "#718C7B", marginLeft: "3px", fontSize:"2vh" }} className="header-search rounded">FIND A PET</Button>
                    <Button style={{ backgroundColor: "#AD7940", margin: "0 5vh 0 8vh ", fontSize:"2vh" }} className="header-search rounded">DONATE NOW</Button>
                </div>

            </div>
        </header>

    )
}

