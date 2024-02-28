import { JSXElementConstructor, ReactElement } from "react";

export interface BaseListItem {
  id: string;
}

export interface ListProps<T> {
  renderItem: ({
    item,
    index,
  }: {
    item: T;
    index: number;
  }) => ReactElement<T, string | JSXElementConstructor<T>> | null;
  data: T[];
  title?: string;
  estimatedItemSize: number;
  horizontal: boolean;
}
