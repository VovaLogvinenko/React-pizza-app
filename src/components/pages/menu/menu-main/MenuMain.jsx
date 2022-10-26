import React from "react";
import Filter from './filter/Filter'
import OrderList from "./order-list/OrderList";


function MenuMain() {
  return (
    <main className="menu-main">
      <div className="content">
        <div className="m-m__title">
          <h1>Меню</h1>
        </div>
        <Filter />
        <OrderList />
      </div>
    </main>
  );
}

export default MenuMain;
