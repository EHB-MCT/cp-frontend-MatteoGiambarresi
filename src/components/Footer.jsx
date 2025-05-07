import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
        <img className= "image" src="/logo.png" alt="" />
        <div className="about">
            <h1>About Us</h1>
            <p>Welcome to a world where fairy tales scroll with depth. Through parallax <br />magic, we bring front-end stories to life — one layer at a time. ✨</p>
        </div>
        <div className="nav">
        
        <h1>Links</h1>
        <p>
            <Link to="/">HOME</Link> <br />
            <Link to="/Projects">PROJECTS</Link> <br />
            <Link to="/Projects">MAKING-OF</Link>
        </p>
        </div>
      
        </footer>
    );
}

export default Footer;