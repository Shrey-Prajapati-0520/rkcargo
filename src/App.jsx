import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Reviews from './pages/Reviews'
import TrackParcel from './pages/TrackParcel'
import Footer from './components/Footer'
import Login from './admin pannel/Login'
import Anavbar from './admin pannel/Anavbar'
import Dashboard from './admin pannel/Dashboard'
import Parcels from './admin pannel/Parcels'
import Customers from './admin pannel/Customers'
import Invoices from './admin pannel/Invoices'
import Finance from './admin pannel/Finance'
import Reports from './admin pannel/Reports'
import Vehicles from './admin pannel/Vehicles'
import Contacts from './admin pannel/Contacts'
import Review from './admin pannel/Review'
import AdminManagement from './admin pannel/AdminManagement'
import './App.css'

function App() {
 

  return (
     <>
      <Router>
        <Routes>
        <Route path="/admin/login" element={<Login/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/parcels" element={<Parcels/>}/>
        <Route path="/admin/customers" element={<Customers/>}/>
        <Route path="/admin/invoices" element={<Invoices/>}/>         
        <Route path="/admin/finance" element={<Finance/>}/>
        <Route path="/admin/reports" element={<Reports/>}/>
        <Route path="/admin/vehicles" element={<Vehicles/>}/>
        <Route path="/admin/contacts" element={<Contacts/>}/>
        <Route path="/admin/review" element={<Review/>}/>
        <Route path="/admin/adminmanagement" element={<AdminManagement/>}/>
        <Route path="*" element={
          <>
             <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/track-parcel" element={<TrackParcel />} />
                    <Route path="/admin/login" element={<Login/>} />
                </Routes>
              <Footer />
          </>
        }/>
        </Routes> 
      </Router> 
    </>
  )
}
     
export default App
