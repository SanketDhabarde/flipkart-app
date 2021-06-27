import React, { useEffect, useState } from 'react';
import './CartItem.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { IconButton } from '@material-ui/core';

function CartItem({item}) {
    const [count, setCount] = useState(1);
    console.log(item.count);

    useEffect(() => {
        item.count = count;
    }, [count, item])

    
    return (
        <div className="cartItem">
            <div className="item__image">
                <img src={item.image} alt="" />
                <div className="item__add">
                    <IconButton onClick={() => setCount(prevCount => --prevCount)}>
                    <RemoveIcon />
                    </IconButton>
                    <div className="item__count">{count}</div>
                    <IconButton onClick={() => setCount(prevCount => ++prevCount)}>
                    <AddIcon />
                    </IconButton>
                    
                </div>
            </div>
            <div className="item__description">
                <h4>{item.name}</h4>
                <p>Size: {item.size}</p>
                <h5>Rs. {item.price}</h5>
            </div>
            <div className="item__delivery">
                <button>Remove from cart</button><br />
                <button>Save for later</button>
            </div>
        </div>
    )
}

export default CartItem;
