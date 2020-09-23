import React from "react";
import { Link, useLocation } from "react-router-dom";

const styles = {
    font: {
        fontFamily: "Crimson Text, serif",
    }
}

function NavBar() {
    // We'll go into the Hooks API later, for now, we are just using some code
    // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    // This allows the component to check the route any time the user uses a link to navigate.
    const location = useLocation();

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link style={styles.font} to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    About
        </Link>
            </li>

            <li className="nav-item">
                <Link style={styles.font}
                    to="/past_work"
                    className={location.pathname === "/past_work" ? "nav-link active" : "nav-link"}
                >
                    Past Work
        </Link>
            </li>
            <li className="nav-item">
                <Link style={styles.font}
                    to="/contact"
                    className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                >
                    Contact
        </Link>
            </li>

        </ul>
    );
}

export default NavBar;