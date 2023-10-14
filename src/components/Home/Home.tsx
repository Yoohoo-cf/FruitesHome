import "./Home.css";
import logo2 from "../../assets/logo/logo2.png";
import apple1 from "../../assets/images/apple1.png";
import arrow from "../../assets/images/arrow.png";
import apple2 from "../../assets/images/apple2.png";
import apple3 from "../../assets/images/apple3.jpeg";
import Footer from "../Footer/Footer";

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
      <section className="product" id="product">
        <button className="pre-btn">
          <img src={arrow} alt="pre-arrow" />
        </button>
        <button className="nxt-btn">
          <img src={arrow} alt="nxt-arrow" />
        </button>
        <h2 className="headtitle">Headline</h2>
        <div className="product-container">
          <div className="product-card">
            <div className="product-image">
              <img src={apple1} className="product-thumb" alt="apple" />
              <button className="card-btn">加入购物车</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">红富士</h2>
              <p className="product-description">酸甜多汁， 脆甜可口</p>
              <span className="price">¥68</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={apple2} className="product-thumb" alt="apple" />
              <button className="card-btn">加入购物车</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">红富士</h2>
              <p className="product-description">酸甜多汁， 脆甜可口</p>
              <span className="price">¥68</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={apple3} className="product-thumb" alt="apple" />
              <button className="card-btn">加入购物车</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">红富士</h2>
              <p className="product-description">酸甜多汁， 脆甜可口</p>
              <span className="price">¥68</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
