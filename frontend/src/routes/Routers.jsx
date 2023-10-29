import React from 'react'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Doctor from '../pages/Doctors/Doctor'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import DoctorDashboard from '../pages/DoctorDasboard'
import {Routes, Route} from 'react-router-dom'


const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/doctors" element={<Doctor/>}/>
        <Route path="/doctors/:id" element={<DoctorDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/doctordashboard" element={<DoctorDashboard/>}/>
    </Routes>
  )
}

export default Routers