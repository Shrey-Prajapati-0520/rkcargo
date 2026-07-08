import React from "react";
import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiBox, FiUsers } from "react-icons/fi";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaRupeeSign } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FiTruck } from "react-icons/fi";
import { GoComment } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import './Anavbar.css'

const Anavbar = () =>{

    return(
        <nav className="nav">
            <div className="logo">
                <img src="/rk-logo.webp"/>
                <div className="logotext">
                    <span className="title">RK Cargo</span>
                    <span className="subtitle">ADMIN PANEL</span>
                </div>
            </div>
            <div className="anav-links">
                <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? "active" : "")}><LuLayoutDashboard/> Dashboard</NavLink>
                <NavLink to="/admin/parcels" className={({ isActive }) => (isActive ? "active" : "")}><FiBox/> Parcels</NavLink>
                <NavLink to="/admin/customers" className={({ isActive }) => (isActive ? "active" : "")}><FiUsers/> Customers</NavLink>
                <NavLink to="/admin/invoices" className={({ isActive }) => (isActive ? "active" : "")}><LiaFileInvoiceSolid/> Invoices</NavLink>
                <NavLink to="/admin/finance" className={({ isActive }) => (isActive ? "active" : "")}><FaRupeeSign/> Finance</NavLink>
                <NavLink to="/admin/reports" className={({ isActive }) => (isActive ? "active" : "")}><VscGraph/> Reports</NavLink>
                <NavLink to="/admin/vehicles" className={({ isActive }) => (isActive ? "active" : "")}><FiTruck/> Vehicles</NavLink>
                <NavLink to="/admin/contacts" className={({ isActive }) => (isActive ? "active" : "")}><GoComment/> Contacts</NavLink>
                <NavLink to="/admin/review" className={({ isActive }) => (isActive ? "active" : "")}><FaRegStar/> Reviews</NavLink>
                <NavLink to="/admin/adminmanagement" className={({ isActive }) => (isActive ? "active" : "")}><MdOutlineAdminPanelSettings/> Admin Management</NavLink>
            </div>
            <div className="logout">
                <button className="logout-button"><LuLogOut/> Logout</button>
            </div>
        </nav>
    );
}

export default Anavbar;