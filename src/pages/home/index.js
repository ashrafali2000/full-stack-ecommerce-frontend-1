import React, { useState } from "react";
import axios from "../../axios";
import { Card } from "antd";
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
          <Card
            key={p._id}
            className="w-96 h-96 border-orange-500 flex flex-col items-center justify-center"
          >
            <img className="w-60 h-48" src={p.images[0]} />
            <p className="text-orange-700 font-bold text-[15px]">{p.title}</p>
            <p className="text-orange-700 font-bold text-[15px]">{p.description}</p>
            <p className="text-orange-700 font-bold text-[15px]">{p.price}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
