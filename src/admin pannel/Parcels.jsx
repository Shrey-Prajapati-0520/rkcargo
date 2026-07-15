import React, { useState } from "react";
import './Parcels.css'
import { FaRegCalendar, FaRegCalendarAlt, FaRupeeSign , FaUserCircle } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css"
import { FaSlidersH } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { FiBox, FiTruck } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5"
import { BsThreeDotsVertical } from "react-icons/bs";
import DatePicker from "react-datepicker"
import Anavbar from "./Anavbar";


const Parcels = () =>{

        const [startDate,setStartDate]=useState(new Date());
        const [endDate,setEndDate]=useState(new Date());

        const onChange=(dates) => {
            const [start,end] = dates;
            setStartDate(start);
            setEndDate(end);
        };

    return(
        <>
        <Anavbar/>
        <header>
                <div className="page-header">
                   <div className="parcel-input">
                        <input type="text" placeholder="Search LR.NO., Customer or, Route..." className="search-input" />
                        <div className="new-btn">
                          <button className="new-shipment">+ New Shipment</button>
                        </div>
                    </div>
                    <div className="user">
                          <div className="userdetails">
                             <h3>Admin User</h3>
                             <h5>OPERATION LEAD</h5>
                          </div>
                          <div className="userimg">
                             <FaUserCircle/>
                          </div>
                    </div>
                </div>  
                </header>
        <div className="parcels">
            <div className="parcels-container">
                <div className="parcel-top">
                    <div className="top-txt">
                        <h1>Parcels Management</h1>
                        <p>Manage,track, and analyze all active shipments across routes.</p>
                    </div>
                    <div className="tot-active">
                       <div className="active-img">
                            <FiTruck/>
                        </div>
                        <div className="text">
                            <h4>Total Active</h4>
                            <p>0</p>
                        </div>   
                    </div>
                    <div className="pending">
                       <div className="pending-img">
                            <IoTimeOutline/>
                        </div>
                        <div className="text">
                            <h4>Pending</h4>
                            <p>0</p>
                        </div>   
                    </div>
                </div>
                <div className="filter-container">
                    <div className="date-range">
                        <label>Date Range</label>

                        <div className="picker">
                            <FaRegCalendarAlt className="cal-img"/>

                            <DatePicker
                              selectsRange
                              startDate={startDate}
                              endDate={endDate}
                              onChange={onChange}
                              dateFormat="MMM d, yyyy"
                              className="date-input"
                            />
                        </div>
                    </div>
                    <div className="stat">
                        <label>Status</label>
                        
                        <div className="all-stat">
                            <select className="sel">
                                <option>All Statuses</option>
                                <option>In Transit</option>
                                <option>Delivered</option>
                                <option>Pending</option>
                            </select>
                        </div>
                    </div>
                    <div className="stat">
                        <label>Route</label>
                        
                        <div className="all-stat">
                            <select className="route">
                                <option>All Routes</option>
                                <option>North Region</option>
                                <option>South Express</option>
                                <option>International</option>
                            </select>
                        </div>
                    </div>
                    <div className="filter-btn">
                        <button className="adv-btn"><FaSlidersH/> &nbsp; Advanced Filters</button>
                        <button className="apply-btn">Apply Filters</button>
                    </div>
                </div>
                <div className="table-container">
                    <div className="table-row">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>LR NO.</th>
                                    <th>Customer</th>
                                    <th>Route</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                    <th>Balance</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                        </table>

                    </div>
                </div>
            </div>
         </div>
        </>
    );
}

export default Parcels;