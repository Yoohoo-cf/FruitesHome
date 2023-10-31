import { ProductType } from "../context/ProductsProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";
import { ReactElement, memo } from "react";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};
const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {
  const img: string = new URL(
    `../assets/images/${product.id}.jpeg`,
    import.meta.url
  ).href;

  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = inCart ? "❤️" : null;

  const content = (
    <article className="product">
      <img src={img} alt="{product.name}" className="product__img" />
      <div className="product__desc">
        <h3>{product.name}</h3>
        <h5>{product.description}</h5>
        <span>
          {new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY",
          }).format(product.price)}
          {itemInCart}
        </span>
      </div>
      <button onClick={onAddToCart}>加入购物车</button>
    </article>
  );

  return content;
};

function areProductsEqual(
  { product: prevProduct, inCart: prevInCart }: PropsType,
  { product: nextProduct, inCart: nextInCart }: PropsType
) {
  return (
    Object.keys(prevProduct).every((key) => {
      return;
      prevProduct[key as keyof ProductType] ===
        nextProduct[key as keyof ProductType];
    }) && prevInCart === nextInCart
  );
}

const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual);

export default MemoizedProduct;
