import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/features/counter-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add more reducers as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
