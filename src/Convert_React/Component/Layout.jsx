import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <section>
        <Outlet />
      </section>
      
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
