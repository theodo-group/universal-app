type NavigationInput = {};

type NavigationOutput = {
  navigateToDetail: () => void;
};

export type NavigationRouter = (props: NavigationInput) => NavigationOutput;
