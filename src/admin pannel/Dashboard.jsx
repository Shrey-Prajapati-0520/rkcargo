import React from "react";
import './Dashboard.css'
import { MdLocationOn, MdEmail } from "react-icons/md"
import { LuDownload , LuListFilter } from "react-icons/lu";
import { FiBox, FiTruck } from "react-icons/fi";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { TbPointFilled } from "react-icons/tb";
import { FaRupeeSign , FaUserCircle } from "react-icons/fa";
import Anavbar from "./Anavbar";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { IoAlertCircleOutline, IoAlertOutline } from "react-icons/io5";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const Dashboard = () =>{

         const data=[
            { month: "MAY" , expences:40, revenue:65},
            { month: "JUN" , expences:50, revenue:80},
            { month: "JUL" , expences:35, revenue:95},
            { month: "AUG" , expences:58, revenue:78},
            { month: "SEP" , expences:65, revenue:92},
            { month: "OCT" , expences:45, revenue:98},
         ];

        const today = new Date().toLocaleDateString( "en-US",{
          month: "short",
          day : "numeric",
          year : "numeric"
        });
    return(
        <>
        <Anavbar/>
        <header>
        <div className="page-header">
           <div className="top">
                <input type="text" placeholder="Search shipments,invoices,tracking numbers..." className="search-input" />
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
        <div className="dashboard">
            <div className="dashboard-container">
               <div className="dash-head">
                  <div className="greet">
                     <p className="first">Welcome back, Logistics Hub</p>
                     <p className="second">Here's the operational overview for <b>{today}</b></p>
                  </div>
                  <div className="btns">
                     <button className="export-btn"><LuDownload/> Export Data</button>
                     <button className="custom-btn"><LuListFilter/> Custom View</button>
                  </div>
               </div>
               <div className="firstrow">
                    <div className="firstrow-cards">
                      <div className="txt">
                        <div className="ig1">
                         <FiBox/>
                        </div>
                         <p className="pn">Total Parcels</p>
                         <p className="pd">0</p>
                      </div>
                      <div className="status">
                        <span>+0%</span>
                      </div>
                    </div>
                    <div className="firstrow-cards">
                       <div className="txt">
                         <div className="ig2">
                         <FiTruck/>
                        </div>   
                         <p className="pn">Active Shipments</p>
                         <p className="pd">0</p>
                      </div> 
                      <div className="status-1">
                        <span>Active</span>
                      </div>
                    </div>
                    <div className="firstrow-cards">
                       <div className="txt">
                         <div className="ig3">
                           <RiMoneyRupeeCircleLine/>
                      </div>
                         <p className="pn">Monthly Revenue</p>
                         <p className="pd"><FaRupeeSign/>0</p>
                      </div>
                      <div className="status-2">
                        <span>+0.0k</span>
                      </div>
                    </div>
                    <div className="firstrow-cards">
                        <div className="txt">
                        <div className="ig4">
                         <IoAlertOutline/>
                      </div>
                         <p className="pn">Pending Payments</p>
                         <p className="pd">0</p>
                      </div>
                       <div className="status-3">
                        <span>High</span>
                      </div>
                    </div>
               </div>
               <div className="third-container">
                  <div className="revenue">
                     <h3>Monthly Financial Performance</h3>
                     <div className="rvse">
                        <p>Revenue vs Operational Expences(Last 6 Months)</p>
                        <p className="point"><span style={{color:"#FE6B00"}}><TbPointFilled/></span> Revenue &nbsp;&nbsp; <span style={{color:"#131644"}}><TbPointFilled/></span> Expences</p>
                     </div>
                     <div className="chart-container">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} bargap={8}>
                           <XAxis dataKey="month"/>

                           <Bar 
                              dataKey="expences"
                              fill="#1B1E4B"
                              radius={[5,5,0,0]}
                              barSize={28}
                           />

                           <Bar 
                              dataKey="revenue"
                              fill="#F28C38"
                              radius={[5,5,0,0]}
                              barSize={28}
                           />
                        </BarChart>
                     </ResponsiveContainer>
                     </div>
                  </div>
                  <div className="activity">
                     <h3>Recent Activity</h3>
                     <p>No activity logged yet</p>
                  </div>
               </div>
            </div> 
        </div>
        </>
    );
}

export default Dashboard;