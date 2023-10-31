import useCart from "../hooks/useCart";
import { useState } from "react";
import CartLineItem from "./CartLineItem";

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("wechat"); // Set an initial value

  const onSubmitOrder = () => {
    // dispatch({ type: REDUCER_ACTIONS.SUBMIT });

    const selectedPaymentMethod = document.querySelector(
      'input[name="pay-method"]:checked'
    ) as HTMLInputElement;

    const paymentMethod = selectedPaymentMethod.id;

    //Get customer information
    const name = (document.querySelector("#name") as HTMLInputElement).value;
    const phone = (document.querySelector("#phone") as HTMLInputElement).value;
    const address = (document.querySelector("#address") as HTMLInputElement)
      .value;

    fetch("/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        items: cart,
        paymentMethod: paymentMethod,
        customer: {
          name: name,
          phone: phone,
          address: address,
        },
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then((data) => {
        console.log("Payment successful:", data);
        setConfirm(true);
      })
      .catch((error) => {
        console.log("Payment failed:", error);
      });
  };

  const pageContent = confirm ? (
    <h2>下单成功，商家已接单，正在快速采摘中</h2>
  ) : (
    <>
      <h2 className="offscreen">Cart</h2>
      <ul className="cart">
        {cart.map((item) => {
          return (
            <CartLineItem
              key={item.id}
              item={item}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
            />
          );
        })}
      </ul>
      <div className="cart__totals">
        <p>总价: {totalPrice} 元</p>
      </div>
      <form action="" className="customer__info">
        <fieldset>
          <label>
            <p>请填写您的收货信息，我们会尽快为您安排发货</p>
          </label>
          <label htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="  您的姓名"
              required
            />
          </label>
          <label htmlFor="phone">
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="  您的联系方式"
              required
            />
          </label>
          <label htmlFor="address">
            <input
              id="address"
              name="address"
              type="text"
              placeholder="  您的送货地址"
              required
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>支付方式</legend>
          <label htmlFor="wechat">
            <input
              id="wechat"
              name="pay-method"
              type="radio"
              className="inline"
              checked={selectedPaymentMethod === "wechat"}
              onChange={() => setSelectedPaymentMethod("wechat")}
            />
            微信支付
          </label>
          <label htmlFor="alipay">
            <input
              id="alipay"
              name="pay-method"
              type="radio"
              className="inline"
              checked={selectedPaymentMethod === "alipay"}
              onChange={() => setSelectedPaymentMethod("alipay")}
            />
            支付宝
          </label>
          <label htmlFor="stripe">
            <input
              id="stripe"
              name="pay-method"
              type="radio"
              className="inline"
              checked={selectedPaymentMethod === "stripe"}
              onChange={() => setSelectedPaymentMethod("stripe")}
            />
            stripe
          </label>
        </fieldset>
        <button
          className="cart__submit"
          disabled={!totalItems}
          onClick={onSubmitOrder}
        >
          提交订单
        </button>
      </form>
    </>
  );

  const content = <main className="main main--cart">{pageContent}</main>;
  return content;
};

export default Cart;
