type NavigationInput = {};

type NavigationOutput = {
  navigateToDetailPage: () => void;
};

export type NavigationRouter = (props: NavigationInput) => NavigationOutput;
