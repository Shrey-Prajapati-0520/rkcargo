import React from "react";
import './Dashboard.css'
import { MdLocationOn, MdEmail } from "react-icons/md"
import { FiBox, FiTruck } from "react-icons/fi";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import Anavbar from "./Anavbar";
import { IoAlertCircleOutline } from "react-icons/io5";

const Dashboard = () =>{
    return(
        <>
        <Anavbar/>
        <header>
        <div className="page-header">
           <div className="page-name">
                <h2>Dashboard</h2>
            </div>
                <button className="page-btn">View Website</button>
        </div>  
        </header>
        <div className="dashboard">
            <div className="dashboard-container">
               <div className="firstrow">
                    <div className="firstrow-cards">
                      <div className="txt">
                         <p className="pn">Total Parcels</p>
                         <p className="pd">0</p>
                      </div>
                      <div className="ig1">
                         <FiBox/>
                      </div>
                    </div>
                    <div className="firstrow-cards">
                       <div className="txt">
                         <p className="pn">Active Shipments</p>
                         <p className="pd">0</p>
                      </div>
                      <div className="ig2">
                         <FiTruck/>
                      </div>    
                    </div>
                    <div className="firstrow-cards">
                       <div className="txt">
                         <p className="pn">Delivered</p>
                         <p className="pd">0</p>
                      </div>
                      <div className="ig3">
                         <GiConfirmed/>
                      </div>
                    </div>
                    <div className="firstrow-cards">
                        <div className="txt">
                         <p className="pn">Pending Payments</p>
                         <p className="pd">0</p>
                      </div>
                      <div className="ig4">
                         <MdOutlinePendingActions/>
                      </div>
                    </div>
               </div>
               <div className="secondrow">
                    <div className="secondrow-cards">
                      <div className="ig5">
                         <FaArrowTrendUp/>
                      </div>
                      <div className="txt2">
                         <p className="pn">Total Income</p>
                         <p className="pd2">₹ 0</p>
                      </div>
                    </div>
                    <div className="secondrow-cards">
                        <div className="ig6">
                         <FaArrowTrendDown/>
                      </div>  
                       <div className="txt2">
                         <p className="pn">Total Expence</p>
                         <p className="pd2">₹ 0</p>
                      </div>
                    </div>
                    <div className="secondrow-cards">
                        <div className="ig7">
                         <FaRupeeSign/>
                      </div>  
                       <div className="txt2">
                         <p className="pn">Net Profit</p>
                         <p className="pd2">₹ 0</p>
                      </div>
                    </div>
                    <div className="secondrow-cards">
                        <div className="ig8">
                            <IoAlertCircleOutline/>
                      </div>  
                        <div className="txt2">
                         <p className="pn">Due Alerts</p>
                         <p className="pd2">0</p>
                      </div>
                    </div>
               </div>
               <div className="third-container">
                  <div className="revenue">
                     <h3>Revenue vs Expense</h3>
                     <p>No data yet. Add income & expenses to see charts.</p>
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