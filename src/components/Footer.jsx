import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="navmedia">
        <nav>
          <ul>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
        <div className="linktomedia">
          <a href="">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="">
            <i className="bx bxl-google-plus"></i>
          </a>
        </div>
      </div>
      <div className="restriction">
        Copyright ©{currentYear} All rights reserved
      </div>
    </footer>
  );
}
