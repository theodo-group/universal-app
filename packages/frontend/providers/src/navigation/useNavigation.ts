import { NavigationRouter } from "navigation/useNavigation.types";
import { useRouter as useSolitoRouter } from "solito/navigation";

export const useNavigation: NavigationRouter = () => {
  const { push } = useSolitoRouter();
  const navigateToDetailPage = () => {
    push("/user/1");
  };
  return { navigateToDetailPage };
};
