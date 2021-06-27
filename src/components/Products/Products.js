import React from 'react';
import './Products.css';
import data from '../../data/data.json';
import Product from '../Product/Product';

function Products({cartProducts, setCartProducts}) {
    return (
        <div className="products">
            {data.map(item => (
                <Product item={item} key={item.id} setCartProducts={setCartProducts} cartProducts={cartProducts}/>
            ))}
        </div>
    )
}

export default Products;
