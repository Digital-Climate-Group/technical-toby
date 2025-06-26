"use client";

// TODO: Implement Redux provider
// We need:
// 1. Store reference using useRef
// 2. Provider wrapper from react-redux

import { AppStore, store } from "@/lib/store";
import { useRef } from "react";
import { Provider } from "react-redux";
// TODO: Import Provider from react-redux

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Initialize store only once
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // TODO: Create store instance here
    storeRef.current = {} as AppStore; // Remove this example line
  }

  // TODO: Return Provider with the store
  return (
    <Provider store={store}>{children}</Provider> // Replace this with actual Provider
  );
}
