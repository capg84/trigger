import React from 'react';


// HTML for footer which is imported in App.js
export default function Header() {

    return (
        <header className='container-fluid' style={{ backgroundColor: "#9CCBC3", width: "100%" }} >
            <div className='container-fluid' style={{ display: 'flex', flexWrap: "wrap", }}>
                <div style={{ margin: "auto", display: 'flex', flexWrap: "wrap", height: "100px" }}>
                    <h1 style={{ color: "#f2faf5", fontSize: "10vh", marginLeft: "10vh" }}>TRIGGER</h1>
                    {/* <img src="../Assets/Images/trigger.png" alt="trigger" width="10vh" height="10vh"></img> */}
                </div>

                <div style={{ width: "90vh"}}></div>

                <div style={{ margin: "auto" , paddingTop:"10px", }}>
                    <input style={{ height: "5vh", width: "35vh" }} placeholder="Search for a pet" className="mb-3 rounded" />
                    <button className=" rounded ms-1 btn" style={{ height: "5vh", color: "#f2faf5", backgroundColor: "#718C7B" }}>FIND A PET</button>
                    <button style={{ color: "#f2faf5", backgroundColor: "#AD7940", height: "5vh" }} className="mx-5 rounded btn">DONATE NOW</button>
                </div>
            </div>
        </header>

    )
}

