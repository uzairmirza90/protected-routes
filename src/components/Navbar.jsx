import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="pages">
                <Link to="/" className="page">Login</Link>
                <Link to="/home" className="page">Home</Link>
            </div>
        </div>
    );
}

export default Navbar;
