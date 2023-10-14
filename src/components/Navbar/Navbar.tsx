import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <ul>
        <li>
          <form action="">
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </li>
        <li>
          <a href="/cart">
            <i className="fa-solid fa-bag-shopping"></i>
          </a>
        </li>
        <li>
          <a href="/contact">
            <i className="fa-regular fa-comment-dots fa-flip-horizontal fa-lg"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
