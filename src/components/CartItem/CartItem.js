import React, { useEffect, useState } from 'react';
import './CartItem.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { IconButton } from '@material-ui/core';

function CartItem({item, saveProducts, setSaveProducts, cartProducts, setCartProducts, saveProduct}) {
    const [count, setCount] = useState(1);

    useEffect(() => {
        item.count = count;
    }, [count, item])

    const saveProductHandler = (item) => {
        let products= [...saveProducts, item];
        setSaveProducts(products);
        
        let finalProducts = cartProducts.filter(_item => _item.id !== item.id);
        setCartProducts(finalProducts);
    }

    const removeProductHandler = (item) =>{
        let finalProducts = cartProducts.filter(_item => _item.id !== item.id);
        setCartProducts(finalProducts);

        let finalProducts1 = saveProducts.filter(_item => _item.id !== item.id);
        setSaveProducts(finalProducts1);
    }

    const cartProductHandler = (item) =>{
        let products= [...cartProducts, item];
        setCartProducts(products);

        let finalProducts = saveProducts.filter(_item => _item.id !== item.id);
        setSaveProducts(finalProducts);
    }
    
    return (
        <div className="cartItem">
            <div className="item__image">
                <img src={item.image} alt="" />
                <div className="item__add">
                    <IconButton onClick={() => setCount(prevCount => --prevCount)} disabled={saveProduct}>
                    <RemoveIcon />
                    </IconButton>
                    <div className="item__count">{count}</div>
                    <IconButton onClick={() => setCount(prevCount => ++prevCount)} disabled={saveProduct}>
                    <AddIcon />
                    </IconButton>
                    
                </div>
            </div>
            <div className="item__description">
                <h4>{item.name}</h4>
                <p>Size: {item.size}</p>
                <h5>Rs. {item.price}</h5>
                <div className="item__options">
                    <button onClick={() => removeProductHandler(item)} className="option__button">REMOVE FROM CART</button>
                    {saveProduct? <button onClick={() => cartProductHandler(item)} className="option__button">MOVE TO CART</button>: <button onClick={() => saveProductHandler(item)} className="option__button">SAVE FOR LATER</button>}
                    
                </div>
            </div>
            <div className="item__delivery">
                <p>Delivery by Wed Jun 30 | -₹40</p>
            </div>
        </div>
    )
}

export default CartItem;
