import React from "react";
import Cart from "./cart/Cart";
import Category from "./category/Category";

function Filter() {
  return (
    <div className="filter">
        <Category />
        <Cart />
    </div>
  );
}

export default Filter;
