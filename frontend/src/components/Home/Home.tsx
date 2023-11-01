import "./Home.css";
import arrow from "../../assets/images/arrow.png";
import ProductList from "../ProductList";

function Home() {
  return (
    <div className="hero">
      <div className="main-page">
        <div className="home-image-container">
          <h1>我们每天采摘， </h1>
          <h1>只为了新鲜送达。</h1>
          <a href="#main--products">
            <button>购买</button>
          </a>
        </div>
        <div className="description">
          <ul>
            <li>
              <i className="fa-solid fa-fan"></i>
              <p>自然生长</p>
            </li>
            <li>
              <i className="fa-solid fa-truck"></i>
              <p>当日产地直发</p>
            </li>
            <li>
              <i className="fa-solid fa-clock"></i>
              <p>24/7 接单</p>
            </li>
            <li>
              <i className="fa-solid fa-bell"></i>
              <p>快递到家</p>
            </li>
          </ul>
        </div>
      </div>
      <ProductList />
      {/* <section className="product" id="product">
      <button className="pre-btn">
        <img src={arrow} alt="pre-arrow" />
      </button>
      <button className="nxt-btn">
        <img src={arrow} alt="nxt-arrow" />
      </button> */}
    </div>
  );
}

export default Home;
