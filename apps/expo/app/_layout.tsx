import { Provider } from "@frontend/core";
import { Stack } from "expo-router";
import React from "react";
import "../global.css";

export default function Root() {
  return (
    <Provider>
      <Stack />
    </Provider>
  );
}
