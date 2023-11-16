import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Products from "./pages/products";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import ShopingCart from "./pages/shopingCart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Navbar></Navbar>}>
         <Route index element = {<Home></Home>}/>
         <Route path="about" element = {<About></About>}/>
         <Route path="contact" element = {<Contact></Contact>}/>
         <Route path="products" element = {<Products></Products>}/>
         <Route path="signin" element = {<SignIn></SignIn>}/>
         <Route path="signup" element = {<SignUp></SignUp>}/>
         <Route path="shopingcart" element = {<ShopingCart></ShopingCart>}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
