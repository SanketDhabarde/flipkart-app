import React from 'react';
import './Product.css';

function Product({item, setCartProducts, cartProducts}) {

    const clickHandler = (item) =>{
        let products = [...cartProducts, item];
        setCartProducts(products);
    }
    return (
        <div className="product">
            <img src={item.image} alt="" />
            <div className="product__footer">
                <h4>{item.name}</h4>
                <p>Rs. {item.price}</p>
                <button className="product__cartButton" onClick={() => clickHandler(item)}>Add to cart</button>
            </div>
        </div>
    )
}

export default Product;
