import React from "react";
import { useDispatch } from 'react-redux'
import { addPizzaCart, removePizza } from "../../../../../features/pizza/pizzaSlice";
import { useSelector } from 'react-redux'

function PizzaItem( { info } ) {
  const italianPizza = useSelector(state => state.pizza.italianPizza)
  const americanPizza = useSelector(state => state.pizza.americanPizza)
  const other = useSelector(state => state.pizza.other)
  const dispatch = useDispatch()
  
  const italianPizzaCount = italianPizza.find(pizza => pizza.counters === info.counters)
  const americanPizzaCount = americanPizza.find(pizza => pizza.counters === info.counters)
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
      else {dispatch(removePizza(pizzaCart))}
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
      else {dispatch(removePizza(pizzaCart))}
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
      else {dispatch(removePizza(pizzaCart))}
    }
  }
  return (
    <div className="pizza">
      <img src={"./image/menu-main/" + info.img} alt={info.name} className="pizza-img" width="100%"/>
      <div className="pizza-content">
        <h3 className="pizza-name">{info.name}</h3>
        <span className="pizza-text">
          {info.description}
        </span>
        <div className="table">
            <div className="pizza-bottom pizza-text">
                <span>₴ {info.price}</span>
                <div className="pizza-buttons pizza-text">
                    {info.counters === 0 ? <button>-</button> : <button onClick={(id) => addPizza(id = 0)}>-</button>}
                    <span>{info.counters}</span>
                    <button onClick={(id) => addPizza(id = 1)}>+</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaItem;
