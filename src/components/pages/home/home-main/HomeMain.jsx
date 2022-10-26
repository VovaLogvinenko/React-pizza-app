import React from "react";
import { Link } from 'react-router-dom'

function HomeMain() {
  return (
    <main className="home-main skip-head">
      <div className="home-main__text-block content">
        <div className="logo">
          <div to="/" className="home-main__logo-block">
            <img
              src="./image/header/logo.svg"
              alt="logo"
              className="home-main__logo-image"
              width="100"
            />
            <div className="home-main__logo-text">
              <span className="home-main__logo-yummy">Yummy</span>
              <span className="home-main__logo-pizza">Pizza</span>
            </div>
          </div>
        </div>
        <div className="home-main__under-logo">
            <h3 className="home-main__yummy-title">Yummy Pizza - онлайн замовлення</h3>
            <h4 className="home-main__yummy">Вашу піцу буде доставлено свіжою і вчасно </h4>
            <Link to="/Menu"><button className="home-main__btn">Замовити</button></Link>
        </div>
      </div>
    </main>
  );
}

export default HomeMain;
