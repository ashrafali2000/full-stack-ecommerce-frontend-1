import React ,{ useState } from 'react'
import ProductCard from "../../component/ProductCard"
import axios from "../../axios";
import { useNavigate } from 'react-router-dom';
const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getProductHandler = (mame) => {
    const productName = name.toLowerCase();
    axios
      .get(`/products/${productName}`)
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
    navigate(`/products${productName}`);
  };

  return (<div>
    <div className="pl-20 font-bold text-[20px] p-3 bg-orange-300">Home</div>
    <div className="flex justify-center items-center flex-wrap gap-10 bg-orange-200 pt-8">
        {products.map((p) => (
          <ProductCard key={p._id} title = {p.title} description = {p.description} price={p.price} image= {p.images[0]}>
          </ProductCard>
        ))}
      </div>
  </div>
  )
}

export default Products