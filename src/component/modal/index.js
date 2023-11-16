import { Button, Modal } from 'antd';
const ProductModal = ({isModalOpen, handleCancel , img, price, description, title}) => {

  return (
    <>
      <Modal title="Basic Modal" open={isModalOpen}  onCancel={handleCancel}>
       <img  src={img}/>
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
      </Modal>
    </>
  );
};
export default ProductModal;