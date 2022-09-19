import { Link } from "react-scroll";
import "../styles/header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link
            className="btn-nav"
            activeClass="active"
            to="about"
            smooth={true}
            duration={500}
          >
            Menu Item
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link
            className="btn-nav"
            activeClass="active"
            to="contact"
            smooth={true}
            duration={500}
          >
            Menu Item
          </Link>
        </li>
        <li className="navbar-links-item">
          <div className="btn-nav">Menu Item</div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
