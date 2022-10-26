import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../features/pizza/userSlice'
import { getAuth, signOut } from "firebase/auth";

function Header() {
    const[menu, setMenu] = useState(false)
    const { isAuth } = useAuth()
    const dispatch = useDispatch()

    function open() {
        setMenu(prevMenu => prevMenu = true)
        document.body.style.overflow = 'hidden';
    }
    function close() {
        setMenu(prevMenu => prevMenu = false)
        document.body.style.overflow = 'visible';
    }

    function exitProfile() {
        close()
        const auth = getAuth();
        signOut(auth)
        dispatch(removeUser())
    }
    
  return (
    <header className='header'>
        <div className='logo'>
            <Link to="/" className='logo-block'>
                <img src="./image/header/logo.svg" alt="logo" className='logo-image' width="50"/>
                <div className='logo-text'>
                    <span className='logo-yummy'>Yummy</span>
                    <span className='logo-pizza'>Pizza</span>
                </div>
            </Link>
        </div>
        <nav className='center-nav'>
            <ul className='nav'>
                <li><NavLink to="/" className='nav-link'>Головна</NavLink></li>
                <li><NavLink to="/Menu" className='nav-link' >Меню</NavLink></li>
                {isAuth ? 
                <li className='nav-link profile' onClick={() => exitProfile()}>Вийти</li> : 
                <li><NavLink to="/Login" className='nav-link' >Логін</NavLink></li>}
                {isAuth ? '' : <li><NavLink to="/Register" className='nav-link' >Реєстрація</NavLink></li>}
            </ul>
        </nav>
        <div className='hide'>
            <div className='burger' onClick={() => open()}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className={menu ? 'burger-menu' : 'burger-menu--not'}>
            <div className='invisible-block' onClick={() => close()}></div>
            <div className='logo'>
                <Link to="/" className='burger-logo--block'>
                    <img src="./image/header/logo.svg" alt="logo" className='logo-image' width="60"/>
                    <div className='burger-text'>
                        <span className='burger-yummy'>Yummy</span>
                        <span className='burger-pizza'>Pizza</span>
                    </div>
                </Link>
            </div>
            <ul>
                <li><NavLink to="/" className='burger-link' onClick={() => close()}>Головна</NavLink></li>
                <li><NavLink to="/Menu" className='burger-link' onClick={() => close()}>Меню</NavLink></li>
                {isAuth ? 
                <li className='burger-link profile' onClick={() => exitProfile()}>Вийти</li> : 
                <li><NavLink to="/Login" className='burger-link' onClick={() => close()}>Логін</NavLink></li>}
                {isAuth ? '' : <li><NavLink to="/Register" className='burger-link' onClick={() => close()}>Реєстрація</NavLink></li>}
            </ul>
            <div className='close' onClick={() => close()}>&#10006;</div>
        </div>
    </header>
  )
}

export default Header