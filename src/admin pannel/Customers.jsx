import React from "react";
import './Customers.css'
import Anavbar from "./Anavbar";


const Customers = () =>{
    return(
        <>
        <Anavbar/>
        <header>
        <div className="page-header">
           <div className="page-name">
                <h2>Customers</h2>
            </div>
                <button className="page-btn">View Website</button>
        </div>  
        </header>
        <div className="customers">
            <div className="customers-container">
                <div className="input-container-customers">
                 <input type="text" placeholder="Search..." className="search-input"/>
                 <button className="input-btn">+ Add Customer</button>
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