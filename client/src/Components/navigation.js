import React from 'react';

function Navigation() {
  return(
    <nav className="navbar navbar-expand-lg" style={{ padding: "0" }}>
    <div style={{ color: "#f2faf5",  backgroundColor: "#718C7B" }} className="container-fluid">

      <div  className="" id="navbarExample01">
        <ul style={{ fontSize: "3vh",  }} className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active ms-5 ">
            <a style={{ color: "#f2faf5" }} className="nav-link" aria-current="page" href="">ABOUT</a>
          </li>
          <li className="nav-item ms-5">
            <a style={{ color: "#f2faf5" }} className="nav-link" href="">REHOME A PET</a>
          </li>
          <li className="nav-item ms-5 ">
            <a style={{ color: "#f2faf5" }} className="nav-link" href="">PET CARE ADVICE</a>
          </li>
          <li className="nav-item ms-5">
            <a style={{ color: "#f2faf5" }} className="nav-link" href="">CONTACT</a>
          </li>
        </ul>
      </div>

      <div  style={{ marginRight: "10vh" }}>
      <ul style={{ fontSize: "3vh" }} className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active ms-2">
            <a style={{ color: "#f2faf5" }} className="nav-link" aria-current="page" href="">LOGIN</a>
          </li>
          <li className="nav-item active ms-2 me-2">
            <a style={{ color: "#f2faf5" }} className="nav-link" aria-current="page" href="">SIGNUP</a>
          </li>
          <h4 style={{ fontSize: "5vh" }} className="nav-item mt-1">|</h4>
          <li className="nav-item ms-2">
            <a style={{ color: "#f2faf5" }} className="nav-link " href="">MY TRIGGER</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navigation;