import { createSlice } from "@reduxjs/toolkit";

// Helper functions to work with localStorage
const loadCart = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : []; // Return parsed cart or empty array
};

const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart)); // Save cart as a JSON string
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCart(), // Load cart from localStorage when app starts
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + product.quantity;
      } else {
        state.push(product);
      }
      saveCart(state); // Save the updated cart to localStorage
    },
    
    removeFromCart: (state, action) => {
      const updatedCart = state.filter((item) => item.id !== action.payload.id);
      saveCart(updatedCart); // Save updated cart to localStorage
      return updatedCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
