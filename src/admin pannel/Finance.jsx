import React from "react";
import { useState } from "react";
import './Finance.css'
import { Pie, PieChart, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { FaUsers } from "react-icons/fa6";
import { IoTimerOutline , IoSearchOutline } from "react-icons/io5";
import { MdOutlineCorporateFare , MdOutlinePayments, MdAccountBalanceWallet , MdOutlineAnalytics  } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { TbPointFilled } from "react-icons/tb";
import { IoMdAdd , IoMdRemove } from "react-icons/io";
import { LuDownload , LuListFilter } from "react-icons/lu";
import { FaRegCalendar, FaRegCalendarAlt, FaRupeeSign , FaUserCircle } from "react-icons/fa";
import Anavbar from "./Anavbar";

const Finance = () =>{

    const data=[
        { month: "JAN", value: 30000 },
        { month: "FEB", value: 20000 },
        { month: "MAR", value: 40000 },
        { month: "APR", value: 30000 },
        { month: "MAY", value: 10000 },
        { month: "JUN", value: 20000 },
        { month: "JUL", value: 30000 },
        { month: "AUG", value: 20000 },
        { month: "SEP", value: 40000 },
        { month: "OCT", value: 30000 },
        { month: "NOV", value: 10000 },
        { month: "DEC", value: 30000 },
    ];

    const data2=[
        {name:"Fuel and Transit", value:45},
        {name:"Staff Payroll", value:30},
        {name:"Maintenance", value:15},
        {name:"Admin/Misc", value:10},
    ];

    const colors=[
        "#FE6B00",
        "#111629",
        "#8665DC",
        "#8AD1EF",
    ]


    return(
        <>
        <Anavbar/>
        <header>
            <div className="page-header">
                <div className="invoice-input">
                     <input type="text" placeholder="Search transactions..." className="search-input" />
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
        <div className="invoices">
            <div className="invoices-container">
                <div className="inv-top">
                    <div className="f-txt">
                        <h1>Financial Overview</h1>
                        <p>Real-time fiscal performance and transaction history.</p>
                    </div>
                    <div className="new-fbtn">
                        <button className="f-btn-1">
                            <span><LuDownload/></span>
                            Export Statement
                        </button>
                        <button className="f-btn-2">
                            <span><IoMdAdd/></span>
                             Add Income
                        </button>
                        <button className="f-btn-3">
                            <span><IoMdRemove/></span>
                            Add Expence
                        </button>
                    </div>
                </div>
                <div className="mid-container">
                    <div className="mid-1">
                        <div className="icon-div">
                            <span className="mid-1-icon"><MdAccountBalanceWallet/></span>
                            <span className="mid-1-span">+12.5% vs prev month</span>
                        </div>
                        <div className="net-profit">
                            <p>Total Net Profit</p>
                            <h3><FaRupeeSign/>0.0</h3>
                        </div>
                        <div className="revex">
                            <div className="rev">
                                <p className="revex-txt">Revenue</p>
                                <p className="revex-n-1"><FaRupeeSign/>0.0</p>
                            </div>
                            <div className="exp">
                                <p className="revex-txt">Expences</p>
                                <p className="revex-n-2"><FaRupeeSign/>0.0</p>
                            </div>
                        </div>
                    </div>
                    <div className="mid-2">
                       <h2>Cash Flow Analysis</h2>
                       <ResponsiveContainer width="100%" height="80%">
                           <LineChart data={data}>
                               <CartesianGrid vertical={false} stroke="#f2f2f2"/>
                               <XAxis dataKey="month" 
                                      tickLine={false}
                                      axisLine={false}
                                />
                               <YAxis className="recharts-yAxis-tick-labels" tickFormatter={(value) => `${value/1000}k`}
                                      tickLine={false}
                                      axisLine={false}
                                />
                               <Tooltip />
                               <Line type="monotone" dataKey="value" stroke="#e86f3d" strokeWidth={3} dot={false} />
                           </LineChart>
                       </ResponsiveContainer>
                    </div>
                </div>
                <div className="last-container">
                    <div className="lst-1">
                        <h3>Expences Breakdown</h3>
                        <div className="lst-1-container">
                            <div className="lst-1-chart">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={data2}
                                             cx="50%"
                                             cy="50%"
                                             dataKey="value"
                                             innerRadius="70%"
                                             outerRadius="100%"
                                             startAngle={90}
                                             endAngle={-270}
                                        >
                                        {data2.map((item,i)=>{
                                            return <Cell fill={colors[i]}/>
                                        })}
                                        </Pie>
                                        <text
                                          x="50%"
                                          y="55%"
                                          textAnchor="middle"
                                          fontSize={20}
                                          fontWeight={600}
                                          fill="black"
                                          >120k</text>
                                        <Tooltip/>
                                    </PieChart>
                                </ResponsiveContainer>    
                            </div> 
                            <div className="lst-1-details">
                              <div className="lst-1-chart-detail-1">
                                <p className="point"><span style={{color:"#FE6B00"}}><TbPointFilled/></span></p>
                                <p className="lst-1-txt">Fuel and Trasit</p>
                                <span className="lst-1-value">45%</span>
                              </div>
                              <div className="lst-1-chart-detail-1">
                                <p className="point"><span style={{color:"#111629"}}><TbPointFilled/></span></p>
                                <p className="lst-1-txt">Staff Payroll</p>
                                <span className="lst-1-value">30%</span>
                              </div>
                              <div className="lst-1-chart-detail-1">
                                <p className="point"><span style={{color:"#8665dc"}}><TbPointFilled/></span></p>
                                <p className="lst-1-txt">Maintenance</p>
                                <span className="lst-1-value">15%</span>
                              </div>
                              <div className="lst-1-chart-detail-1">
                                <p className="point"><span style={{color:"#8ad1ef"}}><TbPointFilled/></span></p>
                                <p className="lst-1-txt">Admin/Misc</p>
                                <span className="lst-1-value">10%</span>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="lst-2">
                     <div className="lst-2-top">
                       <h3>Recent Trasactions</h3>
                       <button className="lst-2-btn">View All</button>
                       </div>
                       <p>No Transactions to display</p>
                    </div>
                </div>
            </div> 
        </div>
        </>
    );
}

export default Finance;