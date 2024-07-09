// create slice method
// initialize initial state
// create slice using create slice; give name, initial state, and actions
// import actions in components

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
