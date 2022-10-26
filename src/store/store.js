import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "../features/pizza/pizzaSlice";
import userSlice from "../features/pizza/userSlice";

export const store = configureStore ({
    reducer: {
        pizza: pizzaSlice,
        user: userSlice,
    },
})