import React from 'react';
import './Nav.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav">
            <Link to="/cart">
                <div className="nav__cart">
                    <AddShoppingCartIcon/> Cart
                </div>
            </Link>
        </div>
    )
}

export default Nav;
