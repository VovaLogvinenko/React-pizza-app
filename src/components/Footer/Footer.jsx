import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
        <div className='info-blocks'>
            <section className='about'>
                <h2 className='footer-title'>Про нас</h2>
                <p className='footer-text'>YUMMY PIZZA - піца зі <br /> смаком щастя </p>
                <ul className='footer-links'>
                    <li><a href="https://www.instagram.com/" ><img src="./image/footer/inst.svg" alt="instagram" /></a></li>
                    <li><a href="https://www.twitter.com/" ><img src="./image/footer/twitter.svg" alt="twitter" /></a></li>
                    <li><a href="https://www.facebook.com/" ><img src="./image/footer/facebook.svg" alt="facebook" /></a></li>
                </ul>
            </section>
            <section className="contacts">
                <h2 className='footer-title'>Контакти</h2>
                <p className='footer-text'>Тел: +380 (ХХ) ХХХ ХХ-ХХ</p>
                <p className='footer-text'>Моб: +380 (ХХ) ХХХ ХХ-ХХ</p>
                <a href="mailto:yummypizza@gmail.com" className='footer-email'>Email: yummypizza@gmail.com</a>
            </section>
        </div>
        <p className='copyright'>COPYRIGHT &#169; 2022 TAP FOODWORKS LTD. | ALL RIGHTS RESERVED</p>
    </footer>
  )
}

export default Footer