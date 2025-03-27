"use client";

import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import { levelsService } from "./levels/levelsService";

const rootReducer = combineReducers({
  [levelsService.reducerPath]: levelsService.reducer,
});

const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(levelsService.middleware as Middleware),
  });
};

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
