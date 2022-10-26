import React from "react";
import { useDispatch } from "react-redux";
import { setFilterCategory } from "../../../../../../features/pizza/pizzaSlice";
import { useSelector } from "react-redux";

function Category() {
  const dispatch = useDispatch();

  function clickId(id) {
    dispatch(setFilterCategory(id));
  }

  const id = useSelector((state) => state.pizza.number);

  return (
    <div>
      <div className="category">
        <div
          className={id === 1 ? "cg-active" : "cg"}
          onClick={(id) => clickId((id = 1))}
        >
          Все
        </div>
        <div
          className={id === 2 ? "cg-active" : "cg"}
          onClick={(id) => clickId((id = 2))}
        >
          Ітл. піца
        </div>
        <div
          className={id === 3 ? "cg-active" : "cg"}
          onClick={(id) => clickId((id = 3))}
        >
          Америк. піца
        </div>
        <div
          className={id === 4 ? "cg-active__last" : "cg"}
          onClick={(id) => clickId((id = 4))}
        >
          Додатково
        </div>
      </div>
      <form>
        <select
          name="category"
          id="category"
          onChange={(id) => clickId(id.target.value)}
        >
          <option value="All">Все</option>
          <option value="Italian">Ітл. піца</option>
          <option value="American">Америк. піца</option>
          <option value="Other">Додатково</option>
        </select>
      </form>
    </div>
  );
}

export default Category;
