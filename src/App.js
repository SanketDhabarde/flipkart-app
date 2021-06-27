import { useState } from 'react';
import './App.css';
import Products from './components/Products/Products';
import Nav from './components/Nav/Nav';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';


function App() {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <BrowserRouter>
        <div className="app">
          <Nav/>
          <Route path="/" exact>
            <Products setCartProducts={setCartProducts} cartProducts={cartProducts}/>
          </Route>
          <Route path="/cart">
              <Cart cartProducts={cartProducts}/>
          </Route>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
