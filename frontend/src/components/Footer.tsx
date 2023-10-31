import we from "../../assets/images/we.png";
import logo_white from "../assets/logo/logo_white.png";

const Footer = () => {
  const year: number = new Date().getFullYear();

  const content = (
    <footer className="footer">
      <div className="brand__info">
        <a href="/" className="footer__logo">
          <img src={logo_white} alt="logo" />
          <h1>果场</h1>
        </a>
        <p>果期：10月中旬-12月中旬</p>
        <p>送货至除内蒙，新疆，西藏，海南之外的任何省市</p>
      </div>
      <div className="brand__service">
        <ul>
          <li>
            <i className="fa-solid fa-phone"></i>
            <h3>联系方式</h3>
            <p>+86 18067897890</p>
            <p>微信： law520-1314</p>
          </li>
          <li>
            <i className="fa-solid fa-location-dot"></i>
            <h3>地址</h3>
            <p>陕西省</p>
            <p>咸阳市乾县</p>
          </li>
          <li>
            <i className="fa-solid fa-clock-rotate-left"></i>
            <h3>联系时间</h3>
            <p>每天</p>
            <p>早8点～晚8点</p>
          </li>
        </ul>
      </div>
      <div className="brand__right">
        <p>W's果场版权所有 All Right Reserved &copy; {year}</p>
      </div>
    </footer>
  );

  return content;
};

export default Footer;
