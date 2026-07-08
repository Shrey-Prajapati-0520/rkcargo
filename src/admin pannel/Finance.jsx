import React from "react";
import './Customers.css'
import Anavbar from "./Anavbar";


const Finance = () =>{
    return(
        <>
        <Anavbar/>
        <header>
        <div className="page-header">
           <div className="page-name">
                <h2>Finance</h2>
            </div>
                <button className="page-btn">View Website</button>
        </div>  
        </header>
        <div className="customers">
            <div className="customers-container">
            </div> 
        </div>
        </>
    );
}

export default Finance;