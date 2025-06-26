// TODO: Set up Redux store configuration
// We need:
// 1. A function to make the store with empty reducer
// 2. Type definitions for RootState and AppDispatch

import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./store/authSlice"

// TODO: Create and export the store instance
export const store = configureStore({
  reducer: {
    auth: authReducer
  }
})


// TODO: Set up types
// We need:
// - AppStore type from makeStore's return type
// - RootState type from the store's getState
// - AppDispatch type from the store itself


export type AppStore = typeof store;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;
// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>;

