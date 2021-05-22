import { Link } from "react-router-dom";
import NavItem from "./NavItem";

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" exact to="/">
                Google Books React
            </Link>
            <ul className="navbar-nav flex-row">
                <NavItem to="/">Search</NavItem>
                <NavItem to="/saved">Saved</NavItem>
            </ul>
        </nav>
    )
};

export default Navbar;