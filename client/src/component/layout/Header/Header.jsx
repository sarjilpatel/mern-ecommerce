import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/headerlogo.png";
import { useSelector } from "react-redux";
import UserOptions from "./UserOptions";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" className="headerlogo" />
      </Link>
      <form className="headersearch" onSubmit={searchSubmitHandler}>
        <input type="text" onChange={(e) => setKeyword(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div className="navlinks">
        <NavLink to="/" className="navlink">
          Home
        </NavLink>
        <NavLink to="/products" className="navlink">
          Products
        </NavLink>
        <NavLink to="/contact" className="navlink">
          Contact
        </NavLink>
        <NavLink to="/about" className="navlink">
          About
        </NavLink>

        <div className="header_speed_dial_wrapper">
          {isAuthenticated && <UserOptions user={user} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
