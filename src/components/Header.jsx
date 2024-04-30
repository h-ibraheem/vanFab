import { Link, NavLink } from "react-router-dom";
import imageUrl from "../assets/images/avatar-icon.png"
export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="/Vans"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          About
        </NavLink>

        <Link to="login" className="login-link">
          <img src={imageUrl} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
}
