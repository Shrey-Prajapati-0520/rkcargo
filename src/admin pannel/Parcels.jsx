import React from "react";
import './Parcels.css'
import { FaRupeeSign , FaUserCircle } from "react-icons/fa";
import { FiBox, FiTruck } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5"
import Anavbar from "./Anavbar";


const Parcels = () =>{
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