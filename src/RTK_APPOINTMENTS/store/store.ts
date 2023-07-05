import { configureStore } from "@reduxjs/toolkit";
import { dummyJsonApi } from "../services/dummyTriggerApi";

export default configureStore({
  reducer: {
    [dummyJsonApi.reducerPath]: dummyJsonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([dummyJsonApi.middleware]),
});
