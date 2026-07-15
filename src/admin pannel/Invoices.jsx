import React from "react";
import { useState } from "react";
import './Invoices.css'
import { FaUsers } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlineCorporateFare , MdOutlinePayments, MdAccountBalanceWallet , MdOutlineAnalytics  } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { FaRegCalendar, FaRegCalendarAlt, FaRupeeSign , FaUserCircle } from "react-icons/fa";
import Anavbar from "./Anavbar";


const Invoices = () =>{

    const [active,setActive]= useState("All");

    return(
        <>
        <Anavbar/>
       <header>
            <div className="page-header">
             <div className="invoice-input">
                 <input type="text" placeholder="Search invoices, customers or ID..." className="search-input" />
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
        <div className="invoices">
            <div className="invoices-container">
                <div className="inv-top">
                    <div className="inv-txt">
                        <h1>Invoices</h1>
                        <p>Manage and track your logistics billings and receivables.</p>
                    </div>
                    <div className="new-btn">
                        <button className="new-invoice">+ Generate Invoice</button>
                    </div>
                </div>
                <div className="invoice-cards">
                     <div className="i-cards">
                        <div className="i-first">
                            <div className="i-img">
                            <MdAccountBalanceWallet/>
                            </div>
                            <span>HIGH RISK</span>
                        </div>
                        <div className="i-second">
                            <p>Total Outstandings</p>
                            <h3><FaRupeeSign/>0</h3>
                        </div>
                     </div>
                      <div className="i-cards">
                         <div className="i-first">
                            <div className="i-img-2">
                            <MdOutlinePayments/>
                            </div>
                            <span className="vsly">+12% VS LY</span>
                        </div>
                        <div className="i-second">
                             <p>Payments (Last 30 days)</p>
                            <h3><FaRupeeSign/>0</h3>
                        </div>
                     </div>
                      <div className="i-cards">
                         <div className="i-first">
                            <div className="i-img-3">
                            <MdOutlineAnalytics/>
                            </div>
                        </div>
                        <div className="i-second">
                             <p>Pending Approval</p>
                            <h3>0 Invoices</h3>
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

export default Invoices;