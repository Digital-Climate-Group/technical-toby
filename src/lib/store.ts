// TODO: Set up Redux store configuration
// We need:
// 1. A function to make the store with empty reducer
// 2. Type definitions for RootState and AppDispatch

import { configureStore } from '@reduxjs/toolkit';

// TODO: Create and export the store instance
export const makeStore = () => {
  return configureStore({
    reducer: {}, // TODO: Add reducers here when needed
  });
};

// TODO: Set up types
// We need:
// - AppStore type from makeStore's return type
// - RootState type from the store's getState
// - AppDispatch type from the store itself

// Remove these example exports when implementing
export type AppStore = unknown;
export type RootState = unknown;
export type AppDispatch = unknown;
