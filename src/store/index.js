import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  base: "food",
  toppings: [],
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addBase(state, action) {},
    addName(state, action) {
      state.name = action.payload;
    },
  },
});

const store = configureStore({
  reducer: foodSlice.reducer,
});

export const foodActions = foodSlice.actions;

export default store;
