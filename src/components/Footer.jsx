import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <img src="https://res.cloudinary.com/dhvigmhgw/image/upload/v1747943203/logo_rje1hn.png" alt="" className="imagenav" />
            <div className="about">
                <h1>About Us</h1>
                <p>Welcome to a world where fairy tales scroll with depth. Through parallax <br />magic, we bring front-end stories to life — one layer at a time. ✨</p>
            </div>
            <div className="nav">
                <h1>Links</h1>
                <p>
                    <Link to="/">HOME</Link> <br />
                    <Link to="/projects">PROJECTS</Link> <br />
                    <Link to="/making-of/matteo-giambarresi-de-raaf-en-de-vos">MAKING-OF</Link>
                </p>
            </div>
        </footer>
    );
}
