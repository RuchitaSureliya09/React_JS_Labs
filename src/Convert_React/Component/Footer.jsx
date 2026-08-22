import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
      <footer>
        <div class="footer">
          <div class="f1">&copy;2026 ~ Made By Ruchita Sureliya</div>
          <div class="f2">
            Contact :{" "}
            <Link to="25010101244@darshan.ac.in" target="_blank">
              25010101244@darshan.ac.in
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
