import React from "react";
// Stateless Functional Component
const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="badge badge-pill badge-secondary">
                {totalCounters}
            </span>
        </nav>
    )
};

export default NavBar;
