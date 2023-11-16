import React , { useState } from 'react'
import { Card}  from "antd"
import ProductModal from '../modal';
const ProductCard = ({title, description, price, image}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Card className="w-96 h-96 border-orange-500 flex flex-col items-center justify-center">
         <img className="w-60 h-48" src={image} />
         <div>
            <p className="text-orange-700 font-bold text-[15px]">{title}</p>
            <p className="text-orange-700 font-bold text-[15px]">{description}</p>
            <p className="text-orange-700 font-bold text-[15px]">{price}</p>
         </div>
         <div>
          <ProductModal isModalOpen = {isModalOpen} handleCancel = {handleCancel} img = {image} title= {title} price={price} ></ProductModal>
          <button className='border-orange-700 rounded-[10px] p-3' onClick={showModal}>View Details</button>
          <button className='bg-orange-500 hover:bg-orange-400 rounded-[10px] p-3 font-bold text-white'>Add to Cart</button>
         </div>
    </Card>
  )
}

export default ProductCard