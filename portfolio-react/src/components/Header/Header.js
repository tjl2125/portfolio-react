import React from "react"; 
import { Link } from "react-router-dom"; 
import "./style.css"; 

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            Taylor Leong
        </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                        to="/"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/home"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        >
                        Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/projects"
                        className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                        >
                        Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/resume"
                        className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
                        >
                        Resume
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header; 