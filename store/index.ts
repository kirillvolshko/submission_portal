"use client";

import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import { levelsService } from "./levels/levelsService";
import { assignmentService } from "./assignments/assignmentService";
import assignmentReducer from "./assignments/assignmentSlice";

const rootReducer = combineReducers({
  assignment: assignmentReducer,
  [levelsService.reducerPath]: levelsService.reducer,
  [assignmentService.reducerPath]: assignmentService.reducer,
});

const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        levelsService.middleware as Middleware,
        assignmentService.middleware as Middleware
      ),
  });
};

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
