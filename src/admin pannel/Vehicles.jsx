import React from "react";
import { useState } from "react";
import './Vehicles.css'
import { FaTruck, FaUsers } from "react-icons/fa6";
import { BsEvStation } from "react-icons/bs";
import { FiBox, FiTruck } from "react-icons/fi";
import { IoTimerOutline } from "react-icons/io5";
import { LuDownload , LuListFilter } from "react-icons/lu";
import { MdOutlineCorporateFare, MdOutlineRoute, MdOutlineBuild} from "react-icons/md";
import { IoMdAdd , IoMdRemove } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { FaRegCalendar, FaRegCalendarAlt, FaRupeeSign , FaUserCircle } from "react-icons/fa";
import Anavbar from "./Anavbar";


const Vehicles = () =>{

    const [active,setActive]= useState("All Vehicles");

    return(
        <>
        <Anavbar/>
       <header>
            <div className="page-header">
             <div className="customer-input">
                 <input type="text" placeholder="Search vehicles, drivers or traking IDs..." className="search-input" />
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
        <div className="vehicles">
            <div className="vehicles-container">
                <div className="veh-top">
                    <div className="veh-txt">
                        <h1>Fleet Overview</h1>
                        <p>Manage and track vehicles in real-time.</p>
                    </div>
                    <div className="new-fbtn">
                            <button className="v-btn-1">
                                <span><LuListFilter/></span>
                                 Filters
                            </button>
                            <button className="v-btn-2">
                            <span><IoMdAdd/></span>
                                Add Vehicle
                            </button>
                    </div>
                </div>
                <div className="vehicle-cards">
                     <div className="v-cards">
                        <div className="v-first">
                            <p>Total Fleet</p>
                            <span className="v-img"><FiTruck/></span>
                        </div>
                        <div className="v-second">
                            <h3>0</h3>
                        </div>
                     </div>
                      <div className="v-cards">
                         <div className="v-first">
                            <p>On Route</p>
                            <span  className="v-img-2"><MdOutlineRoute/></span>
                        </div>
                        <div className="v-second">
                            <h3>0</h3>
                        </div>
                     </div>
                      <div className="v-cards">
                         <div className="v-first">
                            <p>Maintenance</p>
                            <span className="v-img-3"><MdOutlineBuild/></span>
                        </div>
                        <div className="v-second">
                            <h3>0</h3>
                        </div>
                     </div>
                      <div className="v-cards">
                         <div className="v-first">
                            <p>Avg. Fuel Efficiency</p>
                            <span className="v-img-4"><BsEvStation/></span>
                        </div>
                        <div className="v-second">
                            <h3>12</h3><span>Km/L</span>
                        </div>
                     </div>
                </div>
                <div className="vehicle-btns">
                        <button className={active === "All Vehicles" ? "active" : ""} onClick={()=> setActive("All Vehicles")}>All Vehicles</button>
                        <button className={active === "On Route" ? "active" : ""} onClick={()=> setActive("On Route")}>On Route</button>
                        <button className={active === "Available" ? "active" : ""} onClick={()=> setActive("Available")}>Available</button>
                        <button className={active === "Maintenance" ? "active" : ""} onClick={()=> setActive("Maintenance")}>Maintenance</button>
                </div>
                <div className="vtable-container">
                    <div className="vtable-row">
                        <table className="vtable">
                            <thead>
                                <tr>
                                    <th>Vehicle No.</th>
                                    <th>Model / Type</th>
                                    <th>Driver Name</th>
                                    <th>Status</th>
                                    <th>Last Sync</th>
                                </tr>
                            </thead>
                        </table>
                        <p className="vehicles-detail">No Vehicles details found.</p>
                    </div>
                </div>
            </div> 
        </div>
        </>
    );
}

export default Vehicles;