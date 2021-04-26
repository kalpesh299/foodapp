import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Home from "./Component/Home/Home.js"
import Cart from "./Component/Cart/Cart.js"
import Pizza from "./Component/Pizza/Pizza.js"
import Burger from "./Component/Burger/Burger.js"


function App() {
  const [prevdata, setdata] = useState([]);
  useEffect(() => {
    foodData();
    cartData();
  }, [])

  const [cart, setcart] = useState([]);

  function orderNow(value) {
    const additem = {
      name: value.name,
      price: value.price,
      description: value.description,
      image: value.image
    }
    axios.post('/addcart', additem)
    cartData();
  }

  function foodData() {
    axios.get('/fooddata').then((res) => {
      setdata(res.data.results);
      console.log(res.data.results)
    });
  }

  function cartData() {
    axios.get('/cart').then((res) => {
      setcart(res.data)
    })
  }

  function deleteCartItem(value) {
    const data = {
      _id: value._id
    }
    axios.delete('/deleteitem', { data })
    cartData();
  }

  function removeAll() {
    axios.delete('/deletemany')
    cartData();
  }
  return (
    <Router>
      <div className="header">
        <NavLink className="allink homelink" to="/">Food Ordering Portal</NavLink>
        <NavLink className="allink cartlink" to="/cart"><i className="fa">&#xf07a;</i> ({cart.length})</NavLink>
      </div>
      <Switch>
        <Route exact path="/" component={() => <Home fetchdata={prevdata} />} />
        <Route exact path="/cart" component={() => <Cart cartdata={cart} deleteItem={deleteCartItem} clearCart={removeAll} />} />
        <Route exact path="/pizza" component={() => <Pizza fetchdata={prevdata} addprop={orderNow} />} />
        <Route exact path="/burger" component={() => <Burger fetchdata={prevdata} addprop={orderNow} />} />
      </Switch>
    </Router>
  );
}

export default App;
