import "./Home.css";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div className="hero">
      <div className="home-container">
        <h1>绿色健康的水果,</h1>
        <h1>其实离我们并不遥远</h1>
        <a>
          <button>购买水果</button>
        </a>
        <ul>
          <li>自家果园种植</li>
          <li>自然生长</li>
          <li>快递到家</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
