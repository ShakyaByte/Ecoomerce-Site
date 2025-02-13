import { configureStore } from "@reduxjs/toolkit";
import quantitiesReducer from './counter/quantitiesSlice';
import cartReducer from './counter/cardSlice'

export const store = configureStore({
  reducer: {
    quantities: quantitiesReducer,
    cart: cartReducer,

  },
});