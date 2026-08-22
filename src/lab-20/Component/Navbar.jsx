import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <div class="navigation">
          <nav align="center">
            <Link to="/">Home</Link> |<Link to="/about">About</Link> |
            <Link to="/info">Infomation</Link> |<Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
