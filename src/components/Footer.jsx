import React from "react";
import './Footer.css';
import { MdLocationOn, MdEmail } from "react-icons/md"
import { IoCall, IoTimeSharp } from "react-icons/io5"


const Footer = () =>{

    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="flogo">
                    <div className="logo">
                    <img src="/rk-logo.webp"/>
                    <div className="flogotext">
                    <span className="ftitle">RK Cargo</span>
                    <span className="fsubtitle">PACKERS & MOVERS</span>
                    </div>
                    </div>
                    <p>India's trusted packers and movers since 2009. Safe,reliable,and on-time household shifting,office relocation,vehicle transport & warehousing across 200+ cities.</p>
                </div>
                
                <div className="footer-section-links">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/track-parcel">Track Parcel</a></li>
                        <li><a href="/reviews">Reviews</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            
            <div className="footer-section-services">
                 <h4>SERVICES</h4>
                    <ul>
                        <li><a href="/contact">Household Shifting</a></li>
                        <li><a href="/contact">Office Relocatrion</a></li>
                        <li><a href="/contact">Vehicle Transportation</a></li>
                        <li><a href="/contact">Warehousing & Storage</a></li>
                        <li><a href="/contact">Loading & Unloading</a></li>
                        <li><a href="/contact">PAN India Cargo</a></li>
                    </ul>
            </div>
            <div className="footer-section-contact">
                <h4>CONTACT US</h4>
                <ul>
                    <li><span><MdLocationOn/> Vadodara,Gujarat,India.</span></li>
                    <li><a href="tel:+919227807476"><IoCall/> +91 9227807476</a></li>
                    <li><a href="mailto:info@rkcargo.com"><MdEmail/> rkmove84@gmail.com</a></li>
                    <li><span><IoTimeSharp/> Mon - Sun: 8:00 AM - 8:00 PM</span></li>
                </ul>
            </div>
            </div>
            <div className="servicesarea">
                <h4>SERVICES AREAS</h4>
                <div className="servicesarea-span">
                <span>Vadodara</span>
                <span>Ahmedabad</span>
                <span>Surat</span>
                <span>Rajkot</span>
                <span>Jamnagar</span>
                <span>Bhavnagar</span>
                <span>Anand</span>
                <span>Bharuch</span>
                <span>Mumbai</span>
                <span>Pune</span>
                <span>Delhi</span>
                <span>Hyderabad</span>
                <span>Bangalore</span>
                <span>Chennai</span>
                <span>200+</span>
            </div>
            </div>
            <div className="rights">
                © 2026 RK Cargo. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer; 
