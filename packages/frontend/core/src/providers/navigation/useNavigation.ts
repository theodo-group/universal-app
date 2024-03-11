import { useRouter as useSolitoRouter } from "solito/navigation";
import { NavigationRouter } from "./useNavigation.types";

export const useNavigation: NavigationRouter = () => {
  const { push } = useSolitoRouter();
  const navigateToDetailPage = () => {
    push("/user/1");
  };
  return { navigateToDetailPage };
};
