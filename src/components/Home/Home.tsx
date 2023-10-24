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
          <a href="#product">
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
      {/* <h2 className="headtitle"></h2>
        <div className="product-container">
          <div className="product-card">
            <div className="product-image">
              <img src={apple1} className="product-thumb" alt="apple" />
              <button className="card-btn">加入购物车</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">特级十斤装大果</h2>
              <p className="product-description">果径80mm-85mm, 汁润如蜜</p>
              <span className="price">¥80</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={apple2} className="product-thumb" alt="apple" />
              <button className="card-btn">加入购物车</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">特级十斤装中果</h2>
              <p className="product-description">
                果径75mm-80mm， 秋日解渴，口口天然果汁
              </p>
              <span className="price">¥75</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={apple3} className="product-thumb" alt="apple" />
              <button className="card-btn">加入购物车</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">特级五斤装礼品果</h2>
              <p className="product-description">果径80mm-85mm，颗颗精选</p>
              <span className="price">¥45</span>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Home;
