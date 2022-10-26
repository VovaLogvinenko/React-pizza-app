import React from "react";
import { useDispatch } from 'react-redux'
import { addPizzaCart, removePizza, removeFullPizza } from "../../../../../../../features/pizza/pizzaSlice";
import { useSelector } from "react-redux"


function CartItem( { info } ) {
  const dispatch = useDispatch()

  const italianPizza = useSelector(state => state.pizza.italianPizza)
  const italianPizzaCount = italianPizza.find(pizza => pizza.counters === info.counters)

  const americanPizza = useSelector(state => state.pizza.americanPizza)
  const americanPizzaCount = americanPizza.find(pizza => pizza.counters === info.counters)

  const other = useSelector(state => state.pizza.other)
  const otherCount = other.find(pizza => pizza.counters === info.counters)

  function addPizza(id) {
    if(italianPizzaCount) {
      const pizzaCart = {
        img: info.img,
        name: info.name,
        description: info.description,
        price: info.price,
        counters: italianPizzaCount.counters,
        id: info.id
      }

      if(id === 1) {dispatch(addPizzaCart(pizzaCart))}
      else if (id === 2) {dispatch(removeFullPizza(pizzaCart))}
      else if(id === 0) {dispatch(removePizza(pizzaCart))}

    } else if (americanPizzaCount) {
      const pizzaCart = {
        img: info.img,
        name: info.name,
        description: info.description,
        price: info.price,
        counters: americanPizzaCount.counters,
        id: info.id
      } 

      if(id === 1) {dispatch(addPizzaCart(pizzaCart))}
      else if (id === 2) {dispatch(removeFullPizza(pizzaCart))}
      else if(id === 0) {dispatch(removePizza(pizzaCart))}

    } else if (otherCount) {
      const pizzaCart = {
        img: info.img,
        name: info.name,
        description: info.description,
        price: info.price,
        counters: otherCount.counters,
        id: info.id
      }

      if(id === 1) {dispatch(addPizzaCart(pizzaCart))}
      else if (id === 2) {dispatch(removeFullPizza(pizzaCart))}
      else if(id === 0) {dispatch(removePizza(pizzaCart))}
    }
  }
  return (
    <article className="cart-pizza">
      <img
        src="./image/menu-main/remove/remove.svg"
        alt="remove button"
        width="20"
        className="cart-pizza__remove-button"
        onClick={(id) => addPizza(id = 2)}
      />
      <div className="cart-pizza__flex-block">
        <img
          src={"./image/menu-main/" + info.img}
          alt={info.name}
          className="cart-pizza__img"
          width="219"
        />
        <div className="cart-pizza__info">
          <div className="cart-pizza__text-block">
            <h3 className="cart-pizza__title">{info.name}</h3>
            <p className="cart-pizza__text">{info.description}</p>
            <span className="cart-pizza__price">Ціна: {info.price}грн.</span>
          </div>
          <div className="cart-pizza__buttons">
            <div className="cart-pizza__remove" onClick={(id) => addPizza(id = 0)}></div>
            <span>{info.counters}</span>
            <div className="cart-pizza__add" onClick={(id) => addPizza(id = 1)}></div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
