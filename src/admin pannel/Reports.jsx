import React from "react";
import { useState } from "react";
import './Reports.css'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Pie, PieChart, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { FaUsers } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoTimerOutline , IoSearchOutline } from "react-icons/io5";
import { MdOutlineCorporateFare ,MdOutlinePictureAsPdf, MdOutlineRefresh, MdOutlineDescription, MdOutlineInventory2, MdOutlineSpeed, MdOutlinePayments, MdAccountBalanceWallet , MdOutlineAnalytics  } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { TbPointFilled } from "react-icons/tb";
import { IoMdAdd , IoMdRemove } from "react-icons/io";
import { LuDownload , LuListFilter } from "react-icons/lu";
import { FaRegCalendar, FaRegCalendarAlt, FaRupeeSign , FaUserCircle } from "react-icons/fa";
import Anavbar from "./Anavbar";

const Reports = () =>{

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
                <div className="invoice-input">
                    <input type="text" placeholder="Search reports..." className="search-input" />
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
        <div className="reports">
            <div className="reports-container">
                <div className="reports-top-container">
                    <div className="r-picker">
                        <FaRegCalendarAlt className="r-cal-img"/>
                    
                        <DatePicker
                            selectsRange
                            startDate={startDate}
                            endDate={endDate}
                            onChange={onChange}
                            dateFormat="MMM d, yyyy"
                            className="r-date-input"
                         />
                    </div>
                    <div className="r-btns">
                        <button className="r-btn-1"><LuDownload/> Generate Excel</button>
                        <button className="r-btn-2"><MdOutlinePictureAsPdf/> Export PDF</button>
                    </div>
                </div>
                <div className="r-cards-container">
                    <div className="c">
                        <div className="r-icon-div">
                            <span className="icon-r-1">
                                <MdOutlineInventory2/>
                            </span>
                            <span className="txt-1">
                                Real-Time
                            </span>
                        </div>
                        <div className="ps">
                            <p className="heading">Parcel Report</p>
                            <p className="para">Volume tracking, delivery performance and failurs anaysis.</p>
                        </div>
                    </div>
                    <div className="c">
                    <div className="r-icon-div">
                            <span className="icon-r-2">
                                <FaRupeeSign/>
                            </span>
                            <span className="txt-2">
                                Monthly
                            </span>
                        </div>
                        <div className="ps">
                            <p className="heading">Revenue Report</p>
                            <p className="para">Total billing, pending payments, and profit margin breakdown.</p>
                        </div>
                    </div>
                    <div className="c">
                       <div className="r-icon-div">
                            <span className="icon-r-3">
                                <MdOutlineSpeed/>
                            </span>
                            <span className="txt-3">
                                Active
                            </span>
                        </div>
                        <div className="ps">
                            <p className="heading">Vehicle Efficiency</p>
                            <p className="para">Fuel consumption, idle time, and maintenance forecasting.</p>
                        </div> 
                    </div>
                    <div className="c">
                        <div className="r-icon-div">
                            <span className="icon-r-4">
                                <FaArrowTrendUp/>
                            </span>
                            <span className="txt-4">
                                Quarterly
                            </span>
                        </div>
                        <div className="ps">
                            <p className="heading">Customer Growth</p>
                            <p className="para">New acquisitions, churn rates, and retention metrics.</p>
                        </div>
                    </div>
                </div>
                <div className="rtable-container">
                    <div className="rhead">                    
                        <h2>Data Breakdown: Region Details</h2>
                    </div>
                    <div className="rtable-row">
                        <table className="rtable">
                            <thead>
                                <tr>
                                    <th>Region ID</th>
                                    <th>Lead Manager</th>
                                    <th>Success Rate</th>
                                    <th>Avg Transit</th>
                                    <th>Issues</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                        </table>
                        <p className="records">No Records Found</p>
                    </div>
                </div>
                 <div className="reports-download">
                     <div className="download-top">
                        <div className="download-heading">
                           <h3>Recent Downloads</h3>
                           <p>Your generated reports logs</p>
                        </div>
                        <button className="view-btn">View All</button>
                    </div>
                       <p className="no-download">No reports downloaded</p>
                    </div>
            </div> 
        </div>
        </>
    );
}

export default Reports;