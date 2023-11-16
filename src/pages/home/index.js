import React, { useState } from "react";
import axios from "../../axios";
import ProductCard from "../../component/ProductCard"
const Home = () => {
  const [products, setProducts] = useState([]);
  axios
    .get("/products")
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err));
  return (
    <div>
      <div className="pl-20 font-bold text-[20px] p-3 bg-orange-300">Home</div>
      <div className="flex justify-center items-center flex-wrap gap-10 bg-orange-200 pt-8">
        {products.map((p) => (
          <ProductCard key={p._id} title = {p.title} description = {p.description} price={p.price} image= {p.images[0]}>
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
