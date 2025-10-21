import {Link} from "react-router-dom";
import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Gestion stagiaires</Link>
            <div>
                <Link to="/" className="btn btn-primary">Home</Link>
                <Link to="/add" className="btn btn-primary">Add</Link>
            </div>
        </nav>
    );
}