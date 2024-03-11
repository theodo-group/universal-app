import { SafeArea } from "./safe-area";

export function Provider({ children }: { children: React.ReactNode }) {
  return <SafeArea>{children}</SafeArea>;
}

export { useNavigation } from "./navigation";
export type { RootStackParamList, RootTabParamList } from "./navigation/useNavigation.tv";
