"use client";

import { Provider } from "@frontend/core";
import { useServerInsertedHTML } from "next/navigation";
import { StyleSheet } from "react-native";

const StylesProvider = ({ children }: { children: React.ReactNode }) => {
  useServerInsertedHTML(() => {
    // @ts-expect-error - getSheet() is provided in Solito V4 but typing does not pick up the function - docs provide a ts-nocheck on the Provider code snippet https://solito.dev/app-directory/overview#appstyles-providertsx
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
