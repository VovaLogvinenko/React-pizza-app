import { useState, React } from 'react'

function Form({ title, register, link, handleСlick }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='form skip-head content'>
        <div className='form-title'> {title} </div>
        <input 
        type="email" 
        placeholder='Email'
        className="form-input"
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
        <input 
        type="password"
        placeholder='Пароль'
        className="form-input"
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
        <div className='form-question'>{register} {link}</div>
        <button className='form-button' onClick={() => handleСlick(email, password)}>{title}</button>
    </div>
  )
}

export default Form