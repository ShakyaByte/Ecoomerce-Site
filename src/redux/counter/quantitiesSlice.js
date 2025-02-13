// redux/quantities/quantitiesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const quantitiesSlice = createSlice({
  name: 'quantities',
  initialState,
  reducers: {
    setQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      state[id] = quantity;
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      if (state[id] > 0) {
        state[id] += 1;
      } else {
        state[id] = 1; // Ensure it never goes below 1
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      if (state[id] > 1) {
        state[id] -= 1;
      }
    },
  },
});

export const { setQuantity, incrementQuantity, decrementQuantity } = quantitiesSlice.actions;
export default quantitiesSlice.reducer;
