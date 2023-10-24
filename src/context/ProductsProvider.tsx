import React, {
  Children,
  createContext,
  ReactElement,
  useState,
  useEffect,
} from "react";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  description: string;
};

// const initState: ProductType[] = [];

const initState: ProductType[] = [
  {
    id: 1,
    name: "特级红富士10斤大果",
    price: 80,
    description: "果径80mm-85mm， 酸甜爽口， 皮薄汁多",
  },
  {
    id: 2,
    name: "特级红富士10斤中果",
    price: 75,
    description: "果径75mm-80mm， 酸甜爽口， 皮薄汁多",
  },
  {
    id: 3,
    name: "特级红富士5斤礼盒大果",
    price: 45,
    description: "果径80mm-85mm， 酸甜爽口， 皮薄汁多",
  },
];

export type UseProductContexType = { products: ProductType[] };

const initContextState: UseProductContexType = { products: [] };

const ProductsContext = createContext<UseProductContexType>(initContextState);

type ChilrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChilrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  // useEffect(() => {
  //   const fetchProducts = async (): Promise<ProductType[]> => {
  //     const data = await fetch("http://localhost:3500/products")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .catch((err) => {
  //         if (err instanceof Error) console.log(err.message);
  //       });
  //     return data;
  //   };
  //   fetchProducts().then((products) => setProducts(products));
  // }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
