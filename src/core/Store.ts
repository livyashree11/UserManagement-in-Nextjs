import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../shared/slicers/UserSlice";

const store = configureStore({
  reducer: {
    User: userReducer,
  },
});

// Beginner-friendly way with less complex syntax
export type RootState = {
  User: ReturnType<typeof userReducer>;
};
export type AppDispatch = typeof store.dispatch;

export default store;

