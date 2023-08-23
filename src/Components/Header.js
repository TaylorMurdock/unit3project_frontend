import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="Nav">
      <Link to="/dashboard">
        <div>Taste Tally App</div>
      </Link>
    </nav>
  );
}

export default Header;
