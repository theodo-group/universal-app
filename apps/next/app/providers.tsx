// @ts-nocheck
"use client";

import { Provider } from "@frontend/providers";
import { useServerInsertedHTML } from "next/navigation";
import { StyleSheet } from "react-native";

const StylesProvider = ({ children }: { children: React.ReactNode }) => {
  useServerInsertedHTML(() => {
    const sheet = StyleSheet.getSheet();
    return <style dangerouslySetInnerHTML={{ __html: sheet.textContent }} id={sheet.id} />;
  });
  return <>{children}</>;
};

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      <StylesProvider>{children}</StylesProvider>
    </Provider>
  );
};
