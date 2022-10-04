import product from './product.module.css'


const Product = ({ name, img, price, button, discount }) => {

    return (
        <>
            <div className={product.image}><img src={img} alt="" /></div> 
            <div className={product.price}><b>{price}</b> <span>{discount}</span></div> 
            <div className={product.name}><li>{name}</li></div>
            <div className={product.button}><button>{button}</button></div>
        </>

    ); 
};

export default Product; 