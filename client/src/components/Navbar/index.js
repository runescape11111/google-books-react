import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Google Books React
            </Link>
            <ul className="navbar-nav flex-row">
                <li className="nav-item px-2">
                    <NavLink className="nav-link" exact to="/">
                        Search
                    </NavLink>
                </li>
                <li className="nav-item px-2">
                    <NavLink className="nav-link" exact to="/saved">
                        Saved
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;