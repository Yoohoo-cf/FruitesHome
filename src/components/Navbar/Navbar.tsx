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
          <a href="/">网站首页</a>
        </li>
        <li>
          <a href="/about">我们的故事</a>
        </li>
        <li>
          <a href="/products">水果</a>
        </li>
        <li>
          <a href="/blogs">Blog</a>
        </li>
        <li>
          <form action="">
            <input type="text" name="search" id="srch" placeholder="搜索水果" />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </li>
      </ul>
      <a className="cta" href="/contact">
        <button>联系我们</button>
      </a>
    </nav>
  );
};
export default Navbar;
