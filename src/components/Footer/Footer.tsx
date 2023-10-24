import we from "../../assets/images/we.png";
import "./Footer.css";
import useCart from "../../hooks/useCart";

type PropsType = { viewCart: boolean };

const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <p>Shopping cart &copy; {year}</p>
  ) : (
    <>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
      <p>Shopping cart &copy; {year}</p>
    </>
  );

  const content = <footer className="footer">{pageContent}</footer>;

  return content;
  // return (
  //   <div className="footer">
  //     <div className="container wrap">
  //       <div className="row">
  //         <div className="column">
  //           <div className="footer-widget about-widget">
  //             <div className="cards">
  //               <img src={we} alt="wechat pay" />
  //               <i className="fa-brands fa-alipay"></i>
  //             </div>
  //             <p>
  //               <span>
  //                 <i className="fa-solid fa-lock"></i>
  //               </span>
  //               安全支付
  //             </p>
  //           </div>
  //         </div>
  //         <div className="column">
  //           <div className="footer-widget information-widget">
  //             <ul>
  //               <li>
  //                 <a href="#">关于我们</a>
  //               </li>
  //               <li>
  //                 <a href="#">售后服务</a>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //         <div className="column">
  //           <div className="footer-widget contact-widget">
  //             <h2 className="widget-title">联系我们</h2>
  //             <div className="contact-address">
  //               <i className="fa-solid fa-location-dot"></i> 地址 :
  //               陕西省咸阳市乾县
  //             </div>
  //             <div className="contact-number">
  //               <i className="fa-solid fa-phone"></i> 联系电话 : +86 18067897890
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Footer;
