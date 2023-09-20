import React,{useState} from "react";
import  './navbar.css'

const NavBar = () => {
  const[menuOpen,setMenuOpen]=useState(false)
  return (
    <>
    <nav>
      <p><a href="#"></a>Travel</p>
      <div className="menu" onClick={()=>{
        setMenuOpen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        
        <li><a  href="#top">Home</a></li>
        <li><a  id="#destination">Destination</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#about" >About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
     
    </nav>
    
    </>
  );
};

export default NavBar;
