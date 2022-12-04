import React from 'react';



// HTML for footer which is imported in App.js
export default function Footer() {

  return (
    <footer className="text-center text-white footerBg" style={{ height: "100px", backgroundColor: "#718C7B" }}>

      <div className="container pt-4 d-inline-flex justify-content-around">


        <div className="text-center text-dark p-3 footerBg" >
          <h4 style={{ color: "#f2faf5" }}>© 2022 Copyright: TRIGGER</h4>

        </div>
<div>
        <a className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        ><i style={{ color: "#f2faf5" }} className="fab fa-facebook-f"></i></a>

        <a className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        ><i style={{ color: "#f2faf5" }} className="fab fa-twitter"></i></a>

        <a className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        ><i style={{ color: "#f2faf5" }} className="fab fa-google"></i></a>
        <a className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark">
          <i style={{ color: "#f2faf5" }} className="fab fa-instagram"></i></a>
          </div>

      </div>


    </footer>

  )
}

