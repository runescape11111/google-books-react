import { Link, NavLink, useLocation } from "react-router-dom";

function NavItem({to, children}) {
    const {pathname} = useLocation();
    return (
        <li className="nav-item px-2">
            <NavLink className="nav-link" exact to={to}>
                {children} {" "}
                {pathname === to && <span className="sr-only">(current)</span>}
            </NavLink>
        </li>
    )
}

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