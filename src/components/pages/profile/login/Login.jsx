import React from 'react'
import Form from '../form/Form'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../../features/pizza/userSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const dispatch = useDispatch()
  const push = useNavigate ()

  function handleLogin(email, password) {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken
          }))
          push('/')
        })
        .catch(() => {
          if(email.includes('@') === false || email.includes('.') === false) {
            alert('Невірно введена пошта!')
          } else if (password <= 5) {
            alert('Пароль повинен містити більше 6 символів')
          } else if (password) {
            alert('Невірний пароль')
          }
        })
  }


  const link = <Link to="/Register" className='link-question'>Зареєструватись</Link>
  return (
    <div>
        <Form 
        title={'Логін'}
        register={"Ще не зареєстровані?"}
        link={link}
        button={"Логін"}
        handleСlick={handleLogin}
        />
    </div>
  )
}

export default Login