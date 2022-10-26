import React from "react";
import "./components/style/App.css"
import { Routes, Route } from 'react-router-dom'
import Home from "./components/pages/home/Home";
import Menu from "./components/pages/menu/Menu";
import PageCart from "./components/pages/menu/menu-main/filter/cart/pageCart/PageCart";
import Login from "./components/pages/profile/login/Login";
import Register from "./components/pages/profile/register/Register";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="Menu" element={<Menu />}/>
          <Route path="PageCart" element={<PageCart />}/>
          <Route path="Login" element={<Login />}/>
          <Route path="Register" element={<Register />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
