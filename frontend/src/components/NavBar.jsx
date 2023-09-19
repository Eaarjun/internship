import React,{useState} from "react";
import Navbar from "./Navbar.css"
import { Link,NavLink } from "react-router-dom";



const NavBar = () => {
  const[menuOpen,setMenuOpen]=useState(false)
  return (
    <>
    <nav>
      <p>Travel</p>
      <div className="menu" onClick={()=>{
        setMenuOpen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><a to="/">Home</a></li>
        <li><a to="/destination">Destination</a></li>
        <li><a to="/blog">Blog</a></li>
        <li><a to="/about">About</a></li>
        <li><a to="/contact">Contact</a></li>
      </ul>
    </nav>
    </>
  );
};

export default NavBar;
