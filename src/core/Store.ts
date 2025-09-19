import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../shared/slicers/UserSlice"; // ✅ reducer export

const store = configureStore({
  reducer: {
    user: userReducer, // lowercase key is recommended
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
