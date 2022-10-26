import React from 'react'
import Form from '../form/Form'
import { Link, useNavigate  } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../../features/pizza/userSlice'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const dispatch = useDispatch()
  const push = useNavigate ()

  const link = <Link to="/Login" className='link-question'>Логін</Link>

  function handleRegister(email, password) {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }))
          push('/')
        })
        .catch(() => {
          if(email.includes('@') === false || email.includes('.') === false || email.length <= 4) {
            alert('Невірно введена пошта!')
          } else if (password <= 5) {
            alert('Пароль повинен містити більше 6 символів')
            console.log(auth)
          }
        })
  }

  return (
    <Form 
    title={'Реєстрація'}
    register={"Уже зареєстровані?"}
    link={link}
    handleСlick={handleRegister}
    />
  )
}

export default Register