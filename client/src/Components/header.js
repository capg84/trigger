import React from 'react';
import Button from 'react-bootstrap/Button';
import "../Assets/Styles/index.css"


// HTML for footer which is imported in App.js
export default function Header() {

    return (

        <header className='container-fluid'>
            <div style={{ width: "100%", display: "flex", flexWrap:"wrap"}} >
                <div className='header' >
                    <h1 className='header-text'>TRIGGER</h1>
                    {/* <img src="../Assets/Images/logo.png" alt="trigger" width="10vh" height="10vh"></img> */}
                </div>

                <div className='header-buttons'>
                    <input style={{ width: "40vh"}}  className="header-search rounded" placeholder="SEARCH FOR A PET" />
                    <Button style={{ backgroundColor: "#718C7B", marginLeft: "3px"}} className="header-search rounded">FIND A PET</Button>
                    <Button style={{ backgroundColor: "#AD7940", margin: "0 5vh 0 8vh "}} className="header-search rounded">DONATE NOW</Button>
                </div>
                </div>
       
        </header>

    
    )
}

