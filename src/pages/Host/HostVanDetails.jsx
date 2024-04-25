import React from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";

export default function HostVanDetails() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

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
            to="priceing"
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

        <Outlet context={{currentVan}} />
      </div>
    </section>
  );
}
