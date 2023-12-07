import { configureStore } from "@reduxjs/toolkit";
import QuanlySinhvienReducer from "./reducer/QuanlySinhvienReducer";

export const store = configureStore({
  reducer: {
    QuanlySinhvienReducer: QuanlySinhvienReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
