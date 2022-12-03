import React from 'react';



// HTML for footer which is imported in App.js
export default function Footer() {

  return (
    <footer className="text-center text-white footerBg">

      <div className="container pt-4 d-inline-flex justify-content-around">


        <div className="text-center text-dark p-3 footerBg" >
          <h4>© 2022 Copyright: Trigger.com</h4>

        </div>
<div>
        <a className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        ><i className="fab fa-facebook-f"></i></a>

        <a className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        ><i className="fab fa-twitter"></i></a>

        <a className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        ><i className="fab fa-google"></i></a>
        <a className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark">
          <i className="fab fa-instagram"></i></a>
          </div>

      </div>


    </footer>

  )
}

