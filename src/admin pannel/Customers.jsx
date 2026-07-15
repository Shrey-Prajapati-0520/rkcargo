import React from "react";
import { useState } from "react";
import './Customers.css'
import { FaUsers } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlineCorporateFare } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { FaRegCalendar, FaRegCalendarAlt, FaRupeeSign , FaUserCircle } from "react-icons/fa";
import Anavbar from "./Anavbar";


const Customers = () =>{

    const [active,setActive]= useState("All");

    return(
        <>
        <Anavbar/>
       <header>
            <div className="page-header">
             <div className="customer-input">
                 <input type="text" placeholder="Search customers, companies or ID..." className="search-input" />
                 <div className="new-btn">
                        <button className="new-customer">+ Add Customer</button>
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
        <div className="customers">
            <div className="customers-container">
                <div className="cust-top">
                    <div className="cust-txt">
                        <h1>Customer Directory</h1>
                        <p>Manage and analyze your logistics network partners.</p>
                    </div>
                    <div className="cust-btns">
                        <button className={active === "All" ? "active" : ""} onClick={()=> setActive("All")}>All</button>
                        <button className={active === "VIP" ? "active" : ""} onClick={()=> setActive("VIP")}>VIP</button>
                        <button className={active === "Regular" ? "active" : ""} onClick={()=> setActive("Regular")}>Regular</button>
                        <button className={active === "Corporate" ? "active" : ""} onClick={()=> setActive("Corporate")}>Corporate</button>
                    </div>
                </div>
                <div className="customer-cards">
                     <div className="c-cards">
                        <div className="c-first">
                            <p>Total Customers</p>
                            <FaUsers className="tot-img"/>
                        </div>
                        <div className="c-second">
                            <h3>0</h3>
                            <span>+4.0%</span>
                        </div>
                     </div>
                      <div className="c-cards">
                         <div className="c-first">
                            <p>Active This Month</p>
                            <IoTimerOutline className="tot-img-2"/>
                        </div>
                        <div className="c-second">
                            <h3>0</h3>
                            <span>+12%</span>
                        </div>
                     </div>
                      <div className="c-cards">
                         <div className="c-first">
                            <p>Corporate Accounts</p>
                            <MdOutlineCorporateFare className="tot-img-3"/>
                        </div>
                        <div className="c-second">
                            <h3>0</h3>
                            <span className="c-acc">-1%</span>
                        </div>
                     </div>
                      <div className="c-cards">
                         <div className="c-first">
                            <p>Customers Loyalty</p>
                            <IoStar className="tot-img-4"/>
                        </div>
                        <div className="c-second">
                            <h3>4.8/5</h3>
                            <span>Avg.Rate</span>
                        </div>
                     </div>
                </div>
                <div className="ctable-container">
                    <div className="ctable-row">
                        <table className="ctable">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
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

export default Customers;