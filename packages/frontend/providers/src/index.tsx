import { SafeArea } from "./safe-area";

export function Provider({ children }: { children: React.ReactElement }) {
  return <SafeArea>{children}</SafeArea>;
}
