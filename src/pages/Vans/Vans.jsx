import React from "react";

import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
  return getVans();
}

export default function Vans() {

  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = React.useState(null);
  const vans = useLoaderData();
   
  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={`${van.id}`}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

 
  if (error) {
    return <h1>There was an error : {error.message}</h1>;
  }
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>

      <div className="van-list-filter-buttons">
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          Simple
        </button>

        <button
          className={`van-type luxury
          ${typeFilter === "luxury" ? "selected" : ""}
          `}
          onClick={() => setSearchParams({ type: "luxury" })}
        >
          Luxury
        </button>

        <button
          className={`van-type rugged
          ${typeFilter === "rugged" ? "selected" : null}
          `}
          onClick={() => setSearchParams({ type: "rugged" })}
        >
          Rugged
        </button>

        {typeFilter ? (
          <button
            className="van-type clear-filters"
            onClick={() => setSearchParams({})}
          >
            Clear Filter
          </button>
        ) : null}
      </div>

      <div className="van-list">{vanElements}</div>
    </div>
  );
}
