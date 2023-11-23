import { Route, Routes, useParams  } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Products from "./pages/products";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import ShopingCart from "./pages/shopingCart";
import ProductContext from "./context/productContext";
import { useState } from "react";


function App() {
  const [products, setProducts] = useState([]);
  let { productTitle } = useParams();

  const getAllProducts = (data) => {
    setProducts(data)
}
  return (
    <div className="App">
         <ProductContext.Provider value={
          {
            products: products, 
            getAllProducts
          }
         }>
      <Routes>
        <Route path="/" element = {<Navbar></Navbar>}>
         <Route index element = {<Home></Home>}/>
         <Route path="about" element = {<About></About>}/>
         <Route path="contact" element = {<Contact></Contact>}/>
         <Route path={`/products/:${productTitle}`} element = {<Products></Products>
          } />
         <Route path="signin" element = {<SignIn></SignIn>}/>
         <Route path="signup" element = {<SignUp></SignUp>}/>
         <Route path="shopingcart" element = {<ShopingCart></ShopingCart>}/>

        </Route>
      </Routes>
          </ProductContext.Provider>
    </div>
  );
}

export default App;
