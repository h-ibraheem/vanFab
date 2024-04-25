import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="host-nav">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          end
          to="."
        >
          Dashboard
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="income"
        >
          Income
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="Vans"
        >
          Vans
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
