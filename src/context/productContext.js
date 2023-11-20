import { createContext } from "react";

const ProductContext = createContext({
    products:[],
    getAllProducts: () => {}
});
export default ProductContext;