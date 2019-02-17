import React from "react";
// Stateless Functional Component
const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="http://localhost:300">
                NavBar{" "}
                <span className="badge badge-pill badge-secondary">
                        {totalCounters}
                </span>
            </a>
        </nav>
    );
};

export default NavBar;
