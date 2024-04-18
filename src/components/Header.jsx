import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <Link to="/Vans">Vans</Link>
        <Link to="/host">Host</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
