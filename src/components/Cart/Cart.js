import React, { useState } from 'react'
import CartItem from '../CartItem/CartItem';
import './Cart.css';

function Cart({cartProducts}) {
    

    console.log(cartProducts);
    let totalPrice=0;
    cartProducts.forEach(item => {
        totalPrice+=(item.count * item.price);
    });
    

    return (
        <div className="cart">
            <div className="cart__left">
                <div className="cart__header">my cart({cartProducts.length})</div>
                <div className="cart__items">
                    {cartProducts?.map(item => (
                        <CartItem item={item} key={item.id}/>
                    ))}
                </div>  
            </div>
            <div className="cart__right">
                <p>Price ({cartProducts.length} items): {totalPrice}</p>
            </div>
        </div>
    )
}

export default Cart;
