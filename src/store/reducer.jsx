import { configureStore } from "@reduxjs/toolkit";

//reducers
import restaurantCreate from "./reducers/create";

const store = configureStore({
  reducer: {
    create: restaurantCreate,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
