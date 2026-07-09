import React from "react";
import './Invoices.css'
import Anavbar from "./Anavbar";


const Invoices = () =>{
    return(
        <>
        <Anavbar/>
        <header>
        <div className="page-header">
           <div className="page-name">
                <h2>Invoices</h2>
            </div>
                <button className="page-btn">View Website</button>
        </div>  
        </header>
        <div className="invoices">
            <div className="invoices-container">
                <div className="input-container-invoices">
                 <input type="text" placeholder="Search invoices,customer..." className="search-input"/>
                 <button className="input-btn">+ Create Document</button>
                </div> 
                <div className="itable-container">
                    <div className="itable-row">
                        <table className="itable">
                            <thead>
                                <tr>
                                    <th>Doc. No.</th>
                                    <th>Type</th>
                                    <th>Customer</th>
                                    <th>Ampount</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>No Documents</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div> 
        </div>
        </>
    );
}

export default Invoices;