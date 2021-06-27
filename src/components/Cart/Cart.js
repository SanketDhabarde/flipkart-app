import React, { useState } from 'react'
import CartItem from '../CartItem/CartItem';
import './Cart.css';

function Cart({cartProducts, setCartProducts}) {
    const [saveProducts, setSaveProducts] = useState([]);
   
    console.log(cartProducts);
    let totalPrice=0;
    cartProducts.forEach(item => {
        totalPrice+=(item.count * item.price);
    });
    

    return (
        <div className="cart">
            <div className="cart__products">
                <div className="cart__order">
                    <div className="cart__header">My cart({cartProducts.length})</div>
                    <div className="cart__items">
                        {cartProducts?.map(item => (
                            <CartItem item={item} key={item.id} saveProducts={saveProducts} setSaveProducts={setSaveProducts} setCartProducts={setCartProducts} cartProducts={cartProducts}/>
                        ))}
                    </div>  
                </div>
                <div className="cart__saveForLater">
                    <div className="cart__header">Save for later({saveProducts.length})</div>
                    <div className="cart__items">
                         {saveProducts?.map(item => (
                             <CartItem item={item} key={item.id} saveProducts={saveProducts} setSaveProducts={setSaveProducts} setCartProducts={setCartProducts} cartProducts={cartProducts} saveProduct/>
                         ))}   
                </div>  
            </div>
            </div>
            
            <div className="cart__right">
                <h5 className="cart__header">PRICE DETAILS</h5>
                <p className="cart__values">Price ({cartProducts.length} items):Rs. {totalPrice}</p>
                <p className="cart__values">Discount: Rs. -40</p>
                <p className="cart__total">Total Price: Rs. {totalPrice - 40}</p>
            </div>
        </div>
    )
}

export default Cart;
