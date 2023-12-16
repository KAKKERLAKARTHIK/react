import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 
import RegistrationForm from '../RegistrationForm/Registration'
import Error from '../Erorpage/error'
import TableObject from '../TableAdding/TabaleObject'
import Homepage from '../AfterLogin/HomePage/Homepage'
import About from '../AfterLogin/AboutPage/About'
import Settings from '../AfterLogin/SettingsPage/Settings'
import Navbar from '../Navbar/Navbar'
import Product from '../AfterLogin/ProductDetails/Product'
export default function NavigathionStak() {
  return (
    <BrowserRouter>
    <Routes>
        {/* <Route path="RegistrationForm" element={<RegistrationForm/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='TableObject' element={<TableObject/>}/> */}

<Route path="/Navbar" Component={Navbar}/>   
        <Route path="/" Component={Homepage}/>
        <Route path="/About" Component={About}/>
        <Route path="/Settings" Component={Settings}/>
        <Route path="/ProductDetails/:id" Component={Product}/>
    </Routes>
    
    </BrowserRouter>
  )
}
