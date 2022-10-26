import { useState, useEffect, React } from 'react'
import CartItem from '../cart-item/CartItem'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../../../hooks/use-auth'
import { removeAllPizza } from '../../../../../../../features/pizza/pizzaSlice'
import { useDispatch } from 'react-redux'

function PageCart() {
    const cartPizza = useSelector(state => state.pizza.cartPizza)
    const price = useSelector(state => state.pizza.cart.price)

    const [personAddress, setPersonAddress] = useState(null)
    
    const dispatch = useDispatch()
    
    const { isAuth } = useAuth()
    
    const push = useNavigate()

    useEffect(() => {
      if (cartPizza.length === 0) {
        push('/Menu');
      }
    },[cartPizza.length, push])

    function address() {
      if(isAuth === false) {
        push('/Register');
      } else if(personAddress === null) {
        setPersonAddress(prompt("Ваш адрес: ", ))
      } else if(personAddress) {
        alert("Ваше замовлення прийнято!")
        dispatch(removeAllPizza())
        push("/Menu")
      }
    }
  return (
    
    <div className='page-cart skip-head content'>
        <h1 className="page-cart__logo">Кошик</h1>
        <div className="page-cart__order">
                {cartPizza.map(list => (
                  <CartItem key={list.id} info={list}/>
                  ))}
        </div>
        <div className="page-cart__buy-block">
            <span className="buy__price">До сплати: {price}</span>
            <span className='buy__price'>Ваш адрес: {personAddress}</span>
            <button className='buy__button' onClick={() => address()}>Замовити</button>
        </div>
    </div>
  )
}

export default PageCart