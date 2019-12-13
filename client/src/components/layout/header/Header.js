import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./nav/Navbar";
import NavCategories from "./nav/NavCategories";
import "./Header.css";

const Header = () => (
  <div className="sticky">
    <header>
      <figure>
        <img src="https://i.ibb.co/3zr37qp/fd195b94-42f7-443b-910c-ece20808f675.jpg" alt="not found" />
      </figure>
      <h1>
        <Link to="/">Saral's Store</Link>
      </h1>
      <NavCategories />
      <Navbar />
    </header>
  </div>
);

export default Header;
