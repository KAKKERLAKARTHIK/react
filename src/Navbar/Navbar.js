import React from 'react'
import { Link } from 'react-router-dom'
 
export default function Navbar() {
  const  style={
        marginTop:"15px",
        marginLeft:"20px",
        listStyleType:"none",
        textDecoration:"none",
        color:"black",
        listStyleType: "none" 
         
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
         <ul>
            <li style={style}>
        <Link to={"/"} style={style}>home</Link>
        
        <Link to={"About"} style={style}>About</Link>
        <Link to={"Settings"} style={style}>Settings</Link>
        </li>
        </ul>
      </div>
    </div>
  </nav>
  
  )
}
