import { NavLink, useLocation} from "react-router-dom";

function NavItem({to, exact, children}) {
    const {pathname} = useLocation();
    return (
        <li className="nav-item px-2">
            <NavLink className="nav-link" exact={exact} to={to}>
                {children} {" "}
                {pathname === to && <span className="sr-only">(current)</span>}
            </NavLink>
        </li>
    )
};

export default NavItem;