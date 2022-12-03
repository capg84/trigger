import React from 'react';




// HTML for footer which is imported in App.js
export default function Header() {

    return (
        <header className="header" style={{ height: "100px", backgroundColor: "rgba(113, 140, 123, 0)" }} >
            <div className="d-inline-flex justify-content-between align-items-center">
                <div id="trigger">
                    <h1 style={{ color: "blue" }}>Trigger</h1>
                </div>

                <form style={{ height: "15vh" }} className="mb-3 d-inline-flex p-2 align-items-center">
                    <div>  
                        <input placeholder="Search for a pet" className="mb-3 rounded" />
                        <button className="mx-1 rounded" style={{ backgroundColor: "rgba(113, 140, 123, 0)" }} >Find a pet</button>
                        <button className="mx-5 rounded">Donate now</button>
                    </div>
                    </form>

            </div>
        </header>

    )
}

