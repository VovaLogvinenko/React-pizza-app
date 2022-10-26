import { useState, React } from "react";
import CartItem from "./cart-item/CartItem";
import { removeAllPizza } from '../../../../../../features/pizza/pizzaSlice'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

function Cart() {
  const dispatch = useDispatch()
  const [cart, setCart] = useState(0);
  const stateCart = useSelector(state => state.pizza.cart)
  const cartPizza = useSelector(state => state.pizza.cartPizza)

  function cartOpen() {
    setCart((prevCart) => (prevCart = 1));
    document.body.style.overflow = 'hidden';
  }

  function cartClose() {
    setCart((prevCart) => (prevCart = 0));
    document.body.style.overflow = 'visible';
  }

  function clearCart() {
    dispatch(removeAllPizza())
  }

  return (
    <div>
      <div className={cart === 1 ? "cart-active" : "cart-not__active"}>
        <div className="hide-cart">
            <div className="cart-header">
                <h2 className="cart-title">Кошик</h2>
                {cartPizza.length ? <h3 className="clear-cart" onClick={() => clearCart()}>Очистити кошик</h3> : ""}
            </div>
            <div className="cart-order__block">
                {cartPizza.map(list => (
                  <CartItem key={list.id} info={list}/>
                ))}
            </div>
            {cartPizza.length ? <h2 className="together-price">Разом: ₴ {stateCart.price}</h2> : ""}
            {cartPizza.length ? <Link to="/PageCart" className="to-cart" onClick={() => cartClose()}>До кошика</Link> : ""}
        </div>
        <div className="bg-cart" onClick={() => cartClose()}></div>
      </div>
      {cartPizza.length ? <Link to="/PageCart"className="cart-mob" onClick={() => cartClose()}>До кошика</Link> : ""}
       <div className="cart" onClick={() => cartOpen()}>
        <div className="price">{stateCart.price} грн</div>
        <div className="count">
          <img
            src="./image/menu-main/shopping-cart.svg"
            alt="корзина"
            width="20"
            className="cart-img"
          />
          <span>{stateCart.count}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
