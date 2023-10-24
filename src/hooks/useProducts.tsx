import { useContext } from "react";
import ProductsContext from "../context/ProductsProvider";
import { UseProductContexType } from "../context/ProductsProvider";

const useProducts = (): UseProductContexType => {
  return useContext(ProductsContext);
};

export default useProducts;
