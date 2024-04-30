import { Link, Outlet, NavLink, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params }) {
  await requireAuth();
  return getHostVans(params.id);
}

export default function HostVanDetails() {
  const currentVan = useLoaderData();

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all Vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : null)}
            to="."
            end
            relative="path"
          >
            Details
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : null)}
            to="pricing"
          >
            Pricing
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : null)}
            to="photos"
          >
            Photos
          </NavLink>
        </nav>

        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}
