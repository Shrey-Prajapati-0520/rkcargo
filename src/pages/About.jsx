import React from "react";
import { MdLocationOn, MdEmail } from "react-icons/md"
import './About.css'

const About = () => {
  return (

    <section className="header">
       <div className="header-content">
          <h4>OUR STORY</h4>
          <h1>About RK Cargo <span style={{color:"blue"}}>Packers & Movers</span> Vadodara</h1>
          <p>Fifteen years, fifty thousand families, and a single unwavering commitment — to move your world with care.</p>
      </div>
       <div className="story-content">
          <h4>THE JOURNEY</h4>
          <h1>From 2 trucks to 200+ cities — driven by one promise</h1>
          <p className="p1">Founded in 2009 in Vadodara, Gujarat, RK Cargo began as a small family-run business with just two trucks and a handful of dedicated helpers. What set us apart wasn't scale — it was our obsession with treating every customer's belongings as our own.</p>
          <p className="p2">Word-of-mouth grew our reputation across Gujarat, and by 2015 we launched inter-state relocation services. By 2018, we had proudly served over 50,000 customers. Today, we operate 100+ fleet vehicles, 20+ warehouses, and a 500+ strong trained workforce across 200+ Indian cities.</p>
          <p className="p3">Our secret? A customer-first philosophy, transparent pricing, and the discipline of a logistics operation that never cuts corners. Whether you're moving a 1BHK across the city or shipping cargo across the country — you get the same premium care.</p>
      </div>
      <div className="cards">
          <div className="c1">
              <span className="i1"><MdLocationOn/></span>
              <h4>MISSION</h4>
              <h2>Redefining relocation, one move at a time</h2>
              <p>To deliver reliable, transparent and stress-free relocation experiences to every Indian family and business — anchored in trust, technology and respect for your belongings.</p>
          </div>
          <div className="c2">
              <span className="i2"><MdLocationOn/></span>
              <h4>VISION</h4>
              <h2>India's most trusted logistics partner</h2>
              <p>To be the country's leading relocation and cargo services brand — recognised for uncompromising quality, fair pricing, and an unmatched customer experience across every city we serve.</p>
          </div>
      </div>
      <div className="infra">
        <h4>OUR INFRASTRUCTURE</h4>
        <h1>Built for scale, tuned for quality</h1>
      </div>
      <div className="infra-num">
      <div className="num1">
        <p className="n">500+</p>
        <p className="t">Trained Professionals</p>
      </div>
      <div className="num1">
        <p className="n">100+</p>
        <p className="t">Fleet Vehicles</p>
      </div>
      <div className="num1">
        <p className="n">20+</p>
        <p className="t">Warehouses</p>
      </div>
      <div className="num1">
        <p className="n">7 Days</p>
        <p className="t">Customer Support</p>
      </div>
      </div>
    </section>
    
  );
};

export default About;