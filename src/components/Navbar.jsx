import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/rk-logo.webp"/>
        <div className="logotext">
        <span className="title">RK Cargo</span>
        <span className="subtitle">PACKERS & MOVERS</span>
        </div>
      </div>
      <div className="nav-links">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
      <NavLink to="/track-parcel" className={({ isActive }) => (isActive ? "active" : "")}>Track Parcel</NavLink>
      <NavLink to="/reviews" className={({ isActive }) => (isActive ? "active" : "")}>Reviews</NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;