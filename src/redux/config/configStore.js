import { configureStore } from "@reduxjs/toolkit";

import todos from "../slices/todoSlice";
const store = configureStore({
  reducer: { todos },
});

export default store;
