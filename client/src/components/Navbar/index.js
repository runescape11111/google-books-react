import { Link } from "react-router-dom";
import NavItem from "./NavItem";

function Navbar() {
    return (
        <nav className="navbar navbar-dark" style={{backgroundColor: "#222"}}>
            <Link className="navbar-brand" exact="exact" to="/">
                Google Books React
            </Link>
            <ul className="navbar-nav flex-row">
                <NavItem exact to="/">Search</NavItem>
                <NavItem exact to="/saved">Saved</NavItem>
            </ul>
        </nav>
    )
};

export default Navbar;