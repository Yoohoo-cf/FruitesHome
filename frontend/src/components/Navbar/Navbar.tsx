import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
// import useCart from "../../hooks/useCart";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ viewCart, setViewCart }: PropsType) => {
  // const { totalItems, totalPrice } = useCart();

  const button = viewCart ? (
    <i
      className="fa-solid fa-bag-shopping"
      onClick={() => setViewCart(false)}
    ></i>
  ) : (
    <i
      className="fa-solid fa-bag-shopping"
      onClick={() => setViewCart(true)}
    ></i>
  );

  return (
    <nav className="nav">
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <ul>
        <li>
          <i className="fa-solid fa-magnifying-glass"></i>
        </li>
        <li>{button}</li>
        <li>
          <a href="/contact">
            <i className="fa-regular fa-comment-dots fa-flip-horizontal fa-lg"></i>
          </a>
        </li>
        {/* <li>
          <p>Total Items: {totalItems}</p>
        </li>
        <li>
          <p>Total Price: {totalPrice}</p>
        </li> */}
      </ul>
    </nav>
  );
};
export default Navbar;
