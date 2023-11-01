import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import { Icon } from "@iconify/react";
import useCart from "../../hooks/useCart";
import SearchBar from "../SearchBar";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  const viewCartButton = viewCart ? (
    <div className="shopcart-container" onClick={() => setViewCart(false)}>
      <Icon
        icon="material-symbols-light:shopping-bag-outline"
        className="nav-icon"
        width="28"
      />
    </div>
  ) : (
    <div className="shopcart-container" onClick={() => setViewCart(true)}>
      <Icon
        icon="material-symbols-light:shopping-bag-outline"
        width="28"
        className="nav-icon"
      />
      <button className="nav-productsCounts">
        <span>{totalItems}</span>
      </button>
    </div>
  );

  return (
    <nav className="nav">
      <a href="/">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <SearchBar />
      <ul>
        <li>{viewCartButton}</li>
        <li>
          <Icon icon="ph:user-light" width="23" className="nav-icon" />
        </li>
        {/* move to the rightbottom corner */}
        {/* <li>
          <a href="/contact">
            <Icon icon="mdi-light:message" width="23" />
          </a>
        </li> */}
      </ul>
    </nav>
  );
};
export default Navbar;
