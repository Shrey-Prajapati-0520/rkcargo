import React from "react";
import './Reports.css'
import Anavbar from "./Anavbar";


const Reports = () =>{
    return(
        <>
        <Anavbar/>
        <header>
        <div className="page-header">
           <div className="page-name">
                <h2>Reports</h2>
            </div>
                <button className="page-btn">View Website</button>
        </div>  
        </header>
        <div className="reports">
            <div className="reports-container">
                <div className="reports-top-container">
                    <p>Report Type</p>
                    <button className="report-btn" role="combobox" aria-controls="radix-:r1v:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="close">
                        <span className="report-btn-span">Parcel Report</span>
                    </button>
                </div>
            </div> 
        </div>
        </>
    );
}

export default Reports;