import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { SafeArea } from "./safe-area";

export function Provider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <SafeArea>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SafeArea>
  );
}
