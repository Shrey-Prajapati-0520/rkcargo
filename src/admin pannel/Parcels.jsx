import React from "react";
import './Parcels.css'
import Anavbar from "./Anavbar";


const Parcels = () =>{
    return(
        <>
        <Anavbar/>
        <header>
        <div className="page-header">
           <div className="page-name">
                <h2>Parcels</h2>
            </div>
                <button className="page-btn">View Website</button>
        </div>  
        </header>
        <div className="parcels">
            <div className="parcels-container">
               <div className="input-container">
                 <input type="text" placeholder="Search parcels..." className="search-input"/>
                 <button className="input-btn">+ Add Parcel</button>
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