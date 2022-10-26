import React from 'react'
import PizzaItem from '../pizza-item/PizzaItem'
import { useSelector } from 'react-redux'

function OrderList() {
    const filterCategory = useSelector(state => state.pizza.number)
    const italianPizza = useSelector(state => state.pizza.italianPizza)
    const americanPizza = useSelector(state => state.pizza.americanPizza)
    const other = useSelector(state => state.pizza.other)
  return (
    <div className="order-list">
        {filterCategory === 1 || filterCategory === 2 || filterCategory === 'All' || filterCategory === 'Italian' ? <article className="italian-pizza">
            <div className="italian-title count-food">
              <h2>Італійська піца</h2>
              <div className="dash"></div>
            </div>
            <div className="order-pizza">
              {italianPizza.map(list => (
                <PizzaItem key={list.id} info={list}/>
              ))}
            </div>
          </article> 
          : ''}
          {filterCategory === 1 || filterCategory === 3 || filterCategory === 'All' || filterCategory === 'American' ?  <article className="american-pizza">
            <div className="american-title count-food">
              <h2>Американська піца</h2>
              <div className="dash"></div>
            </div>
            <div className="order-pizza">
              {americanPizza.map(list => (
                <PizzaItem key={list.id} info={list}/>
              ))}
            </div>
          </article> 
          : ''}
          {filterCategory === 1 || filterCategory === 4 || filterCategory === 'All' || filterCategory === 'Other' ?  <article className="other">
            <div className="other-title count-food">
              <h2>Додатково</h2>
              <div className="dash"></div>
            </div>
            <div className="order-pizza">
              {other.map(list => (
                <PizzaItem key={list.id} info={list}/>
              ))}
            </div>
          </article> 
          : ''}
        </div>
  )
}

export default OrderList